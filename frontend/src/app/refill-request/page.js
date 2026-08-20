import RefillRequestForm from '../../components/forms/RefillRequestForm'
import PageCTA from '../../components/sections/PageCTA'

export default function RefillRequestPage() {
  return (
    <>
      <div className="bg-dark px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">Prescription Refill Request</h1>
        <p className="text-base md:text-lg text-teal-light">Medication Refill Requests for Established Patients</p>
      </div>

      <div className="hhs-section">
        <div className="max-w-4xl mx-auto">
          <RefillRequestForm />
        </div>
      </div>

      <PageCTA />
    </>
  )
}
