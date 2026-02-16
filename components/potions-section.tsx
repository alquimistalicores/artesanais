"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface Potion {
  name: string
  subtitle: string
  description: string
  images?: string[]
}

interface Category {
  title: string
  description: string
  image: string
  potions: Potion[]
}

const categories: Category[] = [
  {
    title: "Especiais",
    description:
      "Criações exclusivas para momentos únicos. Presentes que carregam o espírito da alquimia em cada detalhe.",
    image: "/images/potions-especiais.jpg",
    potions: [
      {
        name: "Kit Presenteável",
        subtitle: "O presente perfeito",
        description:
          "Experiência artesanal pronta para presentear com elegância.",
        images: ["/images/sabores/kit-presenteavel.jpeg"],
      },
      {
        name: "Kit Degustação",
        subtitle: "Uma jornada pelos sabores",
        description:
          "Seleção de elixires para explorar sabores e descobrir preferidos.",
        images: ["/images/sabores/kit-degustacao.jpeg"],
      },
      {
        name: "Poção da Prosperidade",
        subtitle: "Leite e Especiarias",
        description:
          "Cremoso e aromático, com notas quentes e final marcante.",
        images: ["/images/sabores/leite-especiarias.jpg"],
      },
    ],
  },
  {
    title: "Cremosos",
    description:
      "Texturas envolventes que acariciam o paladar. Elixires densos, aveludados e irresistíveis.",
    image: "/images/potions-cremosos.jpg",
    potions: [
      {
        name: "Poção do Desejo",
        subtitle: "Chocolate Cremoso",
        description:
          "Cremoso e intenso, com textura aveludada e sabor marcante.",
        images: ["/images/sabores/chocolate.png"],
      },
      {
        name: "Poção do Doce Sossego",
        subtitle: "Maracujá Cremoso",
        description:
          "Fresco e sedoso, une acidez vibrante à cremosidade delicada.",
        images: ["/images/sabores/maracuja-cremoso.png"],
      },
      {
        name: "Poção do Doce Deleite",
        subtitle: "Doce de Leite",
        description:
          "Suave e cremoso, com doçura equilibrada e toque artesanal.",
        images: ["/images/sabores/doce-de-leite.png"],
      },
    ],
  },
  {
    title: "Finos",
    description:
      "A sutileza dos ingredientes em estado puro. Notas delicadas que revelam a essência de cada fruto.",
    image: "/images/potions-finos.jpg",
    potions: [
      {
        name: "Poção Tropical",
        subtitle: "Abacaxi",
        description:
          "Tropical e refrescante, com leve acidez e final suave.",
        images: ["/images/sabores/abacaxi.png"],
      },
      {
        name: "Poção da Travessura",
        subtitle: "Banana",
        description:
          "Doçura natural e textura macia, com sabor acolhedor e envolvente.",
        images: ["/images/sabores/banana.png"],
      },
      {
        name: "Poção Néctar Místico",
        subtitle: "Butiá",
        description:
          "Exótico e levemente cítrico, com personalidade vibrante e final surpreendente.",
        images: ["/images/sabores/butia.png"],
      },
      {
        name: "Poção da Inspiração",
        subtitle: "Café com Laranja",
        description:
          "Intenso e aromático, une amargor do café ao frescor cítrico.",
        images: [
          "/images/sabores/cafe-com-laranja.png",
          "/images/sabores/cafe-com-laranja-2.png",
        ],
      },
      {
        name: "Poção do Aconchego",
        subtitle: "Canela",
        description:
          "Aroma quente e especiado, com sabor acolhedor e levemente adocicado.",
        images: ["/images/sabores/canela.png"],
      },
      {
        name: "Poção da Conexão",
        subtitle: "Figo",
        description:
          "Doce profundo e elegante, com notas maduras e final envolvente.",
        images: ["/images/sabores/figo.png"],
      },
      {
        name: "Poção Silvestre",
        subtitle: "Jabuticaba",
        description:
          "Frutado intenso e levemente ácido, com equilíbrio e suavidade marcante.",
        images: ["/images/sabores/jabuticaba.png"],
      },
      {
        name: "Poção da Serenidade",
        subtitle: "Maracujá",
        description:
          "Vibrante e equilibrado, combina acidez fresca com doçura delicada.",
        images: ["/images/sabores/maracuja.png"],
      },
    ],
  },
]

export function PotionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageFrameRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(
    categories[0].potions[0] ?? null
  )
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobile()

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

  const category = categories[activeCategory]

  const handleCategoryChange = (i: number) => {
    setActiveCategory(i)
    setSelectedPotion(categories[i].potions[0] ?? null)
    setCurrentImageIndex(0)
  }

  const handlePotionClick = useCallback(
    (potion: Potion) => {
      const hasImages = potion.images && potion.images.length > 0
      if (!hasImages) return

      if (selectedPotion?.name === potion.name) return

      setSelectedPotion(potion)
      setCurrentImageIndex(0)

      // Scroll to the image frame
      if (imageFrameRef.current) {
        const offset = 80
        const top =
          imageFrameRef.current.getBoundingClientRect().top +
          window.scrollY -
          offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    },
    [selectedPotion, isMobile]
  )

  // Determine what to display
  const currentImages = selectedPotion?.images
  const displayImage =
    currentImages && currentImages.length > 0
      ? currentImages[currentImageIndex]
      : category.image
  const displayLabel = selectedPotion ? selectedPotion.name : category.title
  const displaySubtitle = selectedPotion
    ? selectedPotion.subtitle
    : ""
  const displayDescription = selectedPotion
    ? selectedPotion.description
    : category.description
  const hasMultipleImages = currentImages ? currentImages.length > 1 : false

  const goToPrev = () => {
    if (!currentImages) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    if (!currentImages) return
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section
      id="pocoes"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
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
            As Poções
          </p>
          <h2
            data-animate
            className="font-serif text-3xl tracking-wide text-foreground opacity-0 md:text-4xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-balance">
              Elixires nascidos da alquimia
            </span>
          </h2>
        </div>

        {/* Category tabs */}
        <div
          data-animate
          className="mb-12 flex justify-center gap-2 opacity-0 md:gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => handleCategoryChange(i)}
              className={`border px-5 py-2.5 font-serif text-xs uppercase tracking-[0.2em] transition-all duration-300 md:px-8 md:text-sm ${
                activeCategory === i
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* View full menu button */}
        <div
          data-animate
          className="mb-12 flex justify-center opacity-0"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href="https://online.fliphtml5.com/zjgcf/sclo/#p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-8 py-3 font-serif text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20"
          >
            <span>Ver cardapio completo</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>

        {/* Category content */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-12">
          {/* Image frame - fixed 2:3 ratio */}
          <div
            ref={imageFrameRef}
            className="relative aspect-[2/3] w-full shrink-0 overflow-hidden md:w-2/5"
          >
            <Image
              key={displayImage}
              src={displayImage || "/placeholder.svg"}
              alt={displayLabel}
              fill
              className="object-cover"
              quality={85}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 border border-primary/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Navigation arrows - only if multiple images */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 transition-colors duration-200 hover:text-foreground/80"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 transition-colors duration-200 hover:text-foreground/80"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </>
            )}

            {/* Label overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-2xl tracking-wide text-foreground">
                {displayLabel}
              </p>
              {displaySubtitle && (
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary/80">
                  {displaySubtitle}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {displayDescription}
              </p>
            </div>
          </div>

          {/* Potions list */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex flex-col">
              {category.potions.map((potion, i) => {
                const isSelected = selectedPotion?.name === potion.name
                const hasImages =
                  potion.images && potion.images.length > 0
                return (
                  <button
                    type="button"
                    key={potion.name}
                    onClick={() => handlePotionClick(potion)}
                    className={`group flex w-full items-baseline justify-between border-b py-5 text-left transition-colors duration-300 ${
                      isSelected
                        ? "border-primary/50 bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    } ${hasImages ? "cursor-pointer" : "cursor-default"}`}
                    style={{
                      animationDelay: `${0.4 + i * 0.05}s`,
                    }}
                  >
                    <div>
                      <h3
                        className={`font-serif text-base tracking-wide transition-colors duration-300 md:text-lg ${
                          isSelected
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {potion.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {potion.subtitle}
                      </p>
                    </div>
                    <div
                      className={`ml-4 h-px transition-all duration-300 ${
                        isSelected
                          ? "w-12 bg-primary/60"
                          : "w-8 bg-primary/20 group-hover:w-12 group-hover:bg-primary/50"
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
