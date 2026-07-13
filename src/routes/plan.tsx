import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/planviry/SiteHeader";
import { SiteFooter } from "@/components/planviry/SiteFooter";
import {
  cityOrchestrations,
  conciergeTypes,
  occasionCategories,
  planBuckets,
} from "@/lib/plan-taxonomy";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Plan — Planviry" },
      {
        name: "description",
        content:
          "Browse the full Planviry planning marketplace: occasions, venues, vendors, and professional planners in one directory.",
      },
      { property: "og:title", content: "Plan — Planviry" },
      {
        property: "og:description",
        content: "The complete planning marketplace directory across every occasion, venue, and vendor category.",
      },
    ],
  }),
  component: PlanDirectory,
});

const popularCities = [
  "New York", "Los Angeles", "Miami", "Chicago", "Austin", "Nashville",
  "Las Vegas", "San Francisco", "Atlanta", "Boston", "Seattle", "Denver",
  "Toronto", "London", "Paris", "Barcelona", "Berlin", "Tokyo",
  "Dubai", "Sydney", "Mexico City", "Cape Town",
];

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="label-mono text-accent">{n}</span>
      <span className="rule-thin flex-1" />
      <span className="label-mono text-muted-foreground">{children}</span>
    </div>
  );
}

function PlanDirectory() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b-4 border-ink px-4 md:px-8 lg:px-12 py-20 md:py-28">
          <nav className="label-mono text-muted-foreground mb-10">
            <a href="/" className="hover:text-ink">Planviry</a>
            <span className="mx-2">/</span>
            <span className="text-ink">Plan</span>
          </nav>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
                The planning
                <br />
                <span className="text-accent italic">marketplace.</span>
              </h1>
              <p className="mt-8 text-lg max-w-2xl text-muted-foreground">
                A unified directory of every occasion, venue, vendor, and
                professional planner Planviry works with. One booking. One
                payment. One itinerary.
              </p>
            </div>
            <div className="md:col-span-4 space-y-3">
              <div className="border-2 border-ink p-5">
                <div className="label-mono text-muted-foreground">Occasions</div>
                <div className="font-display text-4xl mt-1">{occasionCategories.length}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-ink p-5">
                  <div className="label-mono text-muted-foreground">Buckets</div>
                  <div className="font-display text-4xl mt-1">{planBuckets.length}</div>
                </div>
                <div className="border-2 border-ink p-5 bg-accent text-accent-foreground">
                  <div className="label-mono">Cities</div>
                  <div className="font-display text-4xl mt-1">{popularCities.length}+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN BUCKETS */}
        <section className="px-4 md:px-8 lg:px-12 py-20">
          <SectionLabel n="01">Browse by what you need</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-3xl">
            Every category, side by side.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-ink">
            {planBuckets.map((b) => (
              <a
                key={b.slug}
                href={`/plan/${b.slug}`}
                className="group border-r border-b border-ink p-6 md:p-8 bg-paper hover:bg-paper-warm transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl">{b.title}</h3>
                  <span className="label-mono text-muted-foreground group-hover:text-accent">
                    {String(b.items.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{b.tagline}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {b.items.slice(0, 8).map((i) => (
                    <span key={i} className="text-xs text-ink/70">
                      {i}
                    </span>
                  ))}
                  {b.items.length > 8 && (
                    <span className="text-xs text-accent">
                      +{b.items.length - 8} more
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* OCCASIONS */}
        <section className="px-4 md:px-8 lg:px-12 py-20 bg-paper-warm border-y-4 border-ink">
          <SectionLabel n="02">Browse by occasion</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-3xl">
            What are you planning?
          </h2>

          <div className="space-y-12">
            {occasionCategories.map((cat) => (
              <div key={cat.slug} className="grid md:grid-cols-12 gap-8 pb-12 border-b border-ink/20 last:border-0">
                <div className="md:col-span-3">
                  <div className="label-mono text-accent mb-3">{cat.name}</div>
                  <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                  <a
                    href={`/plan/occasions/${cat.slug}`}
                    className="label-mono inline-block mt-4 border-b-2 border-ink hover:text-accent hover:border-accent"
                  >
                    Explore →
                  </a>
                </div>

                <div className="md:col-span-5">
                  <div className="label-mono text-muted-foreground mb-3">
                    Occasion types
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {cat.occasions.map((o) => (
                      <li key={o.slug}>
                        <a
                          href={`/plan/occasions/${cat.slug}/${o.slug}`}
                          className="text-sm hover:text-accent hover:underline underline-offset-4"
                        >
                          {o.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4">
                  <div className="label-mono text-muted-foreground mb-3">
                    Vendor mapping
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.mapping.map((m) => (
                      <span
                        key={m}
                        className="text-xs border border-ink/30 px-2 py-1 hover:border-ink hover:bg-paper"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONCIERGE */}
        <section className="px-4 md:px-8 lg:px-12 py-20">
          <SectionLabel n="03">Concierge</SectionLabel>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl md:text-5xl mb-6">
                Hand it to a<br />
                <span className="italic text-accent">professional.</span>
              </h2>
              <p className="text-muted-foreground max-w-md">
                Vetted planners, agents, and coordinators. Booked through the
                same Planviry cart as everything else.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-ink">
              {conciergeTypes.map((t) => (
                <a
                  key={t}
                  href={`/plan/concierge/${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="border-r border-b border-ink p-4 hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between group"
                >
                  <span className="text-sm">{t}</span>
                  <span className="label-mono opacity-60 group-hover:opacity-100">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CITY ORCHESTRATIONS */}
        <section className="px-4 md:px-8 lg:px-12 py-20 border-t-4 border-ink bg-paper-warm">
          <SectionLabel n="04">Popular in your city</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl mb-10 max-w-3xl">
            Use case × city.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Orchestration pages that query every mapped business type in one
            place — pick a plan and a city, we assemble the shortlist.
          </p>

          <div className="grid md:grid-cols-4 gap-x-8 gap-y-2">
            {cityOrchestrations.map((use) => (
              <div key={use} className="border-b border-ink/20 py-3">
                <div className="label-mono text-muted-foreground mb-2">{use} in</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {popularCities.slice(0, 6).map((c) => (
                    <a
                      key={c}
                      href={`/plan/${use.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${c.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm hover:text-accent hover:underline underline-offset-4"
                    >
                      {c}
                    </a>
                  ))}
                  <a href="#" className="text-sm text-accent">
                    +all
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 lg:px-12 py-24 border-t-4 border-ink">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
                Have a partner
                <br />
                <span className="italic">to list?</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href="/partners/list"
                className="label-mono border-2 border-ink px-5 py-4 bg-ink text-paper text-center shadow-brutal hover:bg-accent"
              >
                List your business
              </a>
              <a
                href="/partners"
                className="label-mono border-2 border-ink px-5 py-4 text-center hover:bg-paper-warm"
              >
                Partner Hub
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}