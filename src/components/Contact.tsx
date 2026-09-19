import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, Send } from 'lucide-react'
import { site, socials } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { SocialIcon } from './ui/SocialIcon'

type Status = 'idle' | 'sending' | 'success' | 'error'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsConfigured = Boolean(serviceId && templateId && publicKey)

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setError('Please fill in every field.')
      return
    }

    // Fallback: open the user's mail client if EmailJS isn't configured.
    if (!emailjsConfigured) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey },
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setError('Something went wrong. Please email me directly.')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none'

  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionHeading
        index="08"
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question or want to connect? Feel free to reach out on any platform below."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Form */}
        <Reveal>
          <form onSubmit={handleSubmit} className="card space-y-4 p-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me a little about it…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <div aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'success' && (
                <p className="text-accent2">
                  Thanks — your message is on its way.
                </p>
              )}
              {status === 'error' && error && (
                <p className="text-rose-400">{error}</p>
              )}
            </div>
          </form>
        </Reveal>

        {/* Links */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-line bg-elev p-4 transition-colors hover:border-accent/60"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                      <SocialIcon icon={social.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {social.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
