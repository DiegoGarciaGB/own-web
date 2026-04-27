import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { navLinks } from '@/config/navigation'

/**
 * Site footer.
 * Data comes from config/ — if siteConfig changes, footer updates automatically.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          {/* Brand */}
          <div className="space-y-2">
            <p className="text-lg font-bold tracking-tight">
              {siteConfig.name}<span className="text-primary">.</span>
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Links del footer">
            <ul className="flex flex-wrap gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <p className="text-sm text-muted-foreground">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Hecho con intención en México.
        </div>
      </div>
    </footer>
  )
}
