import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  /**
   * Controls vertical padding.
   * 'default' → py-20 md:py-28
   * 'tight'   → py-12 md:py-16
   * 'loose'   → py-28 md:py-40
   */
  spacing?: 'tight' | 'default' | 'loose'
}

const spacingMap = {
  tight:   'py-12 md:py-16',
  default: 'py-20 md:py-28',
  loose:   'py-28 md:py-40',
} as const

/**
 * Base wrapper for every landing section.
 * Centralises: max-width, horizontal padding, vertical rhythm, id anchor.
 *
 * Usage:
 *   <Section id="servicios">
 *     <SectionHeader ... />
 *     ...content...
 *   </Section>
 */
export function Section({
  id,
  className,
  children,
  spacing = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={id}
      className={cn(spacingMap[spacing], 'scroll-mt-20', className)}
    >
      <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8')}>
        {children}
      </div>
    </section>
  )
}
