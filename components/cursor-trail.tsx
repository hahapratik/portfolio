'use client'

import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 14

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const canvas = canvasRef.current
    if (!dot || !ring || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    const trail: { x: number; y: number }[] = []
    let hovering = false
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const target = e.target as HTMLElement
      hovering = !!target.closest('a, button, input, textarea, [role="button"]')
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`

      // Ring eases toward the mouse
      ringPos.x += (mouse.x - ringPos.x) * 0.16
      ringPos.y += (mouse.y - ringPos.y) * 0.16
      const scale = hovering ? 1.8 : 1
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%) scale(${scale})`
      ring.style.opacity = hovering ? '0.9' : '0.5'

      // Trail
      trail.push({ x: mouse.x, y: mouse.y })
      if (trail.length > TRAIL_LENGTH) trail.shift()

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)
      for (let i = 1; i < trail.length; i++) {
        const alpha = (i / trail.length) * 0.35
        ctx.strokeStyle = `rgba(57, 211, 83, ${alpha})`
        ctx.lineWidth = (i / trail.length) * 2.5
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y)
        ctx.lineTo(trail[i].x, trail[i].y)
        ctx.stroke()
      }
      ctx.restore()

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    document.documentElement.classList.add('has-cursor-trail')

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      document.documentElement.classList.remove('has-cursor-trail')
    }
  }, [])

  return (
    <div aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden size-8 rounded-full border border-primary/60 transition-opacity duration-200 md:block"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden size-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(57,211,83,0.5)] md:block"
      />
    </div>
  )
}
