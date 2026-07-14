import type { CSSProperties } from 'react'

const particles = [
  { top: '6%', left: '12%', size: '8rem', delay: '0s', duration: '16s' },
  { top: '14%', left: '78%', size: '6rem', delay: '-4s', duration: '14s' },
  { top: '28%', left: '34%', size: '5rem', delay: '-9s', duration: '18s' },
  { top: '40%', left: '8%', size: '7rem', delay: '-2s', duration: '20s' },
  { top: '46%', left: '72%', size: '9rem', delay: '-10s', duration: '22s' },
  { top: '58%', left: '26%', size: '6.5rem', delay: '-6s', duration: '17s' },
  { top: '66%', left: '62%', size: '7.5rem', delay: '-12s', duration: '19s' },
  { top: '78%', left: '16%', size: '5.5rem', delay: '-8s', duration: '15s' },
  { top: '84%', left: '82%', size: '8.5rem', delay: '-14s', duration: '23s' },
]

export function ElementalBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="elemental-glow elemental-fire" />
      <div className="elemental-glow elemental-water" />
      <div className="elemental-glow elemental-earth" />
      <div className="elemental-glow elemental-air" />
      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="elemental-particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          } as CSSProperties}
        />
      ))}
    </div>
  )
}
