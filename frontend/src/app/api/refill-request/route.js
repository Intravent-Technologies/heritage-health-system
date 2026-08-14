import nodemailer from 'nodemailer'

const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'info@heritagehealthsystem.com'

function createTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  }
  return null
}

function buildEmailHtml(request) {
  return `
<h2>New Prescription Refill Request</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Patient Information</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Patient First Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.patientFirstName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Patient Last Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.patientLastName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Date of Birth</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.dob}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Medication Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.medicationName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Pill Strength</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.pillStrength}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Number of Pills Daily</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.pillsDaily}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Person Requesting Refill</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Requestor First Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.requestorFirstName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Requestor Last Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.requestorLastName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Relationship to Patient</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.relationship}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Additional Information</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Additional Information</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.additionalInfo || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Request ID</td><td style="padding:6px 12px;border:1px solid #ddd;">${request.id}</td></tr>
</table>
<p style="font-family:sans-serif;color:#666;font-size:12px;">This patient has requested a prescription refill. Please review and contact them if additional information is needed.</p>
`.trim()
}

async function sendRefillEmail(request) {
  const transporter = createTransporter()
  if (!transporter) {
    console.log('SMTP not configured - skipping email for refill request', request.id)
    return
  }
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Heritage Health System" <noreply@heritagehealthsystem.com>',
      to: COMPANY_EMAIL,
      subject: 'New Prescription Refill Request',
      html: buildEmailHtml(request),
    })
    console.log('Refill request email sent for', request.id)
  } catch (err) {
    console.error('Failed to send refill request email:', err.message)
  }
}

export async function POST(req) {
  const body = await req.json()
  const {
    patientFirstName, patientLastName, dob,
    medicationName, pillStrength, pillsDaily,
    requestorFirstName, requestorLastName, relationship,
    additionalInfo,
  } = body

  if (
    !patientFirstName || !patientLastName || !dob ||
    !medicationName || !pillStrength || !pillsDaily ||
    !requestorFirstName || !requestorLastName || !relationship
  ) {
    return Response.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const refillRequest = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    patientFirstName, patientLastName, dob,
    medicationName, pillStrength, pillsDaily,
    requestorFirstName, requestorLastName, relationship,
    additionalInfo: additionalInfo || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  }

  await sendRefillEmail(refillRequest)

  return Response.json({
    success: true,
    message: 'Your prescription refill request has been submitted. Our team will review it and contact you if needed.',
  }, { status: 201 })
}
