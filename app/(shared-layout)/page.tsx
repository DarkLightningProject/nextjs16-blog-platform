import Link from "next/link";
import { Sparkles, PenTool, MessageSquare, Search, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const featureCards = [
  {
    icon: PenTool,
    title: "Create smarter content",
    description: "Publish engaging blog articles with a clean writing workflow and rich media support.",
  },
  {
    icon: MessageSquare,
    title: "Build community",
    description: "Enable comments and real-time interaction so readers can join the conversation.",
  },
  {
    icon: Search,
    title: "Find everything fast",
    description: "Search posts instantly and keep readers engaged with discoverable content.",
  },
];

const steps = [
  { title: "Write", description: "Draft compelling stories and insights with a simple authoring flow." },
  { title: "Publish", description: "Share your content in seconds with modern post management tools." },
  { title: "Grow", description: "Use comments, search, and presence features to build a loyal audience." },
];

export default function Home() {
  return (
    <div className="pb-20 text-foreground">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(35,197,94,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_35%)]" />

        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                Content that converts
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Turn ideas into a thriving blog brand.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Create, publish, and grow your content with a polished platform built for modern creators,
                founders, and teams.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/blog" className={buttonVariants({ size: "lg" })}>
                  Explore blog
                </Link>
                <Link href="/create" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Write a post
                </Link>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="rounded-[28px] border border-border bg-card p-4 shadow-2xl shadow-primary/10">
                <div className="rounded-[22px] border border-border bg-gradient-to-br from-primary/15 via-background to-secondary/20 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-2.5 rounded-full bg-emerald-500" />
                      <div className="size-2.5 rounded-full bg-yellow-500" />
                      <div className="size-2.5 rounded-full bg-red-500" />
                    </div>
                    <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      Live dashboard
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-border bg-background/80 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Featured article</span>
                        <span className="text-xs font-medium text-primary">Published</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold">Why modern teams still need a clear content strategy</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Learn how consistent publishing builds trust, awareness, and demand.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-background/80 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <Zap className="size-4" />
                          <span className="text-sm font-medium">Fast publishing</span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">Ship updates without slowing down your workflow.</p>
                      </div>

                      <div className="rounded-2xl border border-border bg-background/80 p-4">
                        <div className="flex items-center gap-2 text-primary">
                          <ShieldCheck className="size-4" />
                          <span className="text-sm font-medium">Built for trust</span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">Secure author access and a clean content experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why creators choose us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything needed to grow a better blog.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-[32px] border border-border bg-card/80 p-8 shadow-sm md:p-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A simple path from draft to audience.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-border bg-background/80 p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 pt-4 md:px-6">
        <div className="rounded-[30px] border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-secondary/20 p-8 text-center shadow-sm md:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to publish your next big idea?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Launch your content engine and turn attention into action with a blog experience built for momentum.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/create" className={buttonVariants({ size: "lg" })}>
              Create your first post
            </Link>
            <Link href="/blog" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View latest articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
