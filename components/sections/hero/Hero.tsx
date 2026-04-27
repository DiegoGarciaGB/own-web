import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'
import { heroContent } from '@/data/hero'
import { cn } from '@/lib/utils'

/**
 * Hero section — above the fold.
 * All copy lives in data/hero.ts.
 * This component is purely presentational.
 */
export function Hero() {
  const { badge, headline, subheadline, primaryCTA, secondaryCTA, stats } =
    heroContent

  return (
    <Section
      id="inicio"
      spacing="loose"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-16"
    >
      {/* Badge */}
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
        {badge}
      </span>

      {/* Headline */}
      <h1 className="mb-6 max-w-3xl text-6xl md:text-8xl font-extrabold tracking-tight leading-none">
        {headline.split('\n').map((line, i) => (
          <span
            key={i}
            className={cn('block', i === 0 ? 'text-foreground' : 'text-primary')}
          >
            {line}
          </span>
        ))}
      </h1>

      {/* Subheadline */}
      <p className="mb-10 mx-auto max-w-xl text-lg text-muted-foreground">
        {subheadline}
      </p>

      {/* CTAs */}
      <div className="mb-20 flex justify-center gap-3">
        <Button asChild size="lg">
          <Link href={primaryCTA.href}>
            {primaryCTA.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mx-auto grid w-full max-w-lg grid-cols-3 gap-8 border-t border-border pt-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="text-4xl font-bold tabular-nums text-foreground">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
