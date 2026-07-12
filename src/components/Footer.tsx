import { site, socials } from '@/data/portfolio'
import { SocialIcon } from './ui/SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-display text-base font-bold">
            <span className="text-gradient">Priyanshu</span>
            <span className="text-ink"> Tiwari</span>
          </a>
          <p className="mt-1 text-xs text-muted">
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === 'mail' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-faint transition-colors hover:text-accent"
            >
              <SocialIcon icon={social.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <p className="container-page mt-8 text-center text-xs text-faint">
        © {year} {site.name}. Built with React, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
