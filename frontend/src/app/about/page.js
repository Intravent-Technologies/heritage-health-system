import Link from 'next/link'
import BookingForm from '../../components/BookingForm'
import PageCTA from '../../components/PageCTA'
import ReviewsSection from '../../components/ReviewsSection'
import ReviewForm from '../../components/ReviewForm'
import InsuranceLogos from '../../components/InsuranceLogos'

const values = [
  { icon: 'compassion', title: 'Compassion', desc: 'We approach every patient with empathy, dignity, and respect.' },
  { icon: 'evidence', title: 'Evidence-Based', desc: 'We use the latest research and proven practices in our care.' },
  { icon: 'centered', title: 'Person-Centered', desc: 'Your unique needs guide every treatment plan we create.' },
  { icon: 'accessible', title: 'Accessible', desc: 'In-person and telehealth services with wheelchair-accessible entrance.' },
]

const stats = [
  { number: '12+', label: 'Years of Clinical Experience' },
  { number: '500+', label: 'Patients Supported' },
  { number: '10+', label: 'Specialized Services' },
  { number: '5-Star', label: 'Rating' },
]

function ValueIcon({ icon }) {
  if (icon === 'compassion') return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  if (icon === 'evidence') return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
  if (icon === 'centered') return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  if (icon === 'accessible') return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  return null
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-dark px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{
backgroundImage: 'url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
        ></div>
        <div className="relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4">About Us</h1>
          <h2 className="font-serif text-xl md:text-3xl text-teal-light">Your Partner in Mental Wellness</h2>
        </div>
      </div>

      <div className="hhs-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="hhs-tag">Our Story</div>
            <h2 className="hhs-h2 text-3xl md:text-4xl mb-6">A Legacy of Mental Wellness</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Mental wellness is our heritage from inception, and it should be lifelong. At Heritage Health System, we provide assistance in claiming and maintaining your mental wellness using evidence-based practices to support and promote your lifelong daily function.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              As a trusted provider of mental health care, we offer a wide range of services designed to address emotional, psychological, and behavioral challenges. Our team consists of experienced psychiatrists, licensed therapists, and mental health professionals who are committed to delivering personalized care.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              With a patient-centered approach, we create individualized treatment plans that promote long-term wellness, resilience, and recovery.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/building.jpeg"
                alt="Heritage Health System building"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal/5 hhs-section">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hhs-tag">Our Mission</div>
          <h2 className="hhs-h2 text-3xl md:text-4xl mb-8">What Drives Us</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto italic">
            &ldquo;Our mission is to offer evidence-based assistance and person-centered care to adults and their families who are facing mental health challenges with compassion and respect. At Heritage Health System, our mission is to provide compassionate, comprehensive and accessible mental health care to individuals and families in our community. We are committed to fostering an environment of healing, hope and empowerment, where every person feels valued and supported on their journey to mental wellness.&rdquo;
          </p>
        </div>
      </div>

      <div className="hhs-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="hhs-tag">Our Impact</div>
            <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Making a Difference</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
                {stat.number === '5-Star' ? (
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-7 h-7 md:w-8 md:h-8 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                ) : (
                  <div className="font-serif text-4xl md:text-5xl font-bold text-teal mb-2">{stat.number}</div>
                )}
                <div className="text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-cream hhs-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="hhs-tag">Our Values</div>
            <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">What Guides Us</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values shape every interaction and treatment decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-teal mb-6">
                  <ValueIcon icon={value.icon} />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark mb-3">{value.title}</h3>
                <p className="text-base text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/50 hhs-section border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hhs-tag">Insurance Accepted</div>
          <h2 className="hhs-h2 mb-2">We Work With Your Insurance</h2>
          <p className="text-sm text-muted max-w-xl mx-auto mb-2">We accept a wide range of insurance plans to make care accessible.</p>
          <InsuranceLogos />
        </div>
      </div>

      <div className="hhs-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="hhs-tag">Patient Reviews</div>
            <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">What Our Patients Say</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReviewsSection limit={3} />
            </div>
            <div>
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>

      <div className="hhs-section px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-dark rounded-3xl p-6 sm:p-10 md:p-16 text-white text-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-5"
                 style={{
backgroundImage: 'url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
            ></div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-4xl font-bold mb-5">Ready to Begin Your Journey?</h3>
              <p className="text-base md:text-xl text-[#8AACAC] mb-10 max-w-2xl mx-auto">
                Your mental health matters, and we are here to support you. Whether you need a psychiatric evaluation, counseling, or telehealth services, Heritage Health System is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-teal text-white text-base font-semibold px-10 py-4 rounded-button text-center w-full sm:w-auto hover:bg-teal-dark transition-colors">
                  Contact Us Today
                </Link>
                <Link href="/contact" className="bg-white text-dark text-base font-semibold px-10 py-4 rounded-button text-center w-full sm:w-auto hover:bg-gray-100 transition-colors">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream hhs-section px-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="hhs-tag">Get in Touch</div>
            <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">We&apos;d Love to Hear From You</h2>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-10 border border-border shadow-lg">
            <p className="text-sm text-gray-500 leading-relaxed mb-6">Complete the form below to verify your insurance. Our team will contact you within 1&ndash;2 business days to schedule your appointment.</p>
            <BookingForm />
          </div>
        </div>
      </div>

      <PageCTA />
    </>
  )
}
