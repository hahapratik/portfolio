export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="terminal-shell overflow-hidden rounded-xl border border-border/70 bg-card/90 shadow-[0_18px_60px_-40px_rgba(255,255,255,0.55)]">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/35" />
          </div>
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground">
            pratik@portfolio:~$
          </p>
        </div>
        <div className="space-y-3 px-5 py-6 font-mono text-sm md:px-8 md:py-10 md:text-base">
          <p className="terminal-line terminal-line-1 text-primary">
            {'> init --profile "devops"'}
          </p>
          <p className="terminal-line terminal-line-2 text-muted-foreground">
            {'> loading personal portfolio...'}
          </p>
          <div className="terminal-line terminal-line-3 flex flex-wrap items-end gap-2">
            <span className="text-muted-foreground">$ whoami</span>
            <h1
              aria-label="Pratik Kumar Verman"
              className="terminal-name text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl"
            >
              Pratik Kumar Verman
            </h1>
          </div>
          <p className="terminal-line terminal-line-4 max-w-2xl leading-relaxed text-muted-foreground">
            Aspiring DevOps Engineer · CI/CD with Jenkins &amp; Docker · Terraform
            infrastructure · GitOps deployments with Argo CD on Kubernetes.
          </p>
        </div>
      </div>
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
          { value: 'Delhi NCR', label: 'Based in India' },
          { value: 'Arch Linux', label: 'Daily driver + Fish shell' },
          { value: 'GitOps', label: 'Current focus' },
          { value: 'BCA \u201927', label: 'MDU, Rohtak' },
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
