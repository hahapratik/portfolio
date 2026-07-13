export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <p className="font-mono text-xs text-primary">{'// whoami'}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            About
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I&apos;m a DevOps engineer who cares about the boring things that make software
            reliable: reproducible infrastructure, fast feedback loops, and alerts that only fire
            when something is actually wrong.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Over the last six years I&apos;ve helped teams move from hand-managed servers to fully
            codified platforms — designing Kubernetes clusters, rebuilding CI/CD pipelines, and
            rolling out observability stacks that give engineers confidence to ship daily.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            My philosophy is simple: automate everything twice-done, measure what matters, and
            treat infrastructure like the product it is.
          </p>
        </div>
      </div>
    </section>
  )
}
