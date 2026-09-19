"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

type RevealProps = {
  as?: ElementType
  /** Задержка в мс, 0–300 */
  delay?: number
  className?: string
  children?: ReactNode
}

/**
 * Плавное появление: fade + сдвиг 16px, один раз.
 * Без JS и при prefers-reduced-motion контент виден сразу: скрытие (data-reveal)
 * ставится только на клиенте и только элементам ниже экрана.
 */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (typeof IntersectionObserver === "undefined") return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    el.setAttribute("data-reveal", "hidden")
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        el.style.transitionDelay = `${Math.min(300, Math.max(0, delay))}ms`
        el.setAttribute("data-reveal", "shown")
        observer.disconnect()
      },
      { rootMargin: "0px 0px -8% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const Tag = as
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
