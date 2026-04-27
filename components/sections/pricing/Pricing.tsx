'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, X, LayoutTemplate, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { cn } from '@/lib/utils'
import { sitesTiers, automationsTiers } from '@/data/pricing'
import type { PricingTier } from '@/types'

// ─── Sub-component: PricingCard ──────────────────────────────────────────────
function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-2xl border p-6',
        tier.highlighted
          ? 'border-primary ring-2 ring-primary shadow-lg shadow-primary/10'
          : 'border-border'
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
        {tier.features.map((feature, i) => (
          <li
            key={i}
            className={cn(
              'flex items-start gap-2 text-sm',
              !feature.included && 'text-muted-foreground/40' // Per request
            )}
          >
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" /> // X icon per request
            )}
            <span className="flex-1">{feature.text}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function Pricing() {
  const [activeTab, setActiveTab] = useState<'sites' | 'automations'>('sites')
  const activeTiers = activeTab === 'sites' ? sitesTiers : automationsTiers

  return (
    <Section id="precios">
      <SectionHeader
        badge="Inversión"
        title="Precios transparentes."
        subtitle="Sin costos ocultos ni contratos complicados. Elige la línea de producto y el plan que se adapta a ti."
      />

      {/* Toggle */}
      <FadeUp delay={0}>
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-muted p-1">
            <button
              onClick={() => setActiveTab('sites')}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-colors',
                activeTab === 'sites'
                  ? 'bg-primary text-primary-foreground' // Activo
                  : 'bg-transparent text-muted-foreground hover:bg-muted-foreground/10' // Inactivo
              )}
            >
              Launch Sites
            </button>
            <button
              onClick={() => setActiveTab('automations')}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-colors',
                activeTab === 'automations'
                  ? 'bg-primary text-primary-foreground' // Activo
                  : 'bg-transparent text-muted-foreground hover:bg-muted-foreground/10' // Inactivo
              )}
            >
              Launch Automations
            </button>
          </div>
        </div>
      </FadeUp>

      <div className="grid gap-6 md:grid-cols-3">
        {activeTiers.map((tier, index) => (
          <FadeUp key={tier.id} delay={index * 0.1}>
            <PricingCard tier={tier} />
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
