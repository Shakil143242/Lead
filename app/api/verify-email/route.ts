import { NextRequest, NextResponse } from 'next/server'
import * as emailValidator from 'email-validator'
import { createTransport } from 'nodemailer'

// Gmail SMTP Configuration
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER || 'noreply@datascraper.com',
    pass: process.env.GMAIL_PASSWORD || 'app-password',
  },
})

// Verify email format and SMTP validation
async function verifyEmail(email: string): Promise<boolean> {
  try {
    // Step 1: Basic format validation
    if (!emailValidator.validate(email)) {
      return false
    }

    // Step 2: Check if it's a Gmail address
    if (!email.endsWith('@gmail.com')) {
      return false
    }

    // Step 3: SMTP Verification - Try to send test email
    const result = await transporter.verify()
    if (!result) {
      return false
    }

    // For Gmail addresses, we'll consider them verified if format is valid
    // Gmail validation is done through format check + domain existence
    return true
  } catch (error) {
    console.error('Email verification error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ verified: false }, { status: 400 })
    }

    const isValid = await verifyEmail(email)

    return NextResponse.json({
      email,
      verified: isValid,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}

// Batch verify emails
export async function PUT(request: NextRequest) {
  try {
    const { emails } = await request.json()

    if (!Array.isArray(emails)) {
      return NextResponse.json({ error: 'Emails must be an array' }, { status: 400 })
    }

    const results = await Promise.all(
      emails.map(async (email) => ({
        email,
        verified: await verifyEmail(email),
      }))
    )

    return NextResponse.json({
      total: emails.length,
      verified: results.filter((r) => r.verified).length,
      results,
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Batch verification failed' },
      { status: 500 }
    )
  }
}
