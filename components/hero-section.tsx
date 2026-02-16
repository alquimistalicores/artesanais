"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        }
      },
      { threshold: 0.1 }
    )

    const children = sectionRef.current?.querySelectorAll("[data-animate]")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Decorative line */}
        <div
          data-animate
          className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0"
        />

        <p
          data-animate
          className="mb-4 font-serif text-xs uppercase tracking-[0.4em] text-primary opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Licores Artesanais
        </p>

        <h1
          data-animate
          className="mb-6 font-serif text-4xl leading-tight tracking-wide text-foreground opacity-0 md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-balance">
            {'Onde a natureza encontra a transmuta\u00e7\u00e3o'}
          </span>
        </h1>

        <p
          data-animate
          className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground opacity-0 md:text-lg"
          style={{ animationDelay: "0.6s" }}
        >
          {'Cada gota carrega o segredo de ingredientes selecionados, transformados pela paci\u00eancia e pela arte em elixires que despertam os sentidos.'}
        </p>

        <a
          data-animate
          href="https://wa.me/c/554891737692"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-primary/50 bg-primary/10 px-8 py-4 font-serif text-sm uppercase tracking-[0.25em] text-primary opacity-0 transition-all duration-500 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(180,130,50,0.15)]"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="relative z-10">Falar com o Alquimista</span>
          <svg
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>

        {/* Bottom decorative element */}
        <div
          data-animate
          className="mt-16 flex flex-col items-center gap-2 opacity-0"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Descubra
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
