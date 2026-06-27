import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Let's talk",
    desc: "For new brands launching their first storefront or identity.",
    features: ["Brand identity essentials","Custom Shopify or WordPress website","Premium custom theme included Up to 6 pages or product listings","Mobile-optimized & responsive","Basic hosting & domain setup (optional)","Delivered in 2–3 weeks"],
  },
  {
    name: "Growth",
    price: "Let's talk",
    desc: "Our most popular package for established brands pursuing sustainable growth.",
    features: ["Complete brand identity","Custom Shopify or WordPress website","Meta ads setup & launch campaign","Instagram content strategy & art direction","Basic SEO & analytics setup","4–6 weeks delivery"],
    featured: true,
  },
  {
    name: "Bespoke",
    price: "Let's talk",
    desc: "Custom engagements, retainers and ongoing partnerships.",
    features: ["Scoped to your goals", "Dedicated team", "Strategy + execution", "Quarterly roadmap"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f3efe8] text-neutral-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Engagements</p>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
            Simple, <span className="italic">scoped</span> pricing.
          </h2>
          <p className="mt-4 text-neutral-600">
            Every project is quoted, but here's where most engagements land.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 flex flex-col ${
                t.featured
                  ? "bg-neutral-950 text-white border border-neutral-950"
                  : "bg-white text-neutral-900 border border-neutral-200"
              }`}
            >
              <h3 className="font-playfair text-2xl">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-white/60" : "text-neutral-500"}`}>{t.desc}</p>
              <p className="mt-6 font-playfair text-4xl italic">{t.price}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
                  t.featured
                    ? "bg-white text-neutral-900 hover:bg-white/90"
                    : "bg-neutral-950 text-white hover:bg-neutral-800"
                }`}
              >
                Start with {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
