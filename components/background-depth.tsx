const objects = [
  { size: 'h-44 w-44', position: 'left-[8%] top-[12%]', delay: '0s', duration: '13s', shape: 'orb' },
  { size: 'h-32 w-32', position: 'right-[10%] top-[26%]', delay: '2s', duration: '16s', shape: 'orb' },
  { size: 'h-52 w-52', position: 'left-[18%] bottom-[12%]', delay: '1s', duration: '18s', shape: 'orb' },
  { size: 'h-28 w-28', position: 'right-[22%] bottom-[20%]', delay: '3s', duration: '14s', shape: 'orb' },
  { size: 'h-20 w-20', position: 'left-[30%] top-[20%]', delay: '0.6s', duration: '15s', shape: 'cube' },
  { size: 'h-24 w-24', position: 'right-[28%] top-[56%]', delay: '2.2s', duration: '19s', shape: 'cube' },
]

export function BackgroundDepth() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {objects.map((obj) => (
        <span
          key={`${obj.position}-${obj.size}`}
          className={`depth-object ${obj.shape === 'cube' ? 'depth-object--cube' : ''} ${obj.size} ${obj.position}`}
          style={{ '--depth-delay': obj.delay, '--depth-duration': obj.duration } as {
            [key: string]: string
          }}
        />
      ))}
    </div>
  )
}
