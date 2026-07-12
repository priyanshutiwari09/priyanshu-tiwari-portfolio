import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { about, site, socials } from '@/data/portfolio'
import { Button } from './ui/Button'
import { SocialIcon } from './ui/SocialIcon'
import { easeOut, staggerContainer, staggerItem } from '@/lib/animations'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 pb-10"
    >
      {/* Ambient gradient glow — subtle, no particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent2/15 blur-[110px]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {site.name.split(' ')[0]}{' '}
            <span className="text-gradient">{site.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-3 font-mono text-sm text-accent sm:text-base"
          >
            {site.role} · Java Backend
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0"
          >
            {about.intro}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Button variant="primary" href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#contact">
              Contact Me
              <Mail className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex justify-center gap-4 lg:justify-start"
          >
            {socials
              .filter((s) => s.icon !== 'mail')
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-faint transition-colors hover:text-accent"
                >
                  <SocialIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/40 opacity-60 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative aspect-square w-56 overflow-hidden rounded-[1.75rem] border border-line bg-elev sm:w-64 lg:w-72"
            >
              <img
                src={site.profileImage}
                alt={`${site.name}, ${site.role}`}
                width={288}
                height={288}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
