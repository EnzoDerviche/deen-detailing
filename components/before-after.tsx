"use client"

import { useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

interface BeforeAfterProps {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
}

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Antes",
  afterAlt = "Después",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)

  const update = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  return (
    <div
      ref={ref}
      onPointerMove={(e) => update(e.clientX)}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border select-none cursor-ew-resize touch-none shadow-xl shadow-background/40"
    >
      {/* Después (base) */}
      <img
        src={after}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute bottom-3 right-3 z-10 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
        Después
      </span>

      {/* Antes (recortado por el slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          Antes
        </span>
      </div>

      {/* Línea + manija */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-primary/90 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background/60 transition-transform duration-300 group-hover:scale-110">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
