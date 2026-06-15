import { readJSON, writeJSON } from '../_lib/db'

const TEBRA_URL = 'https://www.tebra.com/care/provider/olubunmi-olawale-1669953071'

async function fetchTebraReviews() {
  try {
    const res = await fetch(TEBRA_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      },
    })
    if (!res.ok) {
      console.error('Tebra fetch failed:', res.status)
      return []
    }
    const html = await res.text()
    return parseTebraReviews(html)
  } catch (err) {
    console.error('Tebra fetch error:', err.message)
    return []
  }
}

function parseTebraReviews(html) {
  const reviews = []
  const nameRegex = /latest-rating__reviewer[^>]*>([^<]+?)<\/p>/g
  let match

  while ((match = nameRegex.exec(html)) !== null) {
    const nameBlock = match[1].replace(/\s+/g, ' ').trim()
    const parts = nameBlock.split('\u2022').map((s) => s.trim())
    if (parts.length < 2) {
      const altParts = nameBlock.split('&bull;').map((s) => s.trim())
      if (altParts.length < 2) continue
      parts.length = 0
      parts.push(...altParts)
    }

    const name = parts[0].trim()
    const date = parts.slice(1).join(' ').trim()

    if (!name || !date) continue

    const beforeName = html.slice(Math.max(0, match.index - 600), match.index)
    const textMatch = beforeName.match(/<p>([^<]+?)<\/p>/g)
    let text = ''
    if (textMatch) {
      for (const t of textMatch.reverse()) {
        const clean = t.replace(/<\/?p>/g, '').trim()
        if (clean.length > 15 && !clean.includes('Show more') && !clean.includes('latest-rating')) {
          text = clean
          break
        }
      }
    }

    if (!text) continue

    const fullTextMatch = html.slice(Math.max(0, match.index - 700), match.index).match(/<span class="d-none">([^<]+?)<\/span>/)
    if (fullTextMatch) {
      text = text.replace(/<a[^>]*>.*/, '').trim() + ' ' + fullTextMatch[1].trim()
    } else {
      text = text.replace(/<a[^>]*>.*/, '').trim()
    }

    text = text.replace(/\s+/g, ' ').trim()
    if (text.length < 10) continue

    reviews.push({ name, date, text, source: 'tebra' })
  }

  const seen = new Set()
  return reviews.filter((r) => {
    const key = r.text.slice(0, 40)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export async function GET() {
  const [tebraReviews, localReviews] = await Promise.all([
    fetchTebraReviews(),
    Promise.resolve(readJSON('reviews.json')),
  ])

  const all = [
    ...localReviews.map((r) => ({ ...r, source: 'local' })),
    ...tebraReviews,
  ]

  const sorted = all.sort((a, b) => {
    const da = new Date(a.date)
    const db = new Date(b.date)
    if (isNaN(da.getTime()) || isNaN(db.getTime())) return 0
    return db - da
  })

  return Response.json({ reviews: sorted, total: sorted.length, tebraCount: tebraReviews.length, localCount: localReviews.length })
}

export async function POST(req) {
  const body = await req.json()
  const { name, text } = body

  if (!name || !text || text.length < 10) {
    return Response.json({ error: 'Please provide your name and a review (min 10 characters).' }, { status: 400 })
  }

  const review = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name,
    text: text.trim(),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    source: 'local',
    createdAt: new Date().toISOString(),
  }

  const reviews = readJSON('reviews.json')
  reviews.push(review)
  writeJSON('reviews.json', reviews)

  return Response.json({ success: true, review }, { status: 201 })
}
