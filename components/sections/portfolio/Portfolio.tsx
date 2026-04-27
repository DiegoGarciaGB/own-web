import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'
import { portfolioProjects } from '@/data/portfolio'
import type { PortfolioProject } from '@/types'

// ─── Tag color map ─────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  landing:       'bg-blue-50  text-blue-700  dark:bg-blue-950  dark:text-blue-300',
  automatización:'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  ecommerce:     'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  dashboard:     'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
}

// ─── Sub-component: ProjectCard ───────────────────────────────────────────────

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border p-6 transition-shadow hover:shadow-md">
      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              'rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
              tagStyles[tag] ?? 'bg-muted text-muted-foreground',
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="mb-2 font-semibold text-base">{project.title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Results pill */}
      {project.results && (
        <div className="mt-auto rounded-xl bg-muted px-4 py-2.5 text-sm font-medium text-foreground flex items-center justify-between">
          <span>{project.results}</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto ${project.title}`}
              className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Portfolio() {
  return (
    <Section id="portafolio" className="bg-muted/30">
      <SectionHeader
        badge="Resultados"
        title="Proyectos recientes."
        subtitle="Negocios reales que ya están creciendo con nuestra ayuda."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
