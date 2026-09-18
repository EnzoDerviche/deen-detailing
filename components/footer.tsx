import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              DEEN<span className="text-primary">DETAILING</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Deen Detailing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
