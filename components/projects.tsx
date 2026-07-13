import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Multi-Region Kubernetes Platform',
    description:
      'Designed and operated a multi-region EKS platform serving 40+ microservices with automated failover, achieving 99.99% availability.',
    tags: ['Kubernetes', 'AWS', 'Terraform', 'ArgoCD'],
    metrics: [
      { label: 'Deploy frequency', value: '50/day' },
      { label: 'MTTR', value: '< 15 min' },
    ],
  },
  {
    title: 'CI/CD Pipeline Overhaul',
    description:
      'Rebuilt a legacy Jenkins setup into GitHub Actions with reusable workflows, cutting average build times from 45 to 8 minutes.',
    tags: ['GitHub Actions', 'Docker', 'Bash', 'SonarQube'],
    metrics: [
      { label: 'Build time', value: '-82%' },
      { label: 'Failed deploys', value: '-60%' },
    ],
  },
  {
    title: 'Infrastructure as Code Migration',
    description:
      'Migrated hand-provisioned cloud resources across 12 environments into Terraform modules with drift detection and policy checks.',
    tags: ['Terraform', 'OPA', 'GCP', 'Atlantis'],
    metrics: [
      { label: 'Envs codified', value: '12' },
      { label: 'Provision time', value: 'hrs → min' },
    ],
  },
  {
    title: 'Observability Stack',
    description:
      'Rolled out a unified observability stack with metrics, logs, and traces — plus SLO-based alerting that cut pager noise in half.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry'],
    metrics: [
      { label: 'Alert noise', value: '-50%' },
      { label: 'Trace coverage', value: '95%' },
    ],
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// selected work'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-card-foreground">{project.title}</h3>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <dl className="mt-6 flex gap-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-0.5">
                    <dt className="order-2 font-mono text-xs text-muted-foreground">
                      {metric.label}
                    </dt>
                    <dd className="order-1 font-mono text-sm text-primary">{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
