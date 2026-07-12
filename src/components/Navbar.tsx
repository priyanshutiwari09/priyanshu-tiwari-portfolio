import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const sectionIds = useMemo(
    () => nav.map((item) => item.href.replace('#', '')),
    [],
  )
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      // Let the menu close before scrolling so nothing blocks the jump.
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    }
    window.history.replaceState(null, '', href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">Priyanshu</span>
          <span className="text-ink"> Tiwari</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'text-ink'
                      : 'text-muted hover:text-ink',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-surface"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-elev text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-page flex flex-col py-4">
              {nav.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = active === id
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'block rounded-lg px-3 py-2.5 text-base transition-colors',
                        isActive
                          ? 'bg-surface text-accent'
                          : 'text-muted hover:bg-surface hover:text-ink',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
