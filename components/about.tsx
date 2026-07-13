const paragraphs = [
  "Hey, I'm Pratik — an Aspiring DevOps Engineer based out of Delhi NCR, India. I like getting under the hood of infrastructure and automation, and right now that means building out a full local DevOps lab: CI/CD pipelines with Jenkins and Docker, infrastructure provisioning with Terraform, and GitOps-style deployments with Argo CD on Kubernetes.",
  "I learn best by rebuilding real-world setups end-to-end rather than just reading about them — getting a pipeline to actually run, debugging why containers won't talk to each other, or figuring out why Terraform state has drifted. I run Arch Linux with Fish shell day to day, so I'm comfortable living in the terminal and reaching for the CLI first.",
  "Right now I'm focused on wiring up a complete Jenkins → Docker → Argo CD pipeline on a local Kubernetes cluster, and going deeper into GitOps workflows from there. Always tinkering with something new in the lab — take a look at the projects to see what I've been building.",
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <p className="font-mono text-xs text-primary">{'// whoami'}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            About
          </h2>
          <div className="mt-8 flex flex-col gap-2 font-mono text-xs text-muted-foreground">
            <p>
              <span className="text-primary">edu:</span>{' '}
              BCA, MDU Rohtak (2024–2027)
            </p>
            <p>
              <span className="text-primary">loc:</span> Delhi NCR, India
            </p>
            <p>
              <span className="text-primary">env:</span> Arch Linux + Fish shell
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="text-pretty leading-relaxed text-muted-foreground">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
