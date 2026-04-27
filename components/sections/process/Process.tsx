import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/process'
import type { ProcessStep } from '@/types'

// ─── Sub-component: StepCard ──────────────────────────────────────────────────

function StepCard({ step, title, description }: ProcessStep) {
  return (
    <div className="flex gap-4">
      {/* Step number */}
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-sm font-bold tabular-nums">
          {step}
        </span>
        {/* Connector line (hidden on last item via CSS group) */}
        <div className="mt-2 w-px flex-1 bg-border last:hidden" aria-hidden />
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="mb-1 font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Process() {
  return (
    <Section id="proceso" className="bg-muted/30">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">

        {/* Left: header */}
        <SectionHeader
          badge="Cómo trabajamos"
          title="Simple, rápido y sin sorpresas."
          subtitle="Un proceso claro de 4 pasos para ir de idea a lanzamiento sin enredos."
          align="left"
          className="mb-0"
        />

        {/* Right: steps */}
        <div>
          {processSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </Section>
  )
}
