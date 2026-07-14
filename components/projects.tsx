import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Jenkins + Docker + Argo CD Pipeline',
    role: 'Full CI/CD → GitOps pipeline',
    description:
      'Building a complete pipeline from source to deployment — Jenkins for CI, Docker for containerization, and Argo CD for GitOps-style delivery onto a local Kubernetes cluster (kind/minikube).',
    tags: ['Jenkins', 'Docker', 'Argo CD', 'Kubernetes'],
    status: 'Ongoing · Personal Lab',
    link: 'https://github.com/hahapratik',
  },
  {
    title: 'Terraform Infrastructure Practice',
    role: 'Infrastructure as code',
    description:
      'Writing and iterating on Terraform configs to provision infrastructure repeatably — including working through real issues like managing large files with .gitignore and cleaning up Git cache.',
    tags: ['Terraform', 'Git'],
    status: 'Ongoing · Personal Lab',
    link: 'https://github.com/hahapratik',
  },
  {
    title: 'Graph-Greener',
    role: 'GitHub contribution graph tool',
    description:
      'Set up Graph-Greener to explore and populate a GitHub contribution graph — a small side project alongside the main DevOps lab work.',
    tags: ['Git', 'GitHub'],
    status: 'Ongoing · Personal Lab',
    link: 'https://github.com/hahapratik',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// currently building'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-card-foreground">{project.title}</h3>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 font-mono text-xs text-primary">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-6 font-mono text-xs text-muted-foreground">{project.status}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
