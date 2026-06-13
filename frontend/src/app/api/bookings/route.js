import { readJSON, writeJSON } from '../_lib/db'
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

function formatDate(dateStr, timeStr) {
  const d = new Date(dateStr + 'T' + (timeStr || '12:00'))
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  return new Date(`2000-01-01T${timeStr}:00`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}

function buildEmailHtml(booking) {
  return `
<h2>New Appointment Booking</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Patient Information</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.firstName} ${booking.lastName}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">DOB</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.dob}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Phone</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.phone}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Email</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.email}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Address</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.address}${booking.city ? ', ' + booking.city : ''}${booking.state ? ', ' + booking.state : ''} ${booking.zip || ''}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Appointment</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Date</td><td style="padding:6px 12px;border:1px solid #ddd;">${formatDate(booking.appointmentDate, booking.appointmentTime)}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Time</td><td style="padding:6px 12px;border:1px solid #ddd;">${formatTime(booking.appointmentTime)}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Insurance</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Primary Carrier</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.insuranceCarrier || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Policy Number</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.policyNumber || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Secondary Carrier</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.secondaryInsuranceCarrier || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Secondary Policy</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.secondaryPolicyNumber || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Subscriber</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.subscriberName || 'Same as patient'}</td></tr>
  <tr><td style="padding:8px 12px;background:#f0f4f4;font-weight:600;border:1px solid #ddd;" colspan="2">Emergency Contact</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Name</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.emergencyName || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Phone</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.emergencyPhone || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Relationship</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.emergencyRelationship || 'N/A'}</td></tr>
  <tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:500;">Booking ID</td><td style="padding:6px 12px;border:1px solid #ddd;">${booking.id}</td></tr>
</table>
<p style="font-family:sans-serif;color:#666;font-size:12px;">This booking requires insurance verification. Please review and contact the patient.</p>
`.trim()
}

async function sendBookingEmail(booking) {
  const transporter = createTransporter()
  if (!transporter) {
    console.log('SMTP not configured — skipping email notification for', booking.id)
    return
  }
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Heritage Health System" <noreply@heritagehealthsystem.com>',
      to: COMPANY_EMAIL,
      subject: `New Appointment Booking — ${booking.firstName} ${booking.lastName}`,
      html: buildEmailHtml(booking),
    })
    console.log('Booking email sent for', booking.id)
  } catch (err) {
    console.error('Failed to send booking email:', err.message)
  }
}

export async function POST(req) {
  const body = await req.json()
  const {
    firstName, lastName, email, phone, dob,
    address, city, state, zip,
    subscriberName, subscriberDob, subscriberAddress,
    insuranceCarrier, policyNumber,
    secondaryInsuranceCarrier, secondaryPolicyNumber,
    emergencyName, emergencyPhone, emergencyRelationship,
    slotId,
  } = body

  if (!firstName || !lastName || !email || !phone || !dob || !slotId) {
    return Response.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  let slots = readJSON('slots.json')
  const slot = slots.find((s) => s.id === slotId)
  if (!slot) return Response.json({ error: 'This time slot is no longer available.' }, { status: 404 })
  if (slot.booked) return Response.json({ error: 'This time slot has just been booked.' }, { status: 409 })

  slot.booked = true
  writeJSON('slots.json', slots)

  const booking = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    firstName, lastName, email, phone, dob,
    address: address || '', city: city || '', state: state || '', zip: zip || '',
    subscriberName: subscriberName || '',
    subscriberDob: subscriberDob || '',
    subscriberAddress: subscriberAddress || '',
    insuranceCarrier: insuranceCarrier || '',
    policyNumber: policyNumber || '',
    secondaryInsuranceCarrier: secondaryInsuranceCarrier || '',
    secondaryPolicyNumber: secondaryPolicyNumber || '',
    emergencyName: emergencyName || '',
    emergencyPhone: emergencyPhone || '',
    emergencyRelationship: emergencyRelationship || '',
    slotId,
    appointmentDate: slot.date,
    appointmentTime: slot.time,
    status: 'pending',
    providerName: '',
    providerNetworkStatus: '',
    effectiveDate: '',
    authorizationNumber: '',
    numberOfVisits: '',
    copay: '',
    telehealth: false,
    refNumber: '',
    ineligible: false,
    internalNotes: '',
    createdAt: new Date().toISOString(),
  }

  const bookings = readJSON('bookings.json')
  bookings.push(booking)
  writeJSON('bookings.json', bookings)

  sendBookingEmail(booking)

  return Response.json({ success: true, message: 'Your appointment has been booked! Insurance verification is in progress.', booking }, { status: 201 })
}
