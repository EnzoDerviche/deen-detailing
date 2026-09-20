"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade"

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  delay?: number
  variant?: RevealVariant
  as?: React.ElementType
  once?: boolean
}

// ponytail: IntersectionObserver + CSS instead of framer-motion; add a lib only if we need spring physics
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  once = true,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-reveal={variant}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn("reveal", className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
