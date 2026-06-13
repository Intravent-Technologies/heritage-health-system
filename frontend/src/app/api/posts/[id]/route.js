import { readJSON } from '../../_lib/db'
import { fetchWpPost } from '../../_lib/wordpress'

export async function GET(req, { params }) {
  try {
    const wpPost = await fetchWpPost(params.id)
    if (wpPost) return Response.json(wpPost)
  } catch {}

  const posts = readJSON('posts.json')
  const localPost = posts.find((p) => p.id === params.id || p.slug === params.id)
  if (!localPost) return Response.json({ error: 'Post not found.' }, { status: 404 })
  return Response.json(localPost)
}
