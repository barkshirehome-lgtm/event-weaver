import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/plan", label: "Plan" },
  { to: "/destinations", label: "Destinations" },
  { to: "/occasions", label: "Occasions" },
  { to: "/tickets", label: "Tickets" },
];

export function SiteHeader() {
  return (
    <header className="border-b-4 border-ink bg-paper">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-5">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Planviry<span className="text-accent">·</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="label-mono hover:underline underline-offset-8"
              activeProps={{ className: "label-mono text-accent underline underline-offset-8" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/signin" className="label-mono hidden sm:inline hover:underline underline-offset-4">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="label-mono border-2 border-ink px-3 py-2 bg-ink text-paper hover:bg-accent hover:border-ink transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}