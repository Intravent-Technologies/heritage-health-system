'use client'

import { useState } from 'react'

const INITIAL_FORM = {
  firstName: '', lastName: '', email: '', phone: '', dob: '', address: '', city: '', state: '', zip: '',
  educationLevel: '', institution: '', graduationYear: '', licenseType: '', licenseState: '', licenseNumber: '', npiNumber: '',
  degreeSpecialty: '', yearsExperience: '', currentEmployer: '',
  clinicalInterests: [], availableHours: '', startDate: '', previousPreceptorship: '', additionalInfo: '',
  agreedToTerms: false,
}

const CLINICAL_INTERESTS = [
  'Psychiatric Evaluation', 'Medication Management', 'Counseling/Therapy', 'Substance Use Disorders',
  'Child/Adolescent Psychiatry', 'Geriatric Psychiatry', 'Trauma-Informed Care', 'Telehealth Services',
]

export default function PreceptorshipForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))
  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      clinicalInterests: prev.clinicalInterests.includes(interest)
        ? prev.clinicalInterests.filter((i) => i !== interest)
        : [...prev.clinicalInterests, interest],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.agreedToTerms) {
      setError('Please fill in all required fields and agree to the terms.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'preceptorship' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setMessage('Thank you! Your preceptorship application has been submitted. We will contact you within 1-2 business days.')
      setForm(INITIAL_FORM)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  const Input = ({ label, field, type = 'text', required = false, placeholder = '' }) => (
    <div>
      <label className="block text-sm font-medium text-dark mb-1.5">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type} value={form[field]} onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder} required={required}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition" />
    </div>
  )

  if (message) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-green-700 text-lg">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="font-serif text-xl font-bold text-dark mb-4">Personal Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="First Name" field="firstName" required placeholder="Your first name" />
          <Input label="Last Name" field="lastName" required placeholder="Your last name" />
          <Input label="Email" field="email" type="email" required placeholder="you@example.com" />
          <Input label="Phone" field="phone" type="tel" required placeholder="(555) 123-4567" />
          <Input label="Date of Birth" field="dob" type="date" required />
          <Input label="Address" field="address" placeholder="Street address" />
          <Input label="City" field="city" placeholder="City" />
          <div className="grid grid-cols-2 gap-3">
            <Input label="State" field="state" placeholder="MA" />
            <Input label="ZIP" field="zip" placeholder="02169" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-xl font-bold text-dark mb-4">Professional Background</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">Highest Education Level <span className="text-red-500">*</span></label>
            <select value={form.educationLevel} onChange={(e) => update('educationLevel', e.target.value)} required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition">
              <option value="">Select level</option>
              <option>BSN</option><option>MSN</option><option>DNP</option><option>PhD</option><option>MD</option><option>DO</option><option>Other</option>
            </select>
          </div>
          <Input label="Institution" field="institution" placeholder="University or college name" />
          <Input label="Graduation Year" field="graduationYear" placeholder="YYYY" />
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">License Type <span className="text-red-500">*</span></label>
            <select value={form.licenseType} onChange={(e) => update('licenseType', e.target.value)} required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition">
              <option value="">Select type</option>
              <option>RN</option><option>NP</option><option>APRN</option><option>PMHNP</option><option>FNP</option><option>Other</option>
            </select>
          </div>
          <Input label="License State" field="licenseState" placeholder="MA" />
          <Input label="License Number" field="licenseNumber" placeholder="License #" />
          <Input label="NPI Number" field="npiNumber" placeholder="NPI #" />
          <Input label="Degree/Specialty" field="degreeSpecialty" placeholder="e.g. Psychiatric Mental Health" />
          <Input label="Years of Experience" field="yearsExperience" placeholder="e.g. 3" />
          <Input label="Current Employer" field="currentEmployer" placeholder="Current workplace" />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-xl font-bold text-dark mb-4">Preceptorship Preferences</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-dark mb-2">Clinical Interests</label>
          <div className="grid grid-cols-2 gap-2">
            {CLINICAL_INTERESTS.map((interest) => (
              <button key={interest} type="button" onClick={() => toggleInterest(interest)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm border transition ${form.clinicalInterests.includes(interest) ? 'bg-teal text-white border-teal' : 'bg-white text-gray-600 border-gray-200 hover:border-teal'}`}>
                {interest}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">Available Hours per Week</label>
            <select value={form.availableHours} onChange={(e) => update('availableHours', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition">
              <option value="">Select availability</option>
              <option>8-16 hours</option><option>16-24 hours</option><option>24-32 hours</option><option>32-40 hours</option>
            </select>
          </div>
          <Input label="Preferred Start Date" field="startDate" type="date" />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-dark mb-1.5">Previous Preceptorship Experience</label>
          <textarea value={form.previousPreceptorship} onChange={(e) => update('previousPreceptorship', e.target.value)} rows={3}
            placeholder="Describe any prior clinical preceptorship experience..."
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition resize-none" />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-dark mb-1.5">Additional Information</label>
          <textarea value={form.additionalInfo} onChange={(e) => update('additionalInfo', e.target.value)} rows={3}
            placeholder="Any other information you would like to share..."
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition resize-none" />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" checked={form.agreedToTerms} onChange={(e) => update('agreedToTerms', e.target.checked)}
          className="mt-1 w-4 h-4 text-teal border-gray-300 rounded focus:ring-teal" />
        <label className="text-sm text-gray-600">
          I certify that the information provided is accurate and I agree to the preceptorship program terms. <span className="text-red-500">*</span>
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={sending}
        className="w-full bg-teal text-white font-semibold py-3.5 rounded-xl hover:bg-teal-dark transition disabled:opacity-50 disabled:cursor-not-allowed">
        {sending ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
