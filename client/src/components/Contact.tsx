import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { Reveal } from './Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error')
      setMessage('Please fill in all fields.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? 'Something went wrong.')
      }
      setStatus('success')
      setMessage('Message sent — I’ll get back to you soon.')
      form.reset()
    } catch (err) {
      setStatus('error')
      setMessage(
        err instanceof Error
          ? err.message
          : 'Could not send. Email me directly instead.',
      )
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="section__inner contact__inner">
        <Reveal>
          <p className="section__label">Contact</p>
          <h2 className="section__title">Let’s build something sharp.</h2>
          <p className="contact__lede">
            Have a role, collaboration, or Android idea? Drop a note — or reach
            me directly at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="contact__full">
              Message
              <textarea name="message" rows={5} required />
            </label>
            <div className="contact__actions">
              <motion.button
                className="btn btn--primary"
                type="submit"
                disabled={status === 'loading'}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </motion.button>
              {message && (
                <p
                  className={`contact__status contact__status--${status}`}
                  role="status"
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
