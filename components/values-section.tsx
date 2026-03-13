"use client"

import React from "react"

import { useEffect, useRef } from "react"

interface Value {
  title: string
  description: string
  icon: React.ReactNode
}

const values: Value[] = [
  {
    title: "Produção Artesanal",
    description:
      "Cada lote é feito à mão, com calma e atenção real aos detalhes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    title: "Pequena Escala",
    description:
      "Produzimos em pequenos lotes para manter o controle de tudo que sai daqui.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M7 21h10l1-5H6l1 5zm5-18C9.24 3 7 5.24 7 8c0 1.76.92 3.3 2.3 4.18L8 17h8l-1.3-4.82C16.08 11.3 17 9.76 17 8c0-2.76-2.24-5-5-5z" />
      </svg>
    ),
  },
  {
    title: "Ingredientes Selecionados",
    description:
      "Usamos ingredientes naturais e, sempre que possível, de produtores locais. Nada de químicos, nada de corantes — a cor e o sabor vêm da própria natureza.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
  },
  {
    title: "Sustentabilidade",
    description:
      "Reutilizamos e reciclamos nossas garrafas, mantendo o ciclo em movimento. Menos descarte, mais consciência.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
      </svg>
    ),
  },
  {
    title: "Identidade Mística",
    description:
      "A alquimia é o nosso ponto de partida. Misturamos técnica, intuição e tempo para criar algo que vai além do óbvio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Experiência Sensorial",
    description:
      "Nossos licores despertam aromas intensos, camadas de sabor e aquela pausa boa no meio do dia. Cada gole revela algo novo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-8 w-8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
]

export function ValuesSection() {
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
      id="principios"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(25_10%_10%)_0%,_transparent_60%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div
            data-animate
            className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0"
          />
          <p
            data-animate
            className="mb-3 font-serif text-xs uppercase tracking-[0.4em] text-primary opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            {'Nossos Princ\u00edpios'}
          </p>
          <h2
            data-animate
            className="font-serif text-3xl tracking-wide text-foreground opacity-0 md:text-4xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-balance">Os pilares da nossa alquimia</span>
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              data-animate
              className="group flex flex-col border border-border/40 bg-card/30 p-8 opacity-0 transition-all duration-500 hover:border-primary/30 hover:bg-card/60"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="mb-5 text-primary/60 transition-colors duration-300 group-hover:text-primary">
                {value.icon}
              </div>
              <h3 className="mb-3 font-serif text-lg tracking-wide text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
