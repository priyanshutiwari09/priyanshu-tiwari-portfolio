import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { about, technicalBackground } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <SectionHeading index="01" eyebrow="About" title="Backend engineer, product-minded" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted">
          <p className="text-ink">{about.intro}</p>
          {about.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}

          <div className="pt-2">
            <h3 className="eyebrow mb-4">Currently working with</h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-wrap gap-2"
            >
              {about.currentlyWorkingWith.map((tech) => (
                <motion.li
                  key={tech}
                  variants={staggerItem}
                  className="rounded-full border border-line bg-elev px-3 py-1.5 font-mono text-xs text-ink"
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold">
              Technical background
            </h3>
            <p className="mt-2 text-sm text-muted">
              {technicalBackground.intro}
            </p>
            <ul className="mt-5 space-y-3">
              {technicalBackground.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
