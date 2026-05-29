import { useEffect, useRef } from 'react'

/**
 * Watches elements with class `.reveal` and toggles
 * `.reveal--visible` when they enter the viewport.
 * Call once at the app level after all sections mount.
 */
export function useScrollReveal(threshold = 0.15) {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observerRef.current.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold }
    )

    const targets = document.querySelectorAll('.reveal')
    targets.forEach((el) => observerRef.current.observe(el))

    return () => observerRef.current?.disconnect()
  }, [threshold])
}
