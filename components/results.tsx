"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BeforeAfter } from "@/components/before-after"

// ponytail: reemplazá cada par por fotos reales en /public (ej: "/antes-1.jpg", "/despues-1.jpg")
const pairs = [
  { before: "/1.jpeg", after: "/2.jpeg" },
  { before: "/3.jpeg", after: "/4.jpeg" },
  { before: "/5.jpeg", after: "/6.jpeg" },
]

const INTERVAL = 5000

export function Results() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || pairs.length < 2) return
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return
    const id = setInterval(() => setIndex((i) => (i + 1) % pairs.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const go = (dir: number) => setIndex((i) => (i + dir + pairs.length) % pairs.length)

  return (
    <section id="resultados" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal variant="down" as="p" className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
            Resultados
          </Reveal>
          <Reveal as="h2" delay={100} className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Pasar por Deen es antes y un después
          </Reveal>
        </div>

        <Reveal variant="scale" className="max-w-md mx-auto">
          <div
            className="relative"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            {/* fade entre pares al remontar por key */}
            <div key={index} className="animate-in fade-in duration-700">
              <BeforeAfter before={pairs[index].before} after={pairs[index].after} />
            </div>

            {pairs.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm border border-border transition-all hover:bg-background hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm border border-border transition-all hover:bg-background hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {pairs.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2.5">
              {pairs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ver comparación ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
