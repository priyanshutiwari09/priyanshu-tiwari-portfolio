import { Instagram, Users } from 'lucide-react'
import { beyondCoding } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

export function BeyondCoding() {
  return (
    <Section id="beyond-coding" ariaLabel="Beyond Coding">
      <SectionHeading
        index="06"
        eyebrow="Beyond Coding"
        title="A newsroom of one"
      />

      <Reveal>
        <div className="card overflow-hidden">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-fuchsia-500/30 via-accent/20 to-accent2/20 blur-2xl"
              />
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-elev">
                <img
                  src={beyondCoding.image}
                  alt={`${beyondCoding.handle} — Mumbai news platform`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
                <Instagram className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="font-mono text-sm text-ink">
                  {beyondCoding.handle}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent2" aria-hidden="true" />
                <span className="font-display text-3xl font-bold">
                  <span className="text-gradient">
                    {beyondCoding.followers}
                  </span>
                </span>
                <span className="text-sm text-muted">followers</span>
              </div>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                {beyondCoding.description}
              </p>

              <div className="mt-7">
                <Button
                  variant="primary"
                  href={beyondCoding.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Visit Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
