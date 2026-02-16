"use client"

import { useEffect, useRef } from "react"

export function CtaSection() {
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
      { threshold: 0.2 }
    )

    const children = sectionRef.current?.querySelectorAll("[data-animate]")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_30%_10%)_0%,_hsl(20_10%_5%)_70%)]" />
      <div className="absolute inset-0 border-y border-primary/10" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Decorative symbol */}
        <div
          data-animate
          className="mb-8 opacity-0"
        >
          <svg
            className="h-10 w-10 text-primary/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.8}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>

        <p
          data-animate
          className="mb-4 font-serif text-xs uppercase tracking-[0.4em] text-primary opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          O Ritual
        </p>

        <h2
          data-animate
          className="mb-6 font-serif text-3xl leading-tight tracking-wide text-foreground opacity-0 md:text-5xl"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-balance">
            A transmutacao aguarda. O proximo elixir e seu.
          </span>
        </h2>

        <p
          data-animate
          className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Fale diretamente com o Alquimista e descubra qual poção foi feita para
          você. Cada pedido é único, assim como cada ritual.
        </p>

        <a
          data-animate
          href="https://wa.me/c/554891737692"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-primary bg-primary/15 px-10 py-5 font-serif text-sm uppercase tracking-[0.25em] text-primary opacity-0 transition-all duration-500 hover:bg-primary/25 hover:shadow-[0_0_40px_rgba(180,130,50,0.2)]"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="relative z-10">Solicitar meu Elixir</span>
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

        {/* Bottom decoration */}
        <div
          data-animate
          className="mt-16 opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
