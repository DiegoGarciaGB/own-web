import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'
import { pricingTiers } from '@/data/pricing'
import type { PricingTier } from '@/types'

// ─── Sub-component: PricingCard ───────────────────────────────────────────────

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-2xl border border-border p-6',
        tier.highlighted &&
          'border-primary shadow-lg shadow-primary/10 ring-2 ring-primary',
      )}
    >
      {/* Popular badge */}
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
          Más popular
        </span>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-base font-semibold">{tier.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-extrabold tabular-nums">{tier.price}</span>
        {tier.priceNote && (
          <span className="ml-2 text-sm text-muted-foreground">{tier.priceNote}</span>
        )}
      </div>

      {/* CTA */}
      <Button
        asChild
        variant={tier.highlighted ? 'default' : 'outline'}
        className="mb-6 w-full"
      >
        <Link href={tier.ctaHref}>{tier.ctaLabel}</Link>
      </Button>

      {/* Features */}
      <ul className="space-y-3" role="list">
        {tier.features.map((feature) => (
          <li
            key={feature.text}
            className={cn(
              'flex items-start gap-2 text-sm',
              !feature.included && 'text-muted-foreground/50',
            )}
          >
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>
    </article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Pricing() {
  return (
    <Section id="precios">
      <SectionHeader
        badge="Inversión"
        title="Precios transparentes."
        subtitle="Sin costos ocultos ni contratos complicados. Elige el plan que se adapta a tu etapa."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </Section>
  )
}
