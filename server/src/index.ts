import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const PORT = Number(process.env.PORT ?? 5050)
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? 'http://localhost:5173'

app.use(
  cors({
    origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  }),
)
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'bardaval-portfolio-api' })
})

app.post('/api/contact', async (req, res) => {
  const name = String(req.body?.name ?? '').trim()
  const email = String(req.body?.email ?? '').trim()
  const message = String(req.body?.message ?? '').trim()

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: 'Name, email, and message are required.' })
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false, error: 'Please provide a valid email.' })
    return
  }

  const to = process.env.CONTACT_TO ?? 'jagadeeshbardaval78@gmail.com'

  // Without SMTP credentials, accept the message and log it (dev-friendly).
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[contact]', { name, email, message, to })
    res.json({
      ok: true,
      delivered: false,
      note: 'Stored in server logs. Configure SMTP_* env vars to email.',
    })
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })

    res.json({ ok: true, delivered: true })
  } catch (error) {
    console.error('[contact:error]', error)
    res.status(500).json({ ok: false, error: 'Failed to send message. Try emailing directly.' })
  }
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
