# Heritage Health System

A Next.js website for Heritage Health System, a psychiatric mental health practice in Quincy, MA.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Data:** JSON flat files (no database)
- **Runtime:** Node.js

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
frontend/src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   │   ├── _lib/           # Shared API helpers (db, email)
│   │   ├── admin/          # Admin endpoints (login, bookings, slots, posts)
│   │   ├── blog/           # Blog endpoints
│   │   ├── bookings/       # Booking endpoints
│   │   ├── posts/          # Public post endpoints
│   │   └── slots/          # Slot endpoints
│   ├── blog/               # Blog pages ([slug])
│   ├── contact/            # Contact / booking page
│   ├── preceptorship/      # Preceptorship program page
│   ├── refill-request/     # Prescription refill request page
│   ├── services/           # Service pages ([slug])
│   └── spravato/           # SPRAVATO treatment page
├── components/
│   ├── admin/              # Admin components
│   │   ├── Admin.jsx       # Main admin dashboard
│   │   ├── SpravatoContent.jsx  # SPRAVATO page content
│   │   └── SpravatoISI.jsx     # Important Safety Information
│   ├── forms/              # Form components
│   │   ├── BookingForm.jsx
│   │   ├── PreceptorshipForm.jsx
│   │   └── RefillRequestForm.jsx
│   ├── layout/             # Layout components
│   │   ├── EmergencyBanner.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   └── sections/           # Reusable page sections
│       ├── FounderBio.jsx
│       ├── InsuranceLogos.jsx
│       ├── PageCTA.jsx
│       ├── Resources.jsx
│       ├── ReviewForm.jsx
│       └── ReviewsSection.jsx
├── data/                   # JSON data files
│   ├── bookings.json
│   ├── posts.json
│   ├── reviews.json
│   └── slots.json
├── lib/
│   └── constants.js        # Shared constants (business info, nav, insurers)
└── services.js             # Service definitions
```

## Key Features

- **Insurance verification form** with booking workflow
- **Admin dashboard** for managing bookings, time slots, and blog posts
- **Blog** with CMS-style post management
- **SPRAVATO treatment page** with detailed clinical information
- **Preceptorship application** for nursing students
- **Telehealth services** support
- **Responsive design** (mobile-first)

## Data Storage

Uses flat JSON files for data persistence:

- `bookings.json` - Patient booking submissions
- `slots.json` - Available appointment slots
- `posts.json` - Blog posts
- `reviews.json` - Patient reviews

## Admin Access

Navigate to `/admin` and enter the admin password to access the dashboard for managing bookings, slots, and blog content.
