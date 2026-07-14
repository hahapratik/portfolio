import { ArrowUpRight } from 'lucide-react'

const certificates = [
  {
    title: 'DevOps Certificate',
    issuer: 'LinkedIn',
    link: 'https://linkedin.com/in/pratikkumarverman',
  },
  {
    title: 'Cloud & Infrastructure Certificate',
    issuer: 'LinkedIn',
    link: 'https://linkedin.com/in/pratikkumarverman',
  },
  {
    title: 'CI/CD Certificate',
    issuer: 'LinkedIn',
    link: 'https://linkedin.com/in/pratikkumarverman',
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// certifications'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Certificates
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A few highlights from LinkedIn. Open each card to view details on my LinkedIn profile.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {certificates.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-sm text-card-foreground">{certificate.title}</h3>
                <ArrowUpRight
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                Issued via {certificate.issuer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
