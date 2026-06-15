import nodemailer from 'nodemailer'
import { readJSON, writeJSON } from '../_lib/db'

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

function buildEmailHtml(application) {
  return `
<h2>New Preceptorship Application</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Personal Information</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.firstName} ${application.lastName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Email</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.email}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Phone</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.phone}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">DOB</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.dob || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Address</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.address || ''}${application.city ? ', ' + application.city : ''}${application.state ? ', ' + application.state : ''} ${application.zip || ''}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Academic Information</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">School / Institution</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.school}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Degree / Program</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.program}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Current Year</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.currentYear || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Hours Needed</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.hours}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Preferred Start</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.preferredStartDate || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Schedule</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.preferredSchedule || 'N/A'}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Compliance</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">CPR / BLS Certified</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.cprCertified || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Immunizations</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.immunizationsUpToDate || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Background Check</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.backgroundCheckCompleted || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Liability Insurance</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.liabilityInsurance || 'N/A'}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Emergency Contact</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.emergencyName || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Phone</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.emergencyPhone || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Relationship</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.emergencyRelationship || 'N/A'}</td></tr>
  ${application.notes ? `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Notes</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.notes}</td></tr>` : ''}
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Application ID</td><td style="padding:6px 12px;border:1px solid #ddd;">${application.id}</td></tr>
</table>
`.trim()
}

async function sendEmail(application) {
  const transporter = createTransporter()
  if (!transporter) {
    console.log('SMTP not configured - skipping email for preceptorship', application.id)
    return
  }
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Heritage Health System" <noreply@heritagehealthsystem.com>',
      to: COMPANY_EMAIL,
      subject: `New Preceptorship Application - ${application.firstName} ${application.lastName}`,
      html: buildEmailHtml(application),
    })
    console.log('Preceptorship email sent for', application.id)
  } catch (err) {
    console.error('Failed to send preceptorship email:', err.message)
  }
}

export async function POST(req) {
  const body = await req.json()
  const {
    firstName, lastName, email, phone, dob,
    address, city, state, zip,
    school, program, currentYear, hours, preferredStartDate, preferredSchedule,
    cprCertified, immunizationsUpToDate, backgroundCheckCompleted, liabilityInsurance,
    emergencyName, emergencyPhone, emergencyRelationship,
    notes,
  } = body

  if (!firstName || !lastName || !email || !phone || !school || !program || !hours) {
    return Response.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const application = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    firstName, lastName, email, phone, dob: dob || '',
    address: address || '', city: city || '', state: state || '', zip: zip || '',
    school, program, currentYear: currentYear || '',
    hours: parseInt(hours, 10),
    preferredStartDate: preferredStartDate || '',
    preferredSchedule: preferredSchedule || '',
    cprCertified: cprCertified || '',
    immunizationsUpToDate: immunizationsUpToDate || '',
    backgroundCheckCompleted: backgroundCheckCompleted || '',
    liabilityInsurance: liabilityInsurance || '',
    emergencyName: emergencyName || '',
    emergencyPhone: emergencyPhone || '',
    emergencyRelationship: emergencyRelationship || '',
    notes: notes || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  }

  const applications = readJSON('preceptorship.json')
  applications.push(application)
  writeJSON('preceptorship.json', applications)

  sendEmail(application)

  return Response.json({
    success: true,
    message: 'Your preceptorship application has been submitted. We will contact you soon.',
  }, { status: 201 })
}
