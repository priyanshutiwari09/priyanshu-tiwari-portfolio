import { motion } from 'framer-motion'
import { Award, Flame, Target, Trophy } from 'lucide-react'
import { achievements } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const icons = [Trophy, Target, Flame, Award]

export function Achievements() {
  return (
    <Section id="achievements" ariaLabel="Achievements">
      <SectionHeading
        index="05"
        eyebrow="Achievements"
        title="Consistency, measured"
        description="Problem-solving practice tracked on LeetCode."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {achievements.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={item.value + item.label}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card p-5 text-center sm:p-6 sm:text-left"
            >
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent sm:mx-0">
                <Icon className="h-5 w-5" />
              </span>
              <div className="font-display text-2xl font-bold sm:text-3xl">
                <span className="text-gradient">{item.value}</span>
              </div>
              <p className="mt-1 text-xs text-muted sm:text-sm">{item.label}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
