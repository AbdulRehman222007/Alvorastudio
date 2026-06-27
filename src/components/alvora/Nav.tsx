import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-950/85 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-playfair italic text-2xl tracking-tight text-white drop-shadow">
          Alvora
        </a>
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-black/30 backdrop-blur px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-white/85 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-medium hover:bg-white/90 transition"
        >
          Get Started
        </a>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-full bg-black/40 border border-white/15 text-white p-2 backdrop-blur"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-6 mb-4 rounded-2xl border border-white/15 bg-black/80 backdrop-blur p-4 text-white">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
