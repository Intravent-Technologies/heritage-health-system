import { readJSON } from '../_lib/db'
import { fetchWpPosts } from '../_lib/wordpress'

export async function GET() {
  try {
    const posts = await fetchWpPosts()
    if (posts.length > 0) return Response.json(posts)
  } catch {}

  let posts = readJSON('posts.json')
  posts = posts.filter((p) => p.published !== false)
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return Response.json(posts)
}
