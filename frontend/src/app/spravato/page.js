import Link from 'next/link'
import BookingForm from '../../components/forms/BookingForm'
import PageCTA from '../../components/sections/PageCTA'
import InsuranceLogos from '../../components/sections/InsuranceLogos'
import ReviewsSection from '../../components/sections/ReviewsSection'
import ReviewForm from '../../components/sections/ReviewForm'
import SpravatoContent from '../../components/admin/SpravatoContent'
import SpravatoISI from '../../components/admin/SpravatoISI'

export default function SpravatoPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-4">SPRAVATO® Treatment</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-teal-light max-w-3xl mx-auto">Innovative Therapy for Treatment-Resistant Depression</p>
        </div>
      </div>

      <div className="bg-white/50 hhs-section border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hhs-tag">Insurance Accepted</div>
          <h2 className="hhs-h2 mb-2">SPRAVATO® Coverage Available</h2>
          <p className="text-sm text-muted max-w-xl mx-auto mb-2">We accept a wide range of insurance plans for SPRAVATO® treatment. Contact us to verify your coverage.</p>
          <InsuranceLogos />
        </div>
      </div>

      <div className="hhs-section">
        <div className="max-w-6xl mx-auto">
          <SpravatoContent />

          <div className="mb-20">
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

          <div className="bg-dark rounded-3xl p-6 sm:p-10 md:p-16 text-white text-center overflow-hidden relative mb-20">
            <div className="absolute inset-0 opacity-5"
                 style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80)',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}
            ></div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-4xl font-bold mb-5">Take the First Step</h3>
              <p className="text-base md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                If you or a loved one is struggling with treatment-resistant depression, SPRAVATO® may offer new hope. Heritage Health System is here to guide you through every step of the process - from insurance verification to ongoing treatment.
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

          <SpravatoISI />

          <div className="mb-10">
            <div className="text-center mb-12">
              <div className="hhs-tag">Privacy & Compliance</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Your Data Privacy Matters</h2>
            </div>
            <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-md border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-4">HIPAA Compliance</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Heritage Health System is fully compliant with the <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>. All protected health information (PHI) you provide is encrypted, securely stored, and never shared without your explicit written authorization except as required by law.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to access, amend, and request an accounting of disclosures of your health information at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-4">Massachusetts Privacy Law</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    As a Massachusetts-based practice, we adhere to the <strong>Massachusetts Health Care Privacy Laws (M.G.L. c. 111, § 70E)</strong> and the <strong>Massachusetts Data Breach Notification Law (M.G.L. c. 93H)</strong>. These state laws provide additional protections beyond HIPAA, including stricter requirements for the use and disclosure of medical records.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Massachusetts law requires us to maintain reasonable procedures to protect personal information and to notify you promptly in the event of any breach of your unsecured protected health information.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark text-sm">Encrypted Data</p>
                      <p className="text-gray-500 text-sm">All form submissions use TLS encryption. Your data is transmitted securely.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark text-sm">HIPAA Secure</p>
                      <p className="text-gray-500 text-sm">We maintain administrative, physical, and technical safeguards required by HIPAA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark text-sm">Your Rights</p>
                      <p className="text-gray-500 text-sm">You may request access to your records, request amendments, and opt out of communications at any time.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 text-xs text-gray-400 leading-relaxed">
                By submitting this form, you acknowledge that Heritage Health System will use your information to contact you regarding your treatment inquiry. We do not sell or share your personal information with third parties for marketing purposes. For more details, see our full Privacy Policy.
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-4 sm:p-8 md:p-12 border border-border shadow-xl">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark mb-2">Get Started with SPRAVATO®</h3>
              <p className="text-base md:text-lg text-gray-600">Submit your information below and we will contact you to discuss SPRAVATO® treatment options.</p>
            </div>
            <BookingForm />
          </div>

        </div>
      </div>

      <PageCTA />
    </>
  )
}
