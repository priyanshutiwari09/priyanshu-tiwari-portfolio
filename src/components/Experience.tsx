import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've been building" />

      <div className="relative">
        {/* Timeline rail */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-2 bottom-2 w-px bg-line sm:left-5"
        />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role + exp.period}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-elev text-accent sm:h-10 sm:w-10">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {exp.period}
                  </span>
                </div>

                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-4 space-y-2.5"
                >
                  {exp.responsibilities.map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2"
                      />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
