"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Sparkles, Shield, Clock, ChevronDown } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Brillo Perfecto",
    description: "Resultados impecables",
  },
  {
    icon: Shield,
    title: "Protección Total",
    description: "Cuidado profesional",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo",
  },
]

export function Hero() {
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

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      smoothScrollTo(offsetPosition, 1200)
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2831&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Animated aurora blobs (palette only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob animate-aurora bg-primary/25 w-[38rem] h-[38rem] -top-40 -left-32" />
        <div
          className="aurora-blob animate-aurora bg-foreground/10 w-[30rem] h-[30rem] top-1/3 -right-24"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="aurora-blob animate-aurora bg-primary/15 w-[26rem] h-[26rem] -bottom-32 left-1/4"
          style={{ animationDelay: "-15s" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal variant="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-primary font-medium tracking-widest uppercase mb-6 text-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Cuidado Automotriz Premium
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight text-balance">
              <span className="text-foreground">Tu vehículo merece</span>
              <br />
              <span className="text-sheen">el mejor cuidado</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos servicios de detailing profesional para mantener tu auto impecable.
              Desde lavados hasta tratamientos cerámicos de alta gama.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("#servicios")}
                className="shine bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 transition-transform duration-300 hover:scale-[1.03]"
              >
                Ver Servicios
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contacto")}
                className="border-border text-foreground hover:bg-secondary hover:border-primary/50 text-base px-8 transition-all duration-300 hover:scale-[1.03]"
              >
                Contactar
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              variant="up"
              delay={480 + i * 130}
              className="group card-lift flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
            >
              <div className="mb-3 p-3 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <feature.icon className="h-7 w-7 text-primary transition-colors" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        aria-label="Desplazar a servicios"
        onClick={() => scrollToSection("#servicios")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="h-6 w-6 animate-bob" />
      </button>
    </section>
  )
}
