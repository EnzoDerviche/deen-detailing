import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Brands } from "@/components/brands"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: "Deen Detailing",
    description:
      "Estudio de detailing automotriz en Berazategui, Buenos Aires. Lavado premium, limpieza de interiores, abrillantado, tratamiento acrílico y cerámico.",
    url: siteUrl,
    telephone: "+54 9 11 7276-3774",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Valentín Vergara 1470",
      addressLocality: "Berazategui",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: ["Berazategui", "Hudson", "Ranelagh", "Quilmes", "Buenos Aires"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://instagram.com/deen.detailing",
      "https://tiktok.com/@deen.detailing",
      "https://wa.me/5491172763774",
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <Hero />
      <Services />
      <Results />
      <Brands />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
