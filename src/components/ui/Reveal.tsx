import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/** Fade-and-slide a block into view once it enters the viewport. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
