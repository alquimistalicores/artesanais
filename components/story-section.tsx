"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function StorySection() {
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
      { threshold: 0.15 }
    )

    const children = sectionRef.current?.querySelectorAll("[data-animate]")
    children?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(25_10%_12%)_0%,_transparent_70%)] opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section title */}
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
            A Obra
          </p>
          <h2
            data-animate
            className="font-serif text-3xl tracking-wide text-foreground opacity-0 md:text-4xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-balance">
              {'A arte de transformar o simples em extraordin\u00e1rio'}
            </span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div
            data-animate
            className="relative aspect-[3/4] w-full max-w-md overflow-hidden opacity-0 md:w-1/2"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/story.jpg"
              alt="Processo artesanal de produ\u00e7\u00e3o dos licores Alquimista"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 border border-primary/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <p
              data-animate
              className="text-base leading-relaxed text-muted-foreground opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              {'Assim como os antigos alquimistas buscavam transformar o comum em ouro, n\u00f3s transformamos ingredientes naturais cuidadosamente selecionados em elixires que encantam o paladar e despertam os sentidos.'}
            </p>
            <p
              data-animate
              className="text-base leading-relaxed text-muted-foreground opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              {'Cada lote \u00e9 produzido artesanalmente, em pequenas quantidades, para garantir que cada garrafa carregue a ess\u00eancia da dedica\u00e7\u00e3o e do cuidado manual. N\u00e3o h\u00e1 pressa no nosso processo \u2014 apenas a paci\u00eancia necess\u00e1ria para que a transmuta\u00e7\u00e3o aconte\u00e7a.'}
            </p>
            <p
              data-animate
              className="text-base leading-relaxed text-muted-foreground opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              {'Acreditamos na sustentabilidade como parte do ritual: nossas garrafas s\u00e3o recicladas e ganham nova vida a cada ciclo, assim como os elementos na alquimia se renovam infinitamente.'}
            </p>

            {/* Decorative separator */}
            <div
              data-animate
              className="mt-4 flex items-center gap-4 opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              <svg
                className="h-5 w-5 text-primary/50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
