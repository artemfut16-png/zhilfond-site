"use client"

import { useEffect, useState, type RefObject } from "react"

/**
 * Прогресс прокрутки элемента: 0 — верх элемента у верха окна (или ниже),
 * 1 — элемент полностью ушёл вверх. Значение 0 до гидрации.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const next = height > 0 ? Math.min(1, Math.max(0, -top / height)) : 0
      setProgress((prev) => (Math.abs(prev - next) < 0.001 ? prev : next))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [ref])

  return progress
}
