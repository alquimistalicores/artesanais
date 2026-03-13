import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <a href="#" className="relative block h-8 w-36">
          <Image
            src="/images/logo.png"
            alt="Alquimista Licores"
            fill
            className="object-contain"
          />
        </a>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Licores artesanais inspirados na alquimia medieval. Produzidos em
          pequenos lotes com ingredientes selecionados e garrafas recicladas.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/c/554891737692"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            WhatsApp
          </a>
          <span className="text-border">|</span>
          <a
            href="https://instagram.com/alquimista.licores"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            Instagram
          </a>
          <span className="text-border">|</span>
          <a
            href="https://online.fliphtml5.com/zjgcf/sclo/#p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            {'Card\u00e1pio Completo'}
          </a>
          <span className="text-border">|</span>
          <a
            href="#historia"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            {'Hist\u00f3ria'}
          </a>
        </div>
        <div className="h-px w-16 bg-border/30" />
        <p className="text-[11px] tracking-wider text-muted-foreground/50">
          {'Alquimista Licores \u00A9 2026. Todos os direitos reservados.'}
        </p>
      </div>
    </footer>
  )
}
