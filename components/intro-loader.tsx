'use client'

import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const visibleDuration = reducedMotion ? 1200 : 3000
    const fadeDuration = 700

    const fadeTimer = window.setTimeout(() => {
      setIsFading(true)
    }, visibleDuration)

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false)
    }, visibleDuration + fadeDuration)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-background px-6 transition-opacity duration-700 ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="intro-terminal-shell w-full max-w-2xl overflow-hidden rounded-xl border border-border/70 bg-card/95">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
          </div>
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground">
            boot@portfolio:~$
          </p>
        </div>
        <div className="space-y-3 px-5 py-6 font-mono text-sm md:px-8 md:py-8 md:text-base">
          <p className="intro-line intro-line-1 text-primary">{'> starting portfolio...'}</p>
          <p className="intro-line intro-line-2 text-muted-foreground">{'> identity loaded'}</p>
          <p className="intro-line intro-line-3 flex flex-wrap items-end gap-2">
            <span className="text-muted-foreground">$ whoami</span>
            <span aria-label="Pratik Kumar Verman" className="intro-typed-name text-foreground">
              Pratik Kumar Verman
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
