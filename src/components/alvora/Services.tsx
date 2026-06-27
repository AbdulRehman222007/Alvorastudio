import { ShoppingBag, Sparkles, Instagram, Monitor } from "lucide-react";

const items = [
  {
    icon: ShoppingBag,
    title: "Web Design & Development",
    body: "Custom Shopify and WordPress websites crafted for speed,usability,and conversion—from intuitive design to robust development.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    body: "Positioning, naming, identity systems and the rules that make a brand feel inevitable.",
  },
  {
    icon: Instagram,
    title: "Social Media Handling",
    body: "Content systems, grid art-direction and campaigns that grow audience and revenue together.",
  },
  {
    icon: Monitor,
    title: "Meta Performance Ads",
    body: "Strategic Meta campaigns optimized to drive qualified leads, conversions, and measurable growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">What we do</p>
            <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
              Four disciplines, <span className="italic">one studio.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/70">
            We pair brand thinking with hands-on engineering so every output ships ready for the real world.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-neutral-950 p-8 md:p-10 hover:bg-neutral-900 transition-colors">
              <Icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-6 font-playfair text-2xl">{title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
