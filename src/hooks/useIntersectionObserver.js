import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for Intersection Observer to lazy load content
 * @param {Object} options - Intersection Observer options
 * @returns {[React.RefObject, boolean]} - ref and isIntersecting state
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          setHasIntersected(true)
          // Optional: disconnect after first intersection for performance
          if (options.disconnectAfterIntersect) {
            observer.disconnect()
          }
        } else {
          setIsIntersecting(false)
        }
      },
      {
        rootMargin: options.rootMargin || '50px', // Start loading 50px before visible
        threshold: options.threshold || 0.1,
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options.rootMargin, options.threshold, options.disconnectAfterIntersect])

  return [elementRef, isIntersecting, hasIntersected]
}

