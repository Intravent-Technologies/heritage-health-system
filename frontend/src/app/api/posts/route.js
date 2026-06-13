import { fetchWpPosts } from '../_lib/wordpress'

export async function GET() {
  const posts = await fetchWpPosts()
  return Response.json(posts)
}
