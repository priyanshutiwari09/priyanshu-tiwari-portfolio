import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
}

/**
 * Section heading. The two-digit index encodes reading order — the page is a
 * sequence a recruiter scans top to bottom, so the numbering carries real
 * information rather than decoration.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-8 max-w-2xl"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-faint">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  )
}
