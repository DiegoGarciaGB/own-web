import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?:    string
  title:     string
  subtitle?: string
  /** Alineación del bloque de texto */
  align?:    'left' | 'center'
  className?: string
}

/**
 * Reusable section heading block.
 * Every section that needs a title/subtitle imports this.
 *
 * Usage:
 *   <SectionHeader
 *     badge="Lo que hacemos"
 *     title="Servicios"
 *     subtitle="Soluciones concretas para negocios reales."
 *   />
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
