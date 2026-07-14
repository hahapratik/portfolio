const objects = [
  { size: 'h-44 w-44', position: 'left-[8%] top-[12%]', delay: '0s', duration: '13s' },
  { size: 'h-32 w-32', position: 'right-[10%] top-[26%]', delay: '2s', duration: '16s' },
  { size: 'h-52 w-52', position: 'left-[18%] bottom-[12%]', delay: '1s', duration: '18s' },
  { size: 'h-28 w-28', position: 'right-[22%] bottom-[20%]', delay: '3s', duration: '14s' },
]

export function BackgroundDepth() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {objects.map((obj) => (
        <span
          key={`${obj.position}-${obj.size}`}
          className={`depth-object ${obj.size} ${obj.position}`}
          style={{ '--depth-delay': obj.delay, '--depth-duration': obj.duration } as {
            [key: string]: string
          }}
        />
      ))}
    </div>
  )
}
