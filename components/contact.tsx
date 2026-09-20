"use client"

import { Instagram, Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react"
import { openWhatsApp } from "@/hooks/send-whatsapp"
import { Reveal } from "@/components/reveal"

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+54 9 11 7276 3774",
    href: "https://wa.me/5491172763774",
    description: "Lun - Sáb: 9:00 - 19:00 | Dom: 9:00 - 14:00",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@deen.detailing",
    href: "https://instagram.com/deen.detailing",
    description: "Seguinos para ver nuestros trabajos",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Av. Valentín Vergara 1470",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Valent%C3%ADn+Vergara+1470+Berazategui",
    description: "Berazategui, Buenos Aires",
  },
  {
    icon: Clock,
    title: "Horarios",
    value: "Lun - Sáb | Domingo",
    href: null,
    description: "9:00 - 19:00 | 9:00 - 14:00",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    icon: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: "https://instagram.com/deen.detailing",
    bgColor: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    hoverColor: "hover:opacity-90",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    href: "https://tiktok.com/@deen.detailing",
    bgColor: "bg-black",
    hoverColor: "hover:bg-black/80",
  },
  {
    name: "WhatsApp",
    icon: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: "https://wa.me/5491172763774",
    bgColor: "bg-[#25D366]",
    hoverColor: "hover:bg-[#128C7E]",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-28 overflow-hidden">
      {/* subtle aurora accent (palette only) */}
      <div className="aurora-blob animate-aurora bg-primary/15 w-[34rem] h-[34rem] -top-40 right-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <Reveal variant="down" as="p" className="text-primary font-medium tracking-[0.25em] uppercase mb-4 text-xs">
            Contacto
          </Reveal>
          <Reveal as="h2" delay={100} className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5 text-balance">
            Reservá tu turno
          </Reveal>
          <Reveal delay={160} className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <Reveal as="p" delay={200} className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Contactanos para agendar tu cita o resolver cualquier consulta. Estamos para ayudarte.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact panel */}
          <Reveal
            variant="left"
            className="relative flex flex-col rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-7 md:p-9 overflow-hidden"
          >
            {/* top hairline accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Primary CTA */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="shine group flex items-center justify-between gap-3 w-full rounded-xl bg-primary text-primary-foreground px-5 py-4 font-medium transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                Reservar por WhatsApp
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Respondemos a la brevedad en nuestro horario de atención.
            </p>

            {/* Info list */}
            <ul className="mt-8 divide-y divide-border/70">
              {contactInfo.map((item) => {
                const Row = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/40 text-primary transition-colors duration-300 group-hover/row:border-primary/50 group-hover/row:bg-primary/10">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-medium uppercase tracking-widest text-muted-foreground">
                        {item.title}
                      </span>
                      <span className="block truncate font-medium text-foreground">
                        {item.value}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </span>
                    </span>
                    {item.href && (
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover/row:text-primary group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5" />
                    )}
                  </>
                )
                const rowClass =
                  "group/row flex items-center gap-4 py-4 text-left w-full transition-colors"
                return (
                  <li key={item.title}>
                    {item.href ? (
                      item.title === "WhatsApp" ? (
                        <button type="button" onClick={openWhatsApp} className={rowClass}>
                          {Row}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={rowClass}
                        >
                          {Row}
                        </a>
                      )
                    ) : (
                      <div className={rowClass}>{Row}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Social Links */}
            <div className="mt-auto pt-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">Seguinos en redes</span>
                <div className="flex gap-2.5">
                  {socialLinks.map((social) =>
                    social.name === "WhatsApp" ? (
                      <button
                        key={social.name}
                        type="button"
                        onClick={openWhatsApp}
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.bgColor} ${social.hoverColor}`}
                        aria-label={social.name}
                      >
                        <social.icon />
                      </button>
                    ) : (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.bgColor} ${social.hoverColor}`}
                        aria-label={social.name}
                      >
                        <social.icon />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal
            variant="right"
            delay={150}
            className="group relative min-h-[420px] lg:min-h-0 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-background/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1638.6459876609206!2d-58.230272914359226!3d-34.77342428753269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328d4a58498f7%3A0x6baa570747e41431!2sAv.%20Valent%C3%ADn%20Vergara%201470%2C%20B1884%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1789863177562!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del taller"
              className="absolute inset-0 h-full w-full"
            />
            {/* elegant frame + floating address chip */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-primary/30" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Valent%C3%ADn+Vergara+1470+Berazategui"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Av. Valentín Vergara 1470, Berazategui
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
