import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-bg hover:bg-accent/90 shadow-glow',
  secondary:
    'border border-line bg-elev text-ink hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-ink',
}

const hover = { scale: 1.03 }
const tap = { scale: 0.97 }

interface ButtonProps {
  variant?: Variant
  className?: string
  children: React.ReactNode
  /** When provided, renders an anchor instead of a button. */
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  className,
  children,
  href,
  target,
  rel,
  download,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        aria-label={ariaLabel}
        whileHover={hover}
        whileTap={tap}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
      className={cn(classes, disabled && 'cursor-not-allowed opacity-60')}
    >
      {children}
    </motion.button>
  )
}
