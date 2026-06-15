'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageCTA from '../../components/PageCTA'

export default function PreceptorshipPage() {
  return (
    <>
      <div className="bg-dark px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">Preceptorship</h1>
        <p className="text-base md:text-lg text-teal-light">Guided Clinical Learning With Expert Mentorship</p>
      </div>

      <div className="hhs-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6">
            Our Preceptorship Program provides hands-on, real-world clinical training for Nurse Practitioners. Under the guidance of experienced providers, participants gain direct exposure to patient care, clinical decision-making, documentation standards, and practice management.
          </p>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-12">
            Whether you are a new graduate preparing for independent practice or a clinician looking to enhance specific skills, our structured preceptorship ensures you learn with confidence and competence.
          </p>

          <div className="bg-teal/5 rounded-2xl p-4 sm:p-6 md:p-14 mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-dark mb-6">What You Will Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Comprehensive patient assessment', 'Diagnosis & treatment planning',
                'Medication management', 'EMR documentation and clinical note writing',
                'Evidence-based care guidelines', 'Behavioral health screening & management',
                'Practice workflow and patient communication', 'Professional ethics and HIPAA compliance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base md:text-lg text-gray-600">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-dark mb-4">Who Can Enroll?</h2>
            <p className="text-base md:text-lg text-gray-500">Our preceptorship program is ideal for Nurse Practitioners (PMHNP).</p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-dark mb-6">Program Structure</h2>
            <div className="space-y-4">
              {[
                { n: '1', title: 'One-on-One Supervision', desc: 'Shadow experienced providers in a real clinical setting and participate in guided patient encounters.' },
                { n: '2', title: 'Structured Clinical Hours', desc: 'Complete required hours for certification, job readiness, or board requirements.' },
                { n: '3', title: 'Real Patient Experience', desc: 'Observe and participate in initial evaluations, follow-up visits, medication reviews, diagnostic assessments, and treatment planning.' },
                { n: '4', title: 'Documentation Training', desc: 'Learn SOAP notes, HPI documentation, medication management notes, and EMR best practices.' },
              ].map((item) => (
                <div key={item.n} className="bg-white rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-teal-dark font-bold text-lg">{item.n}</span>
                  </div>
                  <h3 className="font-medium text-lg text-dark mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal text-white rounded-2xl p-4 sm:p-6 md:p-14 mb-12">
            <h2 className="font-serif text-xl md:text-2xl mb-6">Benefits of Our Preceptorship Program</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Gain real-time clinical experience', 'Boost clinical confidence',
                'Strengthen diagnostic and therapeutic skills', 'Learn directly from licensed providers',
                'Improve EMR proficiency', 'Become job-ready with practical exposure',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base md:text-lg">
                  <span className="text-teal-light text-lg">&#9733;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-dark mb-4">Duration & Scheduling</h2>
            <p className="text-base md:text-lg text-gray-500">We offer flexible scheduling:</p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-500 mt-3 space-y-2">
              <li>Weekly or monthly programs</li>
              <li>Full-time or part-time clinical hours</li>
              <li>Remote + onsite hybrid options (based on provider availability)</li>
            </ul>
          </div>

          <PreceptorshipForm />
        </div>
      </div>

      <PageCTA />
    </>
  )
}

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA',
  'ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
  'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
]

const PROGRAMS = [
  'PMHNP', 'FNP', 'AGACNP', 'PNP', 'CNM', 'CRNA', 'DNP', 'PhD in Nursing', 'BSN', 'Other',
]

const INITIAL_FORM = {
  firstName: '', lastName: '', email: '', phone: '', dob: '',
  address: '', city: '', state: 'MA', zip: '',
  school: '', program: '', currentYear: '', hours: '',
  preferredStartDate: '', preferredSchedule: '',
  cprCertified: '', immunizationsUpToDate: '', backgroundCheckCompleted: '',
  liabilityInsurance: '',
  emergencyName: '', emergencyPhone: '', emergencyRelationship: '',
  notes: '',
}

function PreceptorshipForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function isValidPhone(val) {
    return !val || /^[\d\s\-\.\(\)]{7,20}$/.test(val)
  }

  function isValidZip(val) {
    return !val || /^\d{5}(-\d{4})?$/.test(val)
  }

  function canSubmit() {
    return form.firstName && form.lastName && form.email && form.phone
      && form.school && form.program && form.hours
      && form.cprCertified && form.backgroundCheckCompleted
      && isValidPhone(form.phone) && isValidZip(form.zip)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/preceptorship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-green/5 border border-green/20 rounded-2xl p-6 sm:p-8 md:p-14 text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-dark mb-2">Application Submitted!</h3>
        <p className="text-sm text-gray-500">We have received your preceptorship application and will contact you soon.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-cream rounded-2xl p-4 sm:p-6 md:p-14">
      <h2 className="font-serif text-xl md:text-2xl text-dark mb-2">Apply for Preceptorship</h2>
      <p className="text-base text-gray-500 mb-6">Complete the form below to apply for our Preceptorship Program.</p>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4 text-sm text-red-700">
          Something went wrong. Please try again or call us at (781) 742-0834.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Personal Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required
                placeholder="First Name *"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
            <div>
              <label className="sr-only" htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required
                placeholder="Last Name *"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required
                placeholder="Email Address *"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required
                placeholder="Phone Number *"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
              {form.phone && !isValidPhone(form.phone) && (
                <p className="text-xs text-red-500 mt-1">Enter a valid phone number</p>
              )}
            </div>
          </div>
          <div className="mb-3">
            <label className="sr-only" htmlFor="dob">Date of Birth</label>
            <input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
          </div>
          <div className="mb-3">
            <label className="sr-only" htmlFor="address">Street Address</label>
            <input id="address" name="address" value={form.address} onChange={handleChange}
              placeholder="Street Address"
              className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="col-span-2 sm:col-span-2">
              <label className="sr-only" htmlFor="city">City</label>
              <input id="city" name="city" value={form.city} onChange={handleChange}
                placeholder="City"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
            <div>
              <label className="sr-only" htmlFor="state">State</label>
              <select id="state" name="state" value={form.state} onChange={handleChange}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">State</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="zip">ZIP Code</label>
              <input id="zip" name="zip" value={form.zip} onChange={handleChange}
                placeholder="ZIP" maxLength={5}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
              {form.zip && !isValidZip(form.zip) && (
                <p className="text-xs text-red-500 mt-1">Enter a valid 5-digit ZIP</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Academic Information</p>
          <div className="mb-3">
            <label className="sr-only" htmlFor="school">School / Institution *</label>
            <input id="school" name="school" value={form.school} onChange={handleChange} required
              placeholder="School / Institution *"
              className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="program">Degree / Program *</label>
              <select id="program" name="program" value={form.program} onChange={handleChange} required
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">Degree / Program *</option>
                {PROGRAMS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="currentYear">Current Year / Level</label>
              <select id="currentYear" name="currentYear" value={form.currentYear} onChange={handleChange}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">Current Year / Level</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduated">Graduated</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="hours">Clinical Hours Needed *</label>
              <input id="hours" name="hours" type="number" min="1" value={form.hours} onChange={handleChange} required
                placeholder="Clinical Hours Needed *"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
            <div>
              <label className="sr-only" htmlFor="preferredStartDate">Preferred Start Date</label>
              <input id="preferredStartDate" name="preferredStartDate" type="date" value={form.preferredStartDate} onChange={handleChange}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
          </div>
          <div className="mt-3">
            <label className="sr-only" htmlFor="preferredSchedule">Preferred Schedule</label>
            <select id="preferredSchedule" name="preferredSchedule" value={form.preferredSchedule} onChange={handleChange}
              className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
              <option value="">Preferred Schedule</option>
              <option value="Weekdays">Weekdays</option>
            </select>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Compliance & Credentials</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="cprCertified">CPR / BLS Certified</label>
              <select id="cprCertified" name="cprCertified" value={form.cprCertified} onChange={handleChange} required
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">CPR / BLS Certified? *</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="immunizationsUpToDate">Immunizations Up to Date</label>
              <select id="immunizationsUpToDate" name="immunizationsUpToDate" value={form.immunizationsUpToDate} onChange={handleChange}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">Immunizations Up to Date?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="sr-only" htmlFor="backgroundCheckCompleted">Background Check Completed</label>
              <select id="backgroundCheckCompleted" name="backgroundCheckCompleted" value={form.backgroundCheckCompleted} onChange={handleChange} required
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">Background Check Completed? *</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="liabilityInsurance">Liability / Malpractice Insurance</label>
              <select id="liabilityInsurance" name="liabilityInsurance" value={form.liabilityInsurance} onChange={handleChange}
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans">
                <option value="">Liability / Malpractice Insurance?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Through School">Through School</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Emergency Contact</p>
          <div className="mb-3">
            <label className="sr-only" htmlFor="emergencyName">Emergency Contact Name</label>
            <input id="emergencyName" name="emergencyName" value={form.emergencyName} onChange={handleChange}
              placeholder="Emergency Contact Name"
              className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="emergencyPhone">Emergency Contact Phone</label>
              <input id="emergencyPhone" name="emergencyPhone" type="tel" value={form.emergencyPhone} onChange={handleChange}
                placeholder="Emergency Contact Phone"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
            <div>
              <label className="sr-only" htmlFor="emergencyRelationship">Relationship</label>
              <input id="emergencyRelationship" name="emergencyRelationship" value={form.emergencyRelationship} onChange={handleChange}
                placeholder="Relationship to You"
                className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans" />
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block" htmlFor="notes">Additional Notes</label>
          <textarea id="notes" name="notes" value={form.notes} onChange={handleChange} rows={3}
            placeholder="Any additional information, questions, or special requests..."
            className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans resize-none" />
        </div>

        <button type="submit" disabled={status === 'loading'}
          className="bg-teal text-white text-sm font-medium px-8 py-4 rounded-button w-full hover:bg-teal-dark transition disabled:opacity-50">
          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}
