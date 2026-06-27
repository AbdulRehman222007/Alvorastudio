import { ArrowUpRight } from "lucide-react";
import swrvDesktop from "@/assets/work-swrv-desktop.png";
import championDesktop from "@/assets/work-champion-desktop.png";
import swrvMobile from "@/assets/work-swrv-mobile.png";
import championMobile from "@/assets/work-champion-mobile.png";

const projects = [
  {
    name: "SWRV Attire",
    tag: "Fashion · E-commerce · Brand",
    blurb:"A streetwear label elevated through thoughtful branding and a modern Wordpress experience.",
    desktop: swrvDesktop,
    mobile: swrvMobile,
    href: "https://swrvattire.com",
  },
  {
    name: "Champion Shoes",
    tag: "Footwear · Digital Commerce", 
    blurb: "A refined footwear brand with a high-performing Shopify experience designed to drive engagement and sales.",
    desktop: championDesktop,
    mobile: championMobile,
    href: "https://championshoes.pk",
  },
];

function DeviceMockup({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[5/4] bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
      {/* Desktop frame */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
        <div className="relative w-[88%] rounded-xl overflow-hidden border border-neutral-300 shadow-2xl bg-white">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-100 border-b border-neutral-200">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>
          <img
            src={desktop}
            alt={`${alt} desktop`}
            loading="lazy"
            className="block w-full h-auto object-cover object-top max-h-[420px]"
          />
        </div>
      </div>
      {/* Phone frame */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-[26%] max-w-[140px] aspect-[9/19] rounded-[1.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden">
        <img
          src={mobile}
          alt={`${alt} mobile`}
          loading="lazy"
          className="block w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f3efe8] text-neutral-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Selected work</p>
            <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
              Brands we've <span className="italic">built with.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-600">
            Two recent launches — both shipped end-to-end from brand to storefront.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden bg-white border border-neutral-200/80 hover:border-neutral-300 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <DeviceMockup desktop={p.desktop} mobile={p.mobile} alt={p.name} />
              <div className="p-8 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{p.tag}</p>
                  <h3 className="mt-3 font-playfair text-3xl">{p.name}</h3>
                  <p className="mt-3 text-neutral-600 max-w-md">{p.blurb}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-neutral-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
