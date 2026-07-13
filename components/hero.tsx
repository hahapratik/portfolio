export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
      <p className="mb-6 font-mono text-sm text-primary">
        {'> _ deploying reliable infrastructure'}
      </p>
      <h1 className="text-balance text-5xl font-medium leading-tight tracking-tight text-foreground md:text-7xl">
        Alex Carter
      </h1>
      <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
        DevOps Engineer
        <br />
        Automating cloud infrastructure, building CI/CD pipelines,
        <br className="hidden md:block" />
        {' and keeping production running at scale.'}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
        >
          Get in touch
        </a>
      </div>
      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {[
          { value: '99.99%', label: 'Uptime maintained' },
          { value: '200+', label: 'Pipelines built' },
          { value: '40+', label: 'Clusters managed' },
          { value: '6 yrs', label: 'In production' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-background p-6">
            <dt className="order-2 font-mono text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 text-2xl font-medium text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
