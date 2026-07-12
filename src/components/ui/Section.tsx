import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

/** Consistent section shell: full-width, padded, with a centered container. */
export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('py-12 sm:py-16', className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
