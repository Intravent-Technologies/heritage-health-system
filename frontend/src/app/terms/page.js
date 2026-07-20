import Link from 'next/link'

export default function TermsPage() {
  return (
    <>
      <div className="bg-dark px-6 md:px-12 py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">Terms &amp; Conditions</h1>
        <p className="text-base md:text-lg text-teal-light">Last Updated: June 8, 2026</p>
      </div>

      <div className="hhs-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-md">

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">SMS Terms &amp; Conditions</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                The following terms and conditions apply to SMS communications sent by Heritage Health System.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">SMS Consent Communication</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Phone numbers collected as part of the SMS consent process are used solely for communications from Heritage Health System.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-3">
                SMS consent and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Types of SMS Communications</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Patients who opt in may receive messages regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-600 leading-relaxed">
                <li>Appointment scheduling</li>
                <li>Appointment reminders</li>
                <li>Follow-up care</li>
                <li>Care coordination</li>
                <li>Prescription reminders</li>
                <li>Billing notifications</li>
                <li>Insurance verification</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Example SMS</h2>
              <div className="bg-teal/5 border border-teal/10 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
                  &quot;Hello, this is Heritage Health System reminding you of your upcoming appointment on July 25 at 2:00 PM. Reply STOP to opt out of future SMS messages.&quot;
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Message Frequency</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Message frequency varies depending on patient care needs.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Patients may receive up to five (5) SMS messages per week regarding appointments, billing, prescription reminders, or care coordination.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Potential Fees</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Standard message and data rates may apply according to your mobile carrier.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Opt-In Method</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Patients may opt in by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-600 leading-relaxed">
                <li>Completing the website appointment request form</li>
                <li>Checking the SMS consent checkbox</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Opt-Out Method</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Patients may opt out at any time by replying:
              </p>
              <div className="bg-teal/5 border border-teal/10 rounded-xl p-6 mb-4">
                <p className="text-xl font-medium text-dark">STOP</p>
                <p className="text-base text-gray-600 mt-1">to any SMS message.</p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Patients may also contact Heritage Health System directly at:
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-2">
                Phone: <a href="tel:0017817420834" className="text-teal hover:text-teal-dark">(781) 742-0834</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Help</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Patients may reply:
              </p>
              <div className="bg-teal/5 border border-teal/10 rounded-xl p-6 mb-4">
                <p className="text-xl font-medium text-dark">HELP</p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">or contact:</p>
              <div className="bg-teal/5 rounded-xl p-6 border border-teal/20">
                <p className="text-base md:text-lg text-gray-700 mb-2"><strong>Heritage Health System</strong></p>
                <p className="text-base md:text-lg text-gray-600 mb-2">Phone: <a href="tel:0017817420834" className="text-teal hover:text-teal-dark">(781) 742-0834</a></p>
                <p className="text-base md:text-lg text-gray-600 mb-2">Email: <a href="mailto:info@heritagehealthsystem.com" className="text-teal hover:text-teal-dark">info@heritagehealthsystem.com</a></p>
                <p className="text-base md:text-lg text-gray-600">Address: 21 Mayor Thomas J. McGrath Highway, Unit 306, Quincy, MA 02169</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Additional Options</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Patients who do not wish to receive SMS messages should simply leave the SMS consent checkbox unchecked.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-4">Standard Messaging Disclosure</h2>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-600 leading-relaxed">
                <li>Message frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>Reply STOP to unsubscribe.</li>
                <li>Reply HELP for assistance.</li>
              </ul>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
                Refer to our <Link href="/privacy" className="text-teal hover:text-teal-dark underline">Privacy Policy</Link> and Terms &amp; Conditions for additional information.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-dark px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-teal text-white text-base font-semibold px-8 py-3 rounded-button text-center w-full sm:w-auto hover:bg-teal-dark transition-colors">
              Back to Home
            </Link>
            <Link href="/contact" className="bg-white text-dark text-base font-semibold px-8 py-3 rounded-button text-center w-full sm:w-auto hover:bg-gray-100 transition-colors">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
