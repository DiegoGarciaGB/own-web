import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'
import { FadeUp } from '@/components/ui/FadeUp'
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
      <FadeUp delay={0}>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
          {badge}
        </span>
      </FadeUp>

      {/* Headline */}
      <FadeUp delay={0.1} className="w-full">
        <h1 className="mb-6 mx-auto w-full max-w-3xl text-center text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
          {headline.split('\n').map((line, i) => (
            <span
              key={i}
              className={cn('block', i === 0 ? 'text-foreground font-bold' : 'text-primary font-extrabold')}
            >
              {line}
            </span>
          ))}
        </h1>
      </FadeUp>

      {/* Subheadline */}
      <FadeUp delay={0.2}>
        <p className="mb-10 mx-auto max-w-xl text-lg text-muted-foreground">
          {subheadline}
        </p>
      </FadeUp>

      {/* CTAs */}
      <FadeUp delay={0.3}>
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
      </FadeUp>

      {/* Stats */}
      <FadeUp delay={0.4}>
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
      </FadeUp>
    </Section>
  )
}
