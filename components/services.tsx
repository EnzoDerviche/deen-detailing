"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Droplets,
  Sparkles,
  Car,
  Cog,
  Tag,
  Shield,
  Gem,
  Sun,
  Lightbulb,
  Sofa,
  SprayCan,
  Wind,
  Disc3,
  ChevronDown,
  Check,
} from "lucide-react"
import { openWhatsApp } from "@/hooks/send-whatsapp"
import { Reveal } from "@/components/reveal"

interface Price {
  label?: string
  value: string
}

interface Service {
  id: string
  icon: React.ElementType
  title: string
  description: string
  prices: Price[]
  duration: string
  steps?: string[]
}

const services: Service[] = [
  {
    id: "lavado-comun",
    icon: Droplets,
    title: "Lavado Común",
    description: "Lavado exterior completo con productos nacionales",
    prices: [
      { label: "Moto", value: "$15.000" },
      { label: "Auto", value: "$20.000" },
      { label: "Camioneta", value: "$30.000" },
    ],
    duration: "1 hora",
    steps: [
      "Pre-lavado con espuma activa",
      "Lavado manual con guante de microfibra",
      "Enjuague a presión",
      "Secado con paños de microfibra",
      "Limpieza de vidrios exterior",
      "Aspirado de interior",
      "Acondicionamiento de superficies",
    ],
  },
  {
    id: "lavado-premium",
    icon: Sparkles,
    title: "Lavado Premium",
    description: "Lavado completo con productos premium internacionales",
    prices: [
      { label: "Moto", value: "$25.000" },
      { label: "Auto", value: "$40.000" },
      { label: "Camioneta", value: "$55.000" },
    ],
    duration: "2 a 3 horas",
    steps: [
      "Limpieza de llantas y neumáticos con descontaminación química al detalle",
      "Pre-lavado con espuma activa",
      "Lavado de dos baldes",
      "Lavado manual con guantes de microfibra",
      "Secado con aire y microfibra",
      "Aplicación de cera rápida",
      "Limpieza de vidrios interior y exterior",
      "Aspirado de interior",
      "Limpieza de superficies internas",
      "Acondicionamiento de superficies",
    ],
  },
  {
    id: "limpieza-interiores",
    icon: Car,
    title: "Limpieza de Interiores",
    description: "Limpieza profunda del interior para un ambiente impecable y fresco.",
    prices: [{ value: "$100.000" }],
    duration: "3-4 horas",
    steps: [
      "Desarme completo de butacas",
      "Limpieza y descontaminacion completa de tapizados",
      "Aspirado completo de alfombras con aspiradora de alta presión",
      "Uso de maquina de vapor para limpieza profunda",
      "Limpieza de plásticos y detalles de interior con productos especializados",
      "Tratamiento de cueros (si aplica)",
      "Desodorización del habitáculo",
      "Acondicionamiento de superficies internas con protección contra rayos UV",
      "Limpieza de vidrios interiores",
    ],
  },
  {
    id: "acondicionamiento-motor",
    icon: Cog,
    title: "Acondicionamiento de Motor",
    description: "Desengrase y acondicionamiento del compartimiento del motor con vapor.",
    prices: [{ value: "$55.000" }],
    duration: "2 horas",
    steps: [
      "Protección de componentes eléctricos",
      "Aplicación de desengrasante especializado",
      "Cepillado de superficies",
      "Enjuague controlado con maquina de vapor",
      "Secado con aire comprimido",
      "Aplicación de protector para plásticos",
    ],
  },
  {
    id: "preparacion-preventa",
    icon: Tag,
    title: "Preparación Preventa",
    description: "Dejamos tu vehículo impecable para conseguir el mejor precio de venta.",
    prices: [
      { label: "Moto", value: "$100.000" },
      { label: "Auto", value: "$250.000" },
      { label: "Camioneta", value: "$350.000" },
    ],
    duration: "6-8 horas",
    steps: [
      "Lavado premium completo",
      "Limpieza completa de interior",
      "Descontaminación completa de carroceria",
      "Pulido de carrocería en 1 paso (Abrillantado)",
      "Limpieza de motor",
      "Acondicionamiento de plásticos exteriores",
      "Fotografías profesionales",
    ],
  },
  {
    id: "tratamiento-acrilico",
    icon: Shield,
    title: "Tratamiento Acrílico",
    description: "Protección duradera con sellador acrílico de alta resistencia.",
    prices: [
      { label: "Moto", value: "$150.000" },
      { label: "Auto", value: "$250.000" },
      { label: "Camioneta", value: "$320.000" },
    ],
    duration: "1-2 dias",
    steps: [
      "Lavado premium completo",
      'Limpieza basica de interior',
      "Preparacion y descontaminacion completa de carroceria",
      "Enmascarado de zonas sensibles",
      "Pulido completo en 2 pasos",
      "Aplicación de sellador acrílico",
      "Protección con duración de 6 meses",
    ],
  },
  {
    id: "tratamiento-ceramico",
    icon: Gem,
    title: "Tratamiento Cerámico",
    description: "La máxima protección para tu pintura con recubrimiento cerámico profesional.",
    prices: [
      { label: "Moto", value: "$200.000" },
      { label: "Auto", value: "$420.000" },
      { label: "Camioneta", value: "$520.000" },
    ],
    duration: "1-2 días",
    steps: [
      "Lavado premium completo",
      'Limpieza basica de interior',
      "Preparacion y descontaminacion completa de carroceria",
      "Enmascarado de zonas sensibles",
      "Pulido completo en 3 pasos",
      "Aplicación de sellador ceramico",
      "Protección con duración de 2 años",
    ],
  },
  {
    id: "abrillantado",
    icon: Sun,
    title: "Abrillantado",
    description: "Restauración del brillo original de la pintura mediante pulido profesional.",
    prices: [
      { label: "Moto", value: "$70.000" },
      { label: "Auto", value: "$150.000" },
      { label: "Camioneta", value: "$200.000" },
    ],
    duration: "6-8 horas",
    steps: [
      "Lavado basico completo",
      'Limpieza basica de interior',
      "Inspección de pintura con luz LED",
      "Enmascarado de zonas sensibles",
      "Pulido en 1 paso",
      "Aplicación de cera de protección",
    ],
  },
  {
    id: "restauracion-opticas",
    icon: Lightbulb,
    title: "Restauración de ópticas",
    description:
      "Recuperamos transparencia y brillo en faros opacos o amarillentos, mejorando visibilidad y estética.",
    prices: [{ value: "$45.000" }],
    duration: "1-2 horas",
    steps: [
      "Enmascarado de zonas sensibles",
      "Limpieza y desengrase de la superficie del policarbonato",
      "Lijado en progresión para eliminar oxidación y micro-rayas",
      "Aplicacion de polimero liquido para restaurar la transparencia",
      "Acabado uniforme en ambas ópticas",
      "De 1 a 2 años de proteccion contra rayos UV",
    ],
  },
  {
    id: "limpieza-tapizados",
    icon: Sofa,
    title: "Limpieza de Tapizados",
    description: "Limpieza profunda y descontaminación de tapizados.",
    prices: [{ value: "$65.000" }],
    duration: "1-2 horas",
  },
  {
    id: "pulido-cristales",
    icon: SprayCan,
    title: "Pulido de Cristales",
    description: "Elimina micro-rayas y adherencias del parabrisas y vidrios.",
    prices: [{ value: "$50.000" }],
    duration: "1.5 horas",
  },
  {
    id: "antiempanante-parabrisas",
    icon: Wind,
    title: "Antiempañante Parabrisas",
    description: "Tratamiento antiempañante para mejor visibilidad.",
    prices: [{ value: "$10.000" }],
    duration: "30 min",
  },
  {
    id: "pasarruedas-llantas",
    icon: Disc3,
    title: "Pasarruedas y Llantas",
    description: "Limpieza y acondicionamiento con desarme.",
    prices: [
      { label: "Auto", value: "$15.000" },
      { label: "Camioneta", value: "$25.000" },
    ],
    duration: "1.5 horas",
  },
]

function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const single = service.prices.length === 1 && !service.prices[0].label

  return (
    <Card className="group card-lift relative overflow-hidden bg-card border-border h-full">
      {/* gradient glow that fades in on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/[0.07] to-transparent" />
      <CardHeader className="pb-2 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                {service.title}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">{service.duration}</p>
            </div>
          </div>
          {single && (
            <div className="text-right">
              <span className="text-xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 inline-block">
                {service.prices[0].value}
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

        {!single && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {service.prices.map((p) => (
              <div
                key={p.label}
                className="rounded-lg border border-border bg-secondary/40 px-2 py-1.5 text-center transition-colors duration-300 group-hover:border-primary/40"
              >
                <span className="block text-[0.6rem] font-medium uppercase tracking-widest text-muted-foreground">
                  {p.label}
                </span>
                <span className="block text-sm font-bold text-primary leading-tight">
                  {p.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {service.steps && service.steps.length > 0 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between text-muted-foreground hover:text-foreground"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span>Ver proceso paso a paso</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </Button>

            {/* grid-rows trick for a smooth expand/collapse */}
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-border">
                  <ul className="space-y-2">
                    {service.steps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                        style={{ transitionDelay: `${index * 40}ms` }}
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

const sections = [
  {
    id: "lavados",
    title: "Lavados y tratamientos",
    icon: Droplets,
    ids: [
      "lavado-comun",
      "lavado-premium",
      "abrillantado",
      "tratamiento-acrilico",
      "tratamiento-ceramico",
      "preparacion-preventa",
    ],
  },
  {
    id: "interiores",
    title: "Interiores",
    icon: Car,
    ids: ["limpieza-interiores", "limpieza-tapizados"],
  },
  {
    id: "extras",
    title: "Extras",
    icon: Sparkles,
    ids: [
      "pulido-cristales",
      "restauracion-opticas",
      "antiempanante-parabrisas",
      "acondicionamiento-motor",
      "pasarruedas-llantas",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Reveal variant="down" as="p" className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
            Nuestros Servicios
          </Reveal>
          <Reveal as="h2" delay={100} className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Cuidado profesional para tu vehículo
          </Reveal>
          <Reveal as="p" delay={200} className="text-muted-foreground max-w-2xl mx-auto">
            Seleccioná el servicio que mejor se adapte a las necesidades de tu auto.
            Hacé clic en cada uno para ver el proceso detallado.
          </Reveal>
        </div>

        <div className="space-y-14">
          {sections.map((section) => {
            const items = section.ids
              .map((id) => services.find((s) => s.id === id))
              .filter((s): s is Service => Boolean(s))
            return (
              <div key={section.id}>
                {/* Section header */}
                <Reveal className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <section.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((service, i) => (
                    <Reveal key={service.id} variant="up" delay={(i % 4) * 90} className="h-full">
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿No encontrás lo que buscás? Contactanos para un presupuesto personalizado.
          </p>
          <Button
            type="button"
            onClick={openWhatsApp}
            className="shine bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-[1.04]"
          >
            Consultar por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
