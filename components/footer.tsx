import { Reveal } from "@/components/reveal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="group flex items-center gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              DEEN<span className="text-primary group-hover:text-sheen">DETAILING</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Deen Detailing. Todos los derechos reservados.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
