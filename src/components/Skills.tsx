import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The stack I work in"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card p-5 transition-colors hover:border-accent/40"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
