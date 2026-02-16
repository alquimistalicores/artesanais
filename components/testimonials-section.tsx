"use client"

import { useEffect, useRef } from "react"

interface Testimonial {
  text: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    text: "Cada garrafa \u00e9 uma experi\u00eancia \u00fanica. O licor de chocolate cremoso \u00e9 simplesmente divino.",
    author: "Marina S.",
  },
  {
    text: "Presenteei minha m\u00e3e com o kit e ela ficou encantada. A embalagem \u00e9 t\u00e3o bonita quanto o sabor.",
    author: "Carlos R.",
  },
  {
    text: "O de maracuj\u00e1 cremoso \u00e9 viciante. Nunca provei nada igual. Virou tradi\u00e7\u00e3o nas reuni\u00f5es de fam\u00edlia.",
    author: "Juliana M.",
  },
  {
    text: "A po\u00e7\u00e3o de caf\u00e9 com laranja \u00e9 surpreendente. Uma combina\u00e7\u00e3o que n\u00e3o esperava amar tanto.",
    author: "Rafael T.",
  },
  {
    text: "Descobri o Alquimista numa feira e desde ent\u00e3o sou cliente fiel. Qualidade artesanal de verdade.",
    author: "Ana Paula L.",
  },
  {
    text: "O licor de jabuticaba me transportou para a inf\u00e2ncia. Sabor aut\u00eantico e mem\u00f3rias em cada gole.",
    author: "Fernando G.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-3 flex w-[340px] flex-none flex-col justify-between border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:mx-4 md:w-[400px] md:p-8">
      <div>
        <svg
          className="mb-4 h-6 w-6 text-primary/40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm leading-relaxed text-foreground/80">
          {testimonial.text}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/30" />
        <div className="text-right">
          <p className="font-serif text-sm text-primary">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    const handleMouseEnter = () => {
      el.style.animationPlayState = "paused"
    }
    const handleMouseLeave = () => {
      el.style.animationPlayState = "running"
    }

    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-6xl px-6 text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mb-3 font-serif text-xs uppercase tracking-[0.4em] text-primary">
          {'Vozes da Alquimia'}
        </p>
        <h2 className="font-serif text-3xl tracking-wide text-foreground md:text-4xl">
          <span className="text-balance">O que dizem nossos apreciadores</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        <div
          ref={marqueeRef}
          className="flex animate-marquee"
        >
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
