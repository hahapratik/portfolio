import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { GithubActivity } from '@/components/github-activity'
import { Skills } from '@/components/skills'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { CursorTrail } from '@/components/cursor-trail'
import { IntroLoader } from '@/components/intro-loader'
import { BackgroundDepth } from '@/components/background-depth'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Page() {
  return (
    <>
      <BackgroundDepth />
      <IntroLoader />
      <div className="relative z-10">
        <CursorTrail />
        <SiteHeader />
        <main>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal>
            <GithubActivity />
          </ScrollReveal>
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">~/</span>pratik — Delhi NCR, India
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Built with Next.js · Deployed on Vercel
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
