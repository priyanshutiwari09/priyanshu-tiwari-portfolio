import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

function ProjectCard({ project }: { project: Project }) {
  const hasDemo = project.demo && project.demo !== '#'

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group card overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface px-2.5 py-1 font-mono text-[11px] text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-faint"
              title="Live demo coming soon"
            >
              <ExternalLink className="h-4 w-4" />
              Demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Things I've designed and shipped"
        description="A selection of full-stack and AI-focused projects built across the MERN stack and Python."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}
