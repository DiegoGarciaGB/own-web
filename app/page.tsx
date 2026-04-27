import { Navbar }    from '@/components/layout/Navbar'
import { Footer }    from '@/components/layout/Footer'
import { Hero }      from '@/components/sections/hero/Hero'
import { Products }  from '@/components/sections/products/Products'
import { Process }   from '@/components/sections/process/Process'
import { Portfolio } from '@/components/sections/portfolio/Portfolio'
import { Pricing }   from '@/components/sections/pricing/Pricing'
import { CTA }       from '@/components/sections/cta/CTA'

/**
 * Landing page root.
 * This file ONLY composes sections — no logic, no data, no styles.
 * Each section is fully independent and pulls its own data.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Products />
        <Process />
        <Portfolio />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
