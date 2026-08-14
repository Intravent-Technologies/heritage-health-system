'use client'

import { useState } from 'react'

const RELATIONSHIPS = ['Patient', 'Parent', 'Guardian']

const INITIAL_FORM = {
  patientFirstName: '',
  patientLastName: '',
  dob: '',
  medicationName: '',
  pillStrength: '',
  pillsDaily: '',
  requestorFirstName: '',
  requestorLastName: '',
  relationship: '',
  additionalInfo: '',
}

export default function RefillRequestForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.patientFirstName.trim()) next.patientFirstName = 'Patient first name is required.'
    if (!form.patientLastName.trim()) next.patientLastName = 'Patient last name is required.'
    if (!form.dob) {
      next.dob = 'Date of birth is required.'
    } else if (new Date(form.dob) > new Date()) {
      next.dob = 'Date of birth cannot be in the future.'
    }
    if (!form.medicationName.trim()) next.medicationName = 'Medication name is required.'
    if (!form.pillStrength.trim()) next.pillStrength = 'Pill strength is required.'
    if (!form.pillsDaily) {
      next.pillsDaily = 'Number of pills daily is required.'
    } else if (!/^\d+$/.test(form.pillsDaily) || parseInt(form.pillsDaily, 10) <= 0) {
      next.pillsDaily = 'Enter a valid number of pills.'
    }
    if (!form.requestorFirstName.trim()) next.requestorFirstName = 'Requestor first name is required.'
    if (!form.requestorLastName.trim()) next.requestorLastName = 'Requestor last name is required.'
    if (!form.relationship) next.relationship = 'Relationship to patient is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/refill-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || 'Something went wrong.') }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function resetForm() {
    setForm(INITIAL_FORM)
    setErrors({})
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div className="bg-green/5 border border-green/20 rounded-2xl p-6 sm:p-8 text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-dark mb-1">Thank You!</h3>
        <p className="text-sm text-gray-500 mb-5">Your prescription refill request has been submitted.</p>
        <div className="bg-teal/5 border border-teal/10 rounded-lg p-4 text-left text-sm text-gray-600 space-y-2 mb-5">
          <p><strong>What happens next?</strong></p>
          <p>&bull; Our team will review your medication refill request.</p>
          <p>&bull; We will contact you if any additional information is needed.</p>
          <p>&bull; Need immediate assistance? Call us at (781) 742-0834.</p>
        </div>
        <button onClick={resetForm} className="text-sm text-teal hover:text-teal-dark underline">Submit another request</button>
      </div>
    )
  }

  function inputClass(field) {
    return `w-full bg-white border rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans ${
      errors[field] ? 'border-red-300' : 'border-[#ccdadb]'
    }`
  }

  return (
    <div className="bg-cream rounded-2xl p-4 sm:p-6 md:p-14 border border-border">
      <h2 className="font-serif text-2xl md:text-3xl text-dark mb-2">Prescription Refill Request</h2>
      <p className="text-sm md:text-base text-gray-500 mb-8">
        Please complete all fields on this form for medication refill requests. The last additional box for additional information is optional.
      </p>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6 text-sm text-red-700">
          Something went wrong. Please try again or call us at (781) 742-0834.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <div>
          <div className="bg-gray-100 border border-border/60 rounded-lg px-4 py-2.5 mb-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Information</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="patientFirstName">Patient First Name</label>
              <input id="patientFirstName" name="patientFirstName" value={form.patientFirstName} onChange={handleChange} required placeholder="Patient First Name *" className={inputClass('patientFirstName')} />
              {errors.patientFirstName && <p className="text-xs text-red-500 mt-1">{errors.patientFirstName}</p>}
            </div>
            <div>
              <label className="sr-only" htmlFor="patientLastName">Patient Last Name</label>
              <input id="patientLastName" name="patientLastName" value={form.patientLastName} onChange={handleChange} required placeholder="Patient Last Name *" className={inputClass('patientLastName')} />
              {errors.patientLastName && <p className="text-xs text-red-500 mt-1">{errors.patientLastName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 block" htmlFor="dob">Date of Birth *</label>
              <input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} required className={inputClass('dob')} />
              {errors.dob && <p className="text-xs text-red-500 mt-1">{errors.dob}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="medicationName">Medication Name</label>
              <input id="medicationName" name="medicationName" value={form.medicationName} onChange={handleChange} required placeholder="Medication Name *" className={inputClass('medicationName')} />
              {errors.medicationName && <p className="text-xs text-red-500 mt-1">{errors.medicationName}</p>}
            </div>
            <div>
              <label className="sr-only" htmlFor="pillStrength">Pill Strength</label>
              <input id="pillStrength" name="pillStrength" value={form.pillStrength} onChange={handleChange} required placeholder="Pill Strength * (e.g. 25 mg)" className={inputClass('pillStrength')} />
              {errors.pillStrength && <p className="text-xs text-red-500 mt-1">{errors.pillStrength}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="pillsDaily">Number of Pills Daily</label>
              <input id="pillsDaily" name="pillsDaily" type="number" min="1" value={form.pillsDaily} onChange={handleChange} required placeholder="Number of Pills Daily *" className={inputClass('pillsDaily')} />
              {errors.pillsDaily && <p className="text-xs text-red-500 mt-1">{errors.pillsDaily}</p>}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 border border-border/60 rounded-lg px-4 py-2.5 mb-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Person Requesting Refill</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="sr-only" htmlFor="requestorFirstName">Requestor First Name</label>
              <input id="requestorFirstName" name="requestorFirstName" value={form.requestorFirstName} onChange={handleChange} required placeholder="Requestor First Name *" className={inputClass('requestorFirstName')} />
              {errors.requestorFirstName && <p className="text-xs text-red-500 mt-1">{errors.requestorFirstName}</p>}
            </div>
            <div>
              <label className="sr-only" htmlFor="requestorLastName">Requestor Last Name</label>
              <input id="requestorLastName" name="requestorLastName" value={form.requestorLastName} onChange={handleChange} required placeholder="Requestor Last Name *" className={inputClass('requestorLastName')} />
              {errors.requestorLastName && <p className="text-xs text-red-500 mt-1">{errors.requestorLastName}</p>}
            </div>
          </div>
          <div className="mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Relationship to Patient *</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {RELATIONSHIPS.map((opt) => (
                <label key={opt} className={`flex-1 cursor-pointer border rounded-xl px-2 py-2.5 sm:px-3 sm:py-3 text-center transition ${
                  form.relationship === opt
                    ? 'bg-teal text-white border-teal'
                    : 'bg-white text-gray-600 border-border hover:border-teal'
                }`}>
                  <input type="radio" name="relationship" value={opt} checked={form.relationship === opt} onChange={handleChange} className="sr-only" />
                  <span className="text-sm font-medium">{opt}</span>
                </label>
              ))}
            </div>
            {errors.relationship && <p className="text-xs text-red-500 mt-1">{errors.relationship}</p>}
          </div>
        </div>

        <div>
          <div className="bg-gray-100 border border-border/60 rounded-lg px-4 py-2.5 mb-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Additional Information <span className="normal-case text-gray-400">(Optional)</span></p>
          </div>
          <label className="sr-only" htmlFor="additionalInfo">Additional Information</label>
          <textarea id="additionalInfo" name="additionalInfo" value={form.additionalInfo} onChange={handleChange} rows={4}
            placeholder="Any additional information that may help us process this refill request (optional)..."
            className="w-full bg-white border border-[#ccdadb] rounded-lg px-4 py-3 text-sm text-gray-700 outline-none font-sans resize-none" />
        </div>

        <button type="submit" disabled={status === 'loading'}
          className="bg-teal text-white text-sm font-medium px-8 py-4 rounded-button w-full hover:bg-teal-dark transition disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
