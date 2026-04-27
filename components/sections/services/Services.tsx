import { Check } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'
import { services } from '@/data/services'
import type { Service } from '@/types'

// ─── Sub-component: ServiceCard ───────────────────────────────────────────────

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  // Resolve Lucide icon by name string (data-driven icons)
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    service.icon
  ] ?? LucideIcons.Box

  return (
    <article
      className={cn(
        'flex flex-col rounded-2xl border border-border p-6 hover:shadow-md transition-shadow',
        service.highlight &&
          'border-primary/40 bg-primary/5 ring-1 ring-primary/20',
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
        <Icon className="h-5 w-5 text-foreground" />
      </div>

      {/* Title & description */}
      <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="mt-auto space-y-2" role="list">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeader
        badge="Lo que hacemos"
        title="Servicios"
        subtitle="Soluciones concretas para negocios que quieren crecer sin depender de agencias lentas y caras."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  )
}
