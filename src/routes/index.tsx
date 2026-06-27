import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/alvora/Hero";
import { Services } from "@/components/alvora/Services";
import { Portfolio } from "@/components/alvora/Portfolio";
import { About } from "@/components/alvora/About";
import { Pricing } from "@/components/alvora/Pricing";
import { Contact } from "@/components/alvora/Contact";
import { Footer } from "@/components/alvora/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alvora — Digital excellence from Karachi" },
      {
        name: "description",
        content:
          "Alvora is a two-person studio in Karachi building Shopify stores, brand systems and social presences for ambitious labels worldwide.",
      },
      { property: "og:title", content: "Alvora — Digital excellence from Karachi" },
      {
        property: "og:description",
        content:
          "Shopify, brand and social for ambitious apparel, footwear and lifestyle labels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
