export default function SpravatoISI() {
  return (
    <div className="bg-cream rounded-3xl p-4 sm:p-6 md:p-16 mb-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-block bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
          Important Safety Information
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-border">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-dark mb-6">What You Need to Know</h3>
        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
          <p><strong>SPRAVATO® can cause serious side effects including:</strong> sedation, dissociation, respiratory depression, and risks of abuse and misuse. SPRAVATO® may cause a temporary increase in blood pressure that can last for about 2 hours after administration.</p>
          <p><strong>SPRAVATO® is available only through a restricted program called the SPRAVATO® REMS.</strong> You will be monitored for at least 2 hours after each dose by your healthcare provider. You must arrange for transportation home and should not drive or operate machinery until the next day after a restful sleep.</p>
          <p><strong>The most common side effects include:</strong> feeling disconnected from yourself, your thoughts, feelings, and things around you (dissociation); dizziness; nausea; feeling sleepy; spinning sensation (vertigo); decreased sensitivity or numbness; anxiety; lack of energy; increased blood pressure; vomiting; feeling drunk; headache; and feeling very happy or excited (euphoria). These usually happen right after taking SPRAVATO® and go away the same day.</p>
          <p>SPRAVATO® is not for use as a medicine to prevent or relieve pain (anesthetic). It is not known if SPRAVATO® is safe and effective for use in preventing suicide or in reducing suicidal thoughts or actions. It is not known if SPRAVATO® is safe and effective in children.</p>
          <p>Please see full <a href="https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/SPRAVATO-pi.pdf" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal-dark">Prescribing Information</a>, including Boxed WARNINGS, and <a href="https://www.spravato.com/files/SPRAVATO_Patient_Experience_Digital_Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal-dark">Medication Guide</a> for SPRAVATO® and discuss any questions with your healthcare provider.</p>
          <p className="text-gray-500 text-sm pt-4">You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal-dark">www.fda.gov/medwatch</a> or call 1-800-FDA-1088.</p>
        </div>
      </div>
    </div>
  )
}
