'use client'

import { useState } from 'react'

export default function ReviewForm({ onSuccess }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    if (!name || !text || text.length < 10) {
      setError('Please provide your name and a review (min 10 characters).')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
      } else {
        setMessage('Thank you for your review! It has been submitted.')
        setName('')
        setText('')
        if (onSuccess) onSuccess(data.review)
      }
    } catch {
      setError('Could not submit. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
      <h3 className="font-serif text-xl font-bold text-dark mb-4">Share Your Experience</h3>
      <p className="text-sm text-gray-500 mb-5">Your feedback helps others find the care they need.</p>

      <div className="mb-4">
        <label htmlFor="review-name" className="block text-sm font-medium text-dark mb-1">Your Name</label>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane D."
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
          maxLength={60}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="review-text" className="block text-sm font-medium text-dark mb-1">Your Review</label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your experience with Heritage Health System..."
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal resize-none"
          rows={4}
          maxLength={1000}
        />
        <div className="text-xs text-gray-400 mt-1 text-right">{text.length}/1000</div>
      </div>

      {error && <div className="text-sm text-red-500 mb-4">{error}</div>}
      {message && <div className="text-sm text-green mb-4">{message}</div>}

      <button
        type="submit"
        disabled={sending}
        className="bg-teal text-white text-sm font-semibold px-6 py-3 rounded-button w-full hover:bg-teal-dark transition disabled:opacity-60"
      >
        {sending ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  )
}
