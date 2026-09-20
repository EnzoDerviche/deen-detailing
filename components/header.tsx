"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/hooks/send-whatsapp"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 20)
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const smoothScrollTo = (targetPosition: number, duration: number = 1200) => {
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      // Velocidad constante (sin ease): el desplazamiento es lineal en el tiempo
      window.scrollTo(0, startPosition + distance * progress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      smoothScrollTo(offsetPosition, 1200)
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-border shadow-lg shadow-background/40"
          : "bg-background/40 backdrop-blur-md border-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="group flex items-center gap-2"
          >
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:scale-105">
              DEEN
              <span className="text-primary group-hover:text-sheen">DETAILING</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="nav-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={openWhatsApp}
              className="shine bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-[1.04]"
            >
              Reservar Turno
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer animate-in fade-in slide-in-from-left-2 duration-300 fill-mode-both"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  openWhatsApp()
                  setIsOpen(false)
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Reservar Turno
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
