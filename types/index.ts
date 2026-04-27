// ─── Primitives ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  id: string
  icon: string          // Lucide icon name (string) — resolved in component
  title: string
  description: string
  features: string[]
  highlight?: boolean   // Optional: marks the "featured" service card
}

// ─── Process ──────────────────────────────────────────────────────────────────

export interface ProcessStep {
  step: number
  title: string
  description: string
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingTier {
  id: string
  name: string
  price: string
  priceNote?: string    // e.g. "por proyecto" vs "mensual"
  description: string
  features: PricingFeature[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export type ProjectTag = 'landing' | 'automatización' | 'ecommerce' | 'dashboard'

export interface PortfolioProject {
  id: string
  title: string
  description: string
  tags: ProjectTag[]
  imageUrl?: string     // Optional: para cuando tengas imágenes reales
  liveUrl?: string
  results?: string      // e.g. "+32% conversión en 30 días"
}

// ─── Social Proof / Clients ───────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatarUrl?: string
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

export interface CTAConfig {
  heading: string
  subheading: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

// ─── Site / SEO ───────────────────────────────────────────────────────────────

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  socials: {
    twitter?: string
    linkedin?: string
    github?: string
    instagram?: string
  }
}
