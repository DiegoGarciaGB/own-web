import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'
import { ctaContent } from '@/data/cta'

/**
 * Final CTA section — bottom of the page.
 * All copy lives in data/cta.ts.
 */
export function CTA() {
  const { heading, subheading, primaryLabel, primaryHref, secondaryLabel, secondaryHref } =
    ctaContent

  return (
    <Section id="contacto" spacing="loose">
      <div className="rounded-3xl bg-foreground px-6 py-16 text-center text-background md:px-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-background/70 md:text-lg">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {secondaryLabel && secondaryHref && (
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-background hover:bg-background/10 hover:text-background"
            >
              <Link href={secondaryHref} target="_blank" rel="noopener noreferrer">
                {secondaryLabel}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
