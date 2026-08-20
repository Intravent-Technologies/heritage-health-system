'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Resources() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => setPosts([]))
  }, [])

  if (posts.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-all group">
          <div className="aspect-[16/9] bg-cream overflow-hidden relative">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-200">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            )}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {(post.tags || []).slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs bg-teal text-white px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <h2 className="font-medium text-lg text-dark leading-relaxed mb-2 line-clamp-2 group-hover:text-teal transition">{post.title}</h2>
            <p className="text-sm text-gray-400 line-clamp-2 mb-4">{post.excerpt || post.content.replace(/<[^>]+>/g, '').slice(0, 120)}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-300">{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              <span className="text-sm text-teal font-medium">Read More &rarr;</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
