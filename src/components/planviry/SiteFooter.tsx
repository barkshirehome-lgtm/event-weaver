const columns = [
  {
    title: "Platform",
    links: ["Marketplace", "Plan Your Event", "Itinerary", "Unified Cart", "Search Partners", "How it Works"],
  },
  {
    title: "For Partners",
    links: ["Partner Hub", "List Your Business", "Partner Dashboard", "Marketing Tools", "Safety & Security"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Vision", "Careers", "Press Office", "Privacy Policy", "Contact"],
  },
  {
    title: "Discover",
    links: [
      "Popular Cities",
      "Popular Plan Destinations",
      "By Category",
      "By Occasion",
      "By Activity",
      "Find by Country",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-paper-warm">
      <div className="px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="label-mono mb-5 text-ink">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-accent hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-ink/20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-display text-3xl">
            Planviry<span className="text-accent">·</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-md">
            A unified global platform for planning any event, anywhere. One booking. One payment. One itinerary.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>© 2026 Planviry Platform. All rights reserved.</span>
          <a href="#" className="hover:text-ink">Legal Center</a>
          <a href="#" className="hover:text-ink">Privacy Policy</a>
          <a href="#" className="hover:text-ink">Terms of Service</a>
          <a href="#" className="hover:text-ink">Community Guidelines</a>
          <a href="#" className="hover:text-ink">AI Use Policy</a>
        </div>
      </div>
    </footer>
  );
}