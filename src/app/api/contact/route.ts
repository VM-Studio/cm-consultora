import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 })
  }
  // Configurar aquí el envío de email (nodemailer, Resend, etc.)
  // Ejemplo con Resend: https://resend.com/docs
  console.log('Nuevo mensaje:', { name, email, message })
  return NextResponse.json({ ok: true })
}
