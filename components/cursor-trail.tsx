'use client'

import { useEffect, useRef } from 'react'

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const mouse = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    let hovering = false
    let visible = false
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!visible) {
        visible = true
        ringPos.x = mouse.x
        ringPos.y = mouse.y
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
      const target = e.target as HTMLElement
      hovering = !!target.closest('a, button, input, textarea, [role="button"]')
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    const loop = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`

      // Ring eases gently behind
      ringPos.x += (mouse.x - ringPos.x) * 0.18
      ringPos.y += (mouse.y - ringPos.y) * 0.18
      const scale = hovering ? 1.6 : 1
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%) scale(${scale})`

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    document.documentElement.classList.add('has-cursor-trail')

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('has-cursor-trail')
    }
  }, [])

  return (
    <div aria-hidden="true">
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden size-7 rounded-full border border-foreground/30 opacity-0 transition-[opacity] duration-300 md:block"
        style={{ transitionProperty: 'opacity' }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden size-1.5 rounded-full bg-foreground opacity-0 transition-opacity duration-300 md:block"
      />
    </div>
  )
}
