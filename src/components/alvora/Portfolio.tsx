import { ArrowUpRight, Instagram } from "lucide-react";
import swrvDesktop from "@/assets/work-swrv-desktop.png";
import championDesktop from "@/assets/work-champion-desktop.png";
import swrvMobile from "@/assets/work-swrv-mobile.png";
import championMobile from "@/assets/work-champion-mobile.png";
import swrvIgDesktop from "@/assets/swrv-ig-desktop.png";
import swrvIgMobile from "@/assets/swrv-ig-mobile.png";

const projects = [
  {
    name: "SWRV Attire",
    tag: "Fashion · E-commerce · Brand",
    blurb: "A streetwear label elevated through thoughtful branding and a modern Wordpress experience.",
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

const socialStats = [
  { label: "Avg. Engagement", value: "8.2%" },
  { label: "Monthly Reach", value: "85K+" },
];

function DeviceMockup({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[5/4] bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
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

        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Social Media</p>
              <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight">
                Content we <span className="italic">grew.</span>
              </h2>
            </div>
            <p className="max-w-md text-neutral-600">
              End-to-end social media management — strategy, content creation, and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <a
              href="https://instagram.com/swrv.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-8 group block rounded-3xl overflow-hidden bg-white border border-neutral-200/80 hover:border-neutral-300 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <DeviceMockup desktop={swrvIgDesktop} mobile={swrvIgMobile} alt="SWRV Instagram" />
              <div className="p-8 flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Instagram Management</p>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs text-neutral-600 font-medium">
                      <Instagram className="h-3 w-3" />
                      @swrv.pk
                    </span>
                  </div>
                  <h3 className="mt-3 font-playfair text-3xl">SWRV Attire Social</h3>
                  <p className="mt-3 text-neutral-600 max-w-lg">
                    Complete social media management for SWRV Attire — from content strategy and visual direction to daily posting and community engagement. Built a cohesive brand voice that resonates with the streetwear audience.
                  </p>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-neutral-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {socialStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 rounded-3xl bg-white border border-neutral-200/80 p-8 flex flex-col justify-center hover:border-neutral-300 transition-all"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
                  <p className="mt-2 font-playfair text-4xl md:text-5xl text-neutral-900">{stat.value}</p>
                </div>
              ))}

              <a
                href="https://instagram.com/swrv.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-neutral-900 text-white p-8 flex flex-col justify-center hover:bg-neutral-800 transition-colors"
              >
                <Instagram className="h-8 w-8 mb-4 text-neutral-400 group-hover:text-white transition-colors" />
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">View the feed</p>
                <p className="mt-2 font-playfair text-2xl">@swrv.pk</p>
                <ArrowUpRight className="h-5 w-5 mt-4 text-neutral-500 group-hover:text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
