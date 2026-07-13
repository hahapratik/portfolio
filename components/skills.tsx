import { Cloud, GitBranch, Container, Activity, ShieldCheck, Terminal } from 'lucide-react'

const skills = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    items: ['AWS', 'GCP', 'Terraform', 'Pulumi'],
  },
  {
    icon: Container,
    title: 'Containers & Orchestration',
    items: ['Kubernetes', 'Docker', 'Helm', 'EKS / GKE'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & GitOps',
    items: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Atlantis'],
  },
  {
    icon: Activity,
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    items: ['OPA', 'Vault', 'Trivy', 'IAM hardening'],
  },
  {
    icon: Terminal,
    title: 'Scripting & Automation',
    items: ['Bash', 'Python', 'Go', 'Ansible'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// toolchain'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Skills
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="flex flex-col gap-4 bg-background p-6">
              <skill.icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-sm font-medium text-foreground">{skill.title}</h3>
              <ul className="flex flex-col gap-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
