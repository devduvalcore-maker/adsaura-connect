import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation variants
const animations = {
  'fade-up': {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }
}

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: keyof typeof animations
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollAnimationWrapper({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  once = true
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once,
    amount: 0.1
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

// Hook for custom animations
export function useScrollAnimation(options: { once?: boolean, amount?: number } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: options.once ?? true,
    amount: options.amount ?? 0.1
  })
  
  return { ref, isInView }
}