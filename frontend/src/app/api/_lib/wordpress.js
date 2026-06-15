import { request as httpsRequest } from 'https'

const WP_API = process.env.WORDPRESS_API_URL || 'https://www.heritagehealthsystem.com/wp-json/wp/v2'
const WP_IP = process.env.WORDPRESS_IP || '82.29.157.190'
const WP_HOST = process.env.WORDPRESS_HOST || 'www.heritagehealthsystem.com'

function fetchViaIp(path) {
  return new Promise((resolve, reject) => {
    const data = []
    httpsRequest(
      {
        hostname: WP_IP,
        path: `/wp-json/wp/v2${path}`,
        headers: { Host: WP_HOST },
        servername: WP_HOST,
        rejectUnauthorized: false,
      },
      (res) => {
        res.on('data', (c) => data.push(c))
        res.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(data).toString()))
          } catch (e) {
            reject(e)
          }
        })
      }
    ).on('error', reject).end()
  })
}

async function fetchWithFallback(path) {
  try {
    const res = await fetch(`${WP_API}${path}`, { next: { revalidate: 300 } })
    if (res.ok) return await res.json()
  } catch {}

  try {
    return await fetchViaIp(path)
  } catch {}

  return null
}

export async function fetchWpPosts() {
  const data = await fetchWithFallback('/posts?_embed=wp:featuredmedia&per_page=50')
  if (!Array.isArray(data)) return []
  return data.map(transformWpPost)
}

export async function fetchWpPost(slugOrId) {
  const data = await fetchWithFallback(`/posts?slug=${slugOrId}&_embed=wp:featuredmedia`)
  if (Array.isArray(data) && data.length > 0) return transformWpPost(data[0])

  const single = await fetchWithFallback(`/posts/${slugOrId}?_embed=wp:featuredmedia`)
  if (single && single.id) return transformWpPost(single)

  return null
}

const IMAGE_OVERRIDES = {
  'what-are-the-6-types-of-anxiety-disorders': 'https://images.pexels.com/photos/8560282/pexels-photo-8560282.jpeg?w=800&q=80',
  'unlocking-relief-how-spravato-is-revolutionizing-depression-treatment': 'https://images.pexels.com/photos/6382598/pexels-photo-6382598.jpeg?w=800&q=80',
  'is-25mg-of-zoloft-enough-for-anxiety': 'https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?w=800&q=80',
  'how-a-person-with-bipolar-thinks': 'https://images.pexels.com/photos/6756555/pexels-photo-6756555.jpeg?w=800&q=80',
  'psychiatric-nurse-practitioner': 'https://images.pexels.com/photos/5699436/pexels-photo-5699436.jpeg?w=800&q=80',
  'dose-of-propranolol-for-anxiety': 'https://images.pexels.com/photos/208541/pexels-photo-208541.jpeg?w=800&q=80',
  'what-happens-in-a-psychiatric-evaluation': 'https://images.pexels.com/photos/3958468/pexels-photo-3958468.jpeg?w=800&q=80',
  'stop-shaking-from-anxiety-immediately': 'https://images.pexels.com/photos/6382634/pexels-photo-6382634.jpeg?w=800&q=80',
  'can-depression-be-self-sabotaging': 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?w=800&q=80',
  'telehealth-and-in-person-care': 'https://images.pexels.com/photos/7195120/pexels-photo-7195120.jpeg?w=800&q=80',
}

function transformWpPost(post) {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return {
    id: String(post.id),
    title: post.title.rendered,
    slug: post.slug,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').trim(),
    image: IMAGE_OVERRIDES[post.slug] || media?.source_url || '',
    tags: ['blog'],
    published: true,
    createdAt: post.date,
    updatedAt: post.modified,
  }
}
