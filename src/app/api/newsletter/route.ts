import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email) return NextResponse.json({ ok: false }, { status: 400 })
  console.log('[newsletter] nuevo suscriptor:', email)
  // TODO: integrar con Mailchimp / Resend / ConvertKit
  return NextResponse.json({ ok: true })
}
