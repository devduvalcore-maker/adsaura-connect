import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

// Helper component for easier usage
interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'slide-up'
  delay?: number
  duration?: number
}

export function ScrollAnimationWrapper({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 600
}: ScrollAnimationWrapperProps) {
  const { elementRef, isVisible } = useScrollAnimation()
  
  const animationClass = isVisible ? `animate-${animation}` : `animate-${animation}-hidden`
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}
  const durationStyle = { animationDuration: `${duration}ms` }

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{ ...delayStyle, ...durationStyle }}
    >
      {children}
    </div>
  )
}