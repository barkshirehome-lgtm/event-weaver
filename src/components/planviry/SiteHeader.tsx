const nav = [
  { href: "/plan", label: "Plan" },
  { href: "/destinations", label: "Destinations" },
  { href: "/occasions", label: "Occasions" },
  { href: "/tickets", label: "Tickets" },
];

export function SiteHeader() {
  return (
    <header className="border-b-4 border-ink bg-paper">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-5">
        <a href="/" className="font-display text-2xl tracking-tight">
          Planviry<span className="text-accent">·</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="label-mono hover:underline underline-offset-8"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/signin" className="label-mono hidden sm:inline hover:underline underline-offset-4">
            Sign in
          </a>
          <a
            href="/signup"
            className="label-mono border-2 border-ink px-3 py-2 bg-ink text-paper hover:bg-accent hover:border-ink transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}