import { Check } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { productsList } from '@/data/products'
import Link from 'next/link'

export function Products() {
  return (
    <Section id="productos" className="bg-muted/30">
      <SectionHeader
        badge="Nuestros Productos"
        title="Escala tu negocio con nuestras soluciones."
        subtitle="Dos enfoques principales para resolver tus problemas digitales: presencia online y eficiencia operativa."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {productsList.map((product, index) => {
          const Icon = product.icon
          const isAutomations = product.id === 'automations'

          return (
            <FadeUp key={product.id} delay={index === 0 ? 0 : 0.15}>
              <article
                className={cn(
                  'group flex flex-col justify-between h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-12',
                  isAutomations ? 'border-primary/40 bg-primary/5' : ''
                )}
              >
                <div>
                  <div
                    className={cn(
                      'mb-8 inline-flex rounded-2xl p-4',
                      isAutomations ? 'bg-primary/10 text-primary' : 'bg-muted text-foreground'
                    )}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-base font-medium text-primary">
                    {product.tagline}
                  </p>
                  <p className="mb-8 text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="mb-8 space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto"
                    variant="default"
                  >
                    <Link href="#precios">{product.ctaText}</Link>
                  </Button>
                </div>
              </article>
            </FadeUp>
          )
        })}
      </div>
    </Section>
  )
}
