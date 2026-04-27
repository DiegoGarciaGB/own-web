'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'   // shadcn/ui
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { navLinks, navCTA } from '@/config/navigation'

/**
 * Top navigation bar.
 * - Desktop: logo left, links center, CTA right
 * - Mobile: hamburger menu with full-screen overlay
 * Data comes from config/ — never hardcoded here.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevenir hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          {siteConfig.name}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Theme */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button asChild size="sm">
            <Link href={navCTA.href}>{navCTA.label}</Link>
          </Button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Cambiar tema"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Cambiar tema"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </button>
          )}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-border/40 bg-background px-4 pb-6 pt-4 transition-all',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild className="mt-6 w-full">
          <Link href={navCTA.href} onClick={() => setMobileOpen(false)}>
            {navCTA.label}
          </Link>
        </Button>
      </div>
    </header>
  )
}
