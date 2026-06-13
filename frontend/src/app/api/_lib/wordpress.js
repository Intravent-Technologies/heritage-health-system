const WP_API = process.env.WORDPRESS_API_URL || 'https://www.heritagehealthsystem.com/wp-json/wp/v2'

export async function fetchWpPosts() {
  const url = `${WP_API}/posts?_embed=wp:featuredmedia&per_page=50`
  const res = await fetch(url, { next: { revalidate: 300 } })
  if (!res.ok) return []
  const data = await res.json()
  return data.map(transformWpPost)
}

export async function fetchWpPost(slugOrId) {
  const bySlug = `${WP_API}/posts?slug=${slugOrId}&_embed=wp:featuredmedia`
  const res = await fetch(bySlug, { next: { revalidate: 300 } })
  if (!res.ok) return null
  const data = await res.json()
  if (data.length > 0) return transformWpPost(data[0])

  const byId = `${WP_API}/posts/${slugOrId}?_embed=wp:featuredmedia`
  const res2 = await fetch(byId, { next: { revalidate: 300 } })
  if (!res2.ok) return null
  return transformWpPost(await res2.json())
}

function transformWpPost(post) {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return {
    id: String(post.id),
    title: post.title.rendered,
    slug: post.slug,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').trim(),
    image: media?.source_url || '',
    tags: ['blog'],
    published: true,
    createdAt: post.date,
    updatedAt: post.modified,
  }
}
