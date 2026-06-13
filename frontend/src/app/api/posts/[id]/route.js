import { fetchWpPost } from '../../_lib/wordpress'

export async function GET(req, { params }) {
  const post = await fetchWpPost(params.id)
  if (!post) return Response.json({ error: 'Post not found.' }, { status: 404 })
  return Response.json(post)
}
