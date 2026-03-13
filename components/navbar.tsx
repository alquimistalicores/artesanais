"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "A Obra", href: "#historia" },
  { label: "As Po\u00e7\u00f5es", href: "#pocoes" },
  { label: "Princ\u00edpios", href: "#principios" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="relative block h-6 w-28 md:h-8 md:w-36">
          <Image
            src="/images/logo.png"
            alt="Alquimista Licores"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/c/554891737692"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 bg-primary/10 px-5 py-2 font-serif text-xs uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary/20"
          >
            Falar com o Alquimista
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col items-center gap-6 border-t border-border bg-background/95 px-6 py-8 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/c/554891737692"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 bg-primary/10 px-5 py-2 font-serif text-xs uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary/20"
          >
            Falar com o Alquimista
          </a>
        </div>
      )}
    </nav>
  )
}
