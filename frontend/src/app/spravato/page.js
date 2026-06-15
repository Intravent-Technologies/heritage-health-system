import Link from 'next/link'
import BookingForm from '../../components/BookingForm'
import PageCTA from '../../components/PageCTA'
import InsuranceLogos from '../../components/InsuranceLogos'
import ReviewsSection from '../../components/ReviewsSection'
import ReviewForm from '../../components/ReviewForm'

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

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="hhs-tag">Advanced Treatment</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-6">Hope is Here</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                At Heritage Health System, we are committed to providing advanced treatment options for individuals struggling with severe depression. One of the innovative therapies we offer is <strong>SPRAVATO® (esketamine) nasal spray</strong>, an FDA-approved medication designed to help patients who have not responded adequately to traditional antidepressant medications.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                SPRAVATO® is unique because it is believed to work differently than traditional antidepressants by targeting glutamate, the most abundant excitatory neurotransmitter in the brain, rather than serotonin or norepinephrine.
              </p>
              <Link href="/contact" className="bg-teal text-white text-base font-semibold px-10 py-4 rounded-button inline-block text-center w-full sm:w-auto hover:bg-teal-dark transition-colors">
                Contact Us to Learn More
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal/10 to-teal/5 rounded-3xl p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center">
              <img
                src="/spravato-device.jpg"
                alt="SPRAVATO nasal spray device"
                className="w-64 md:w-80 h-auto mb-8"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mb-6 max-w-xs">SPRAVATO® (esketamine) CIII nasal spray device</p>
              <a href="https://www.spravato.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-teal text-teal text-base font-semibold px-8 py-3.5 rounded-button hover:bg-teal/5 transition-colors">
                Visit Official Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">What is SPRAVATO®?</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">FDA-Approved Innovation</h2>
            </div>
            <div className="bg-cream rounded-3xl p-4 sm:p-6 md:p-12">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                <strong>SPRAVATO® (esketamine) CIII nasal spray</strong> is a prescription medicine approved by the <strong>U.S. Food and Drug Administration (FDA)</strong> for adults with:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-border">
                  <div className="text-teal mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">Treatment-Resistant Depression (TRD)</h3>
                  <p className="text-base text-gray-600">As monotherapy or in conjunction with an oral antidepressant for adults who have not responded to at least two prior antidepressant treatments</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-border">
                  <div className="text-teal mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">MDD with Suicidal Thoughts</h3>
                  <p className="text-base text-gray-600">Used with an antidepressant taken by mouth for depressive symptoms in adults with major depressive disorder (MDD) with acute suicidal ideation or behavior</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                SPRAVATO® is administered as a nasal spray and must be given in a <strong>certified medical facility under professional supervision</strong>. It is only available through a restricted program called the <strong>SPRAVATO® Risk Evaluation and Mitigation Strategy (REMS) Program</strong>.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-teal/10 to-teal/5 rounded-3xl p-4 sm:p-6 md:p-12 flex items-center justify-center min-h-[300px]">
              <img
                src="https://www.spravato.com/images/logo.png"
                alt="SPRAVATO logo"
                className="w-48 md:w-64 h-auto mx-auto"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="hhs-tag">How It Works</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-6">A Different Mechanism of Action</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                SPRAVATO® contains esketamine, the S-enantiomer of ketamine. It is a <strong>non-competitive N-methyl-D-aspartate (NMDA) receptor antagonist</strong> that acts on the glutamate system in the brain - a completely different mechanism from traditional antidepressants that target serotonin or norepinephrine.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                While the exact mechanism is still being studied, the prevailing scientific understanding is that esketamine preferentially blocks NMDA receptors on GABAergic inhibitory interneurons. This blockade transiently enhances glutamatergic activity, leading to increased release of glutamate and stimulation of AMPA receptors.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                This cascade activates downstream neurotrophic signaling pathways, resulting in:
              </p>
              <div className="space-y-4">
                {[
                  'Increased synaptic protein synthesis and synaptogenesis',
                  'Improved synaptic connectivity in the prefrontal cortex',
                  'Enhanced connectivity in limbic regions (amygdala and hippocampus)',
                  'Rapid reduction of depressive symptoms - as early as 24 hours after the first dose in clinical trials'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border">
                    <svg className="w-6 h-6 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base md:text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Clinical Evidence</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">What Clinical Trials Have Shown</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border">
                <div className="text-4xl font-serif font-bold text-teal mb-4">4 Weeks</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  In short-term Phase 3 clinical trials, SPRAVATO® in conjunction with an oral antidepressant showed statistically significant improvement in depressive symptoms at 4 weeks compared to placebo plus an oral antidepressant.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border">
                <div className="text-4xl font-serif font-bold text-teal mb-4">24 Hours</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Most of the improvement in depressive symptoms was seen as early as 24 hours after the first treatment session, with effects continuing to strengthen over the treatment period.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border">
                <div className="text-4xl font-serif font-bold text-teal mb-4">1709</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Patients with treatment-resistant depression were evaluated for safety across five Phase 3 studies (three short-term and two long-term studies), establishing the safety profile of SPRAVATO®.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border">
                <div className="text-4xl font-serif font-bold text-teal mb-4">2 Doses</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Available as 56 mg (2 nasal spray devices) or 84 mg (3 nasal spray devices), each delivering 28 mg of esketamine per device. The dose is individualized based on efficacy and tolerability.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Dosing Schedule</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Treatment Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-teal-dark flex-shrink-0">1</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">Induction Phase (Weeks 1-4)</h3>
                  <p className="text-gray-600">SPRAVATO® is administered twice per week. The recommended dose is 56 mg or 84 mg, adjusted based on efficacy and tolerability. Most patients begin to see improvement during this phase.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-teal-dark flex-shrink-0">2</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">Maintenance Phase (Weeks 5-8)</h3>
                  <p className="text-gray-600">Treatment sessions are reduced to once per week at the same dose (56 mg or 84 mg). The goal is to sustain the improvements achieved during induction.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-teal-dark flex-shrink-0">3</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">Continuation Phase (Week 9+)</h3>
                  <p className="text-gray-600">Dosing frequency is individualized based on your response - either once weekly or every two weeks - to maintain remission or response at the lowest effective frequency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">REMS Program</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Safety First: The SPRAVATO® REMS Program</h2>
            </div>
            <div className="bg-dark rounded-3xl p-6 sm:p-10 md:p-16 text-white">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                Because of the risks of sedation, dissociation, respiratory depression, and potential for abuse and misuse, the FDA requires that SPRAVATO® be available only through a restricted distribution program called the <strong>SPRAVATO® REMS (Risk Evaluation and Mitigation Strategy)</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Certified Healthcare Setting', desc: 'SPRAVATO® can only be administered in healthcare settings certified in the REMS program. Our clinic is fully certified.' },
                  { title: 'Direct Observation', desc: 'You self-administer the nasal spray under the direct observation of a healthcare provider throughout the entire session.' },
                  { title: '2-Hour Monitoring', desc: 'After administration, you are monitored for at least 2 hours for sedation, dissociation, changes in blood pressure, and respiratory status.' },
                  { title: 'No Home Use', desc: 'SPRAVATO® must never be dispensed directly to a patient for home use. All doses are administered in-clinic.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/10 rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Blood Pressure Monitoring</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">What We Monitor During Treatment</h2>
            </div>
            <div className="bg-cream rounded-3xl p-4 sm:p-6 md:p-12">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                SPRAVATO® can cause a temporary increase in blood pressure that typically peaks around 40 minutes after administration and lasts for about 2 hours. Our clinical protocol includes:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Before Dose', desc: 'Blood pressure is assessed before each treatment session. If significantly elevated, we evaluate the risks and benefits before proceeding.' },
                  { title: 'During Session', desc: 'Blood pressure is reassessed approximately 40 minutes after dosing (corresponding with peak plasma concentration) and as clinically needed.' },
                  { title: 'Before Discharge', desc: 'We confirm your blood pressure is stabilized and you are clinically stable before you are discharged, approximately 2 hours after dosing.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-border">
                    <h3 className="font-serif text-lg font-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Who Benefits?</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Is SPRAVATO® Right for You?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Tried Multiple Antidepressants', desc: 'Have not responded to two or more antidepressant medications - known as treatment-resistant depression (TRD)' },
                { title: 'Severe or Persistent Depression', desc: 'Experience depressive symptoms that significantly impact daily life, functioning, and well-being despite treatment' },
                { title: 'Seeking New Options', desc: 'Want a rapid-acting treatment approach with a different mechanism of action than traditional antidepressants' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all hover:-translate-y-1">
                  <h3 className="font-serif text-xl font-bold text-dark mb-4">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Insurance Coverage</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Coverage and Cost Information</h2>
            </div>
            <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-md border border-border">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                SPRAVATO® is widely covered by insurance plans. According to the manufacturer, <strong>9 out of 10 commercially insured patients are covered</strong> for SPRAVATO® treatment. SPRAVATO® is also covered under Medicare and Medicaid.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-teal/5 rounded-2xl p-6">
                  <h3 className="font-serif text-lg font-bold text-dark mb-3">Insurance Types Accepted</h3>
                  <ul className="space-y-3">
                    {['Commercial insurance plans', 'Medicare', 'Medicaid', 'Private insurance'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal/5 rounded-2xl p-6">
                  <h3 className="font-serif text-lg font-bold text-dark mb-3">Savings Program</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    The SPRAVATO® withMe Savings Program may be available for eligible commercially insured patients to help with out-of-pocket costs. Our team will verify your insurance and discuss all available options before starting treatment.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Our staff will work with you to obtain insurance approval before starting treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Your Journey</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">What to Expect During Treatment</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Arrive & Check In', text: 'Patient arrives at our clinic for the scheduled treatment session. You will need to arrange transportation home.' },
                { step: '02', title: 'Administration', text: 'Under the direct supervision of a healthcare provider, you self-administer the SPRAVATO® nasal spray in our certified treatment room.' },
                { step: '03', title: 'Monitoring Period', text: 'You will rest comfortably in our clinic for approximately 2 hours while our medical team monitors your vitals and checks for side effects.' },
                { step: '04', title: 'Return Home', text: 'Once cleared by our healthcare provider, you may return home. Do not drive, operate machinery, or make important decisions until the next day after a full night\'s rest.' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-8 shadow-md border border-border">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-teal-dark mb-6">{item.step}</div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

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

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="hhs-tag">Common Questions</div>
              <h2 className="hhs-h2 text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: 'How long does a treatment session take?', a: 'Plan for approximately 2.5 to 3 hours total. This includes check-in, preparation, self-administration of the nasal spray, and the required 2-hour post-treatment monitoring period.' },
                { q: 'Will I need to stop my current antidepressant?', a: 'No. SPRAVATO® is used in conjunction with your current oral antidepressant. It is not a replacement for your existing medication regimen unless your doctor specifically recommends changes.' },
                { q: 'How soon will I feel better?', a: 'In clinical trials, many patients experienced improvement in depressive symptoms as early as 24 hours after the first dose, with continued improvement over the 4-week induction phase.' },
                { q: 'Can I drive myself home after treatment?', a: 'No. You must arrange for transportation home before each session. SPRAVATO® can affect your coordination and judgment, and you should not drive or operate machinery until the next day after a restful sleep.' },
                { q: 'How is SPRAVATO® different from ketamine infusion clinics?', a: 'SPRAVATO® is an FDA-approved, standardized medication with a well-established safety profile, dosing protocol, and REMS program. It is self-administered as a nasal spray under supervision, rather than through IV infusion.' },
                { q: 'What side effects should I expect?', a: 'Common side effects include dissociation (feeling disconnected from yourself or surroundings), dizziness, nausea, sedation, increased blood pressure, anxiety, headache, and numbness. These usually occur right after administration and resolve within 2 hours.' },
              ].map((faq) => (
                <details key={faq.q} className="bg-white rounded-xl border border-border overflow-hidden group">
                  <summary className="p-5 md:p-6 cursor-pointer font-semibold text-dark text-base md:text-lg flex items-center justify-between list-none hover:bg-teal/5 transition-colors">
                    {faq.q}
                    <svg className="w-5 h-5 text-teal flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 text-base leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
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
