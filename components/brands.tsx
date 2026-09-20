import Image from "next/image"
import { Reveal } from "@/components/reveal"

const brands: { name: string; logo: string }[] = [
  { name: "Marca 1", logo: "/brands/menzerna.png" },
  { name: "Marca 2", logo: "/brands/gyeonlogo.png" },
  { name: "Marca 3", logo: "/brands/sonax2.png" },
  { name: "Marca 4", logo: "/brands/vonixx2.png" },
  { name: "Marca 5", logo: "/brands/toxic.png" },
  { name: "Marca 6", logo: "/brands/3d.png" },
]

export function Brands() {
  // duplicated once for a seamless marquee loop
  const track = [...brands, ...brands]

  return (
    <section id="marcas" className="py-20 md:py-24 border-y border-border bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal variant="down" as="p" className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
            Marcas
          </Reveal>
          <Reveal as="h2" delay={100} className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Productos que utilizamos
          </Reveal>
          <Reveal as="p" delay={200} className="text-muted-foreground text-sm md:text-base">
            Trabajamos con marcas líderes en detailing para garantizar el mejor resultado en cada
            servicio.
          </Reveal>
        </div>
      </div>

      <Reveal variant="fade" className="marquee-mask w-full">
        <ul className="marquee-track gap-6 md:gap-8" aria-label="Marcas que utilizamos">
          {track.map((brand, i) => (
            <li
              key={`${brand.name}-${i}`}
              aria-hidden={i >= brands.length}
              className="group shrink-0 w-40 md:w-48 flex items-center justify-center px-4 py-6 rounded-lg bg-card/50 border border-border/60 hover:border-primary/40 transition-colors duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
