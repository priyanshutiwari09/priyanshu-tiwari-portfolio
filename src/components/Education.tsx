import { GraduationCap } from 'lucide-react'
import { education } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Education() {
  return (
    <Section id="education" ariaLabel="Education">
      <SectionHeading index="07" eyebrow="Education" title="Where I studied" />

      <Reveal>
        <div className="card p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <GraduationCap className="h-6 w-6" />
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">
                  {education.institution}
                </h3>
                <span className="font-mono text-xs text-accent">
                  {education.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{education.university}</p>
              <p className="mt-4 text-base text-ink">{education.degree}</p>
              <p className="mt-3 inline-flex rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent2">
                {education.cgpa}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
