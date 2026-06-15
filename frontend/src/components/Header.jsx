'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  { label: 'Comprehensive Psychiatric Eval', path: '/services/comprehensive-psychiatric-evaluation' },
  { label: 'Medication Management', path: '/services/medication-management' },
  { label: 'Person Centered Behavioral Healthcare', path: '/services/person-centered-behavioral-healthcare' },
  { label: 'Counseling Services', path: '/services/counseling-services' },
  { label: 'Diagnostic Evaluation', path: '/services/diagnostic-evaluation' },
  { label: 'Telehealth Services', path: '/services/telehealth-services' },
  { label: 'Spravato Treatment', path: '/spravato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isServicesPage = services.some((s) => pathname === s.path)

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:pl-6 md:pr-8 flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Heritage Health System" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          <Link href="/" className={`text-sm ${pathname === '/' ? 'text-teal font-medium' : 'text-gray-600'} hover:text-teal transition`}>Home</Link>
          <Link href="/about" className={`text-sm ${pathname === '/about' ? 'text-teal font-medium' : 'text-gray-600'} hover:text-teal transition`}>About</Link>

          <div className="relative" ref={dropdownRef} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-sm ${isServicesPage ? 'text-teal font-medium' : 'text-gray-600'} hover:text-teal transition flex items-center gap-1 cursor-pointer`}>
              Services
              <svg className={`w-4 h-4 transition ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 h-4 w-full" />
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-border/60 py-2 z-50 animate-fade-in">
                {services.map((s) => (
                  <Link key={s.path} href={s.path} onClick={() => setServicesOpen(false)}
                    className={`block text-sm px-5 py-3 ${pathname === s.path ? 'text-teal font-medium' : 'text-gray-700'} hover:text-teal hover:bg-teal/5 transition`}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className={`text-sm ${pathname === '/blog' ? 'text-teal font-medium' : 'text-gray-600'} hover:text-teal transition`}>Blog</Link>
          <Link href="/contact" className={`text-sm ${pathname === '/contact' ? 'text-teal font-medium' : 'text-gray-600'} hover:text-teal transition`}>Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/spravato" className="hidden lg:inline-flex items-center gap-1.5 bg-dark text-white text-sm px-4 py-2 rounded-button font-semibold hover:bg-dark-mid transition-transform hover:scale-105 active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Spravato Treatment
          </Link>
          <Link href="/contact" className="hidden lg:inline-block bg-teal text-white text-sm px-5 py-2 rounded-button font-semibold hover:bg-teal-dark transition-transform hover:scale-105 active:scale-95">
            Book Appointment &rarr;
          </Link>
          <Link href="/preceptorship" className="hidden lg:inline-flex items-center gap-1.5 border-2 border-green text-green text-sm px-4 py-2 rounded-button font-semibold hover:bg-green/5 transition-transform hover:scale-105 active:scale-95">
            Preceptorship
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <button className="lg:hidden p-2 text-gray-400 hover:text-teal transition" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      </div>

      {mobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border/50 shadow-lg animate-fade-in">
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)}
              className={`text-base py-3 px-3 rounded-lg ${pathname === '/' ? 'text-teal font-medium bg-teal/5' : 'text-gray-600'} hover:text-teal hover:bg-teal/5 transition`}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}
              className={`text-base py-3 px-3 rounded-lg ${pathname === '/about' ? 'text-teal font-medium bg-teal/5' : 'text-gray-600'} hover:text-teal hover:bg-teal/5 transition`}>About</Link>

            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`text-base py-3 px-3 rounded-lg flex items-center justify-between w-full ${isServicesPage ? 'text-teal font-medium bg-teal/5' : 'text-gray-600'} hover:text-teal hover:bg-teal/5 transition`}>
                Services
                <svg className={`w-5 h-5 transition ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col ml-3 pb-2 gap-0.5">
                  {services.map((s) => (
                    <Link key={s.path} href={s.path} onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                      className={`text-sm py-2.5 px-3 rounded-lg ${pathname === s.path ? 'text-teal font-medium bg-teal/5' : 'text-gray-500'} hover:text-teal hover:bg-teal/5 transition`}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setMobileOpen(false)}
              className={`text-base py-3 px-3 rounded-lg ${pathname === '/blog' ? 'text-teal font-medium bg-teal/5' : 'text-gray-600'} hover:text-teal hover:bg-teal/5 transition`}>Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className={`text-base py-3 px-3 rounded-lg ${pathname === '/contact' ? 'text-teal font-medium bg-teal/5' : 'text-gray-600'} hover:text-teal hover:bg-teal/5 transition`}>Contact</Link>

            <div className="flex flex-col gap-2 mt-3">
              <Link href="/spravato" onClick={() => setMobileOpen(false)}
                className="bg-dark text-white text-center text-base px-6 py-3.5 rounded-button font-medium hover:bg-dark-mid transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Spravato Treatment
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="bg-teal text-white text-center text-base px-6 py-3.5 rounded-button font-medium hover:bg-teal-dark transition">
                Book Appointment &rarr;
              </Link>
              <Link href="/preceptorship" onClick={() => setMobileOpen(false)}
                className="border-2 border-green text-green text-center text-sm px-5 py-2.5 rounded-button font-medium hover:bg-green/5 transition flex items-center justify-center gap-1.5">
                Preceptorship
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
