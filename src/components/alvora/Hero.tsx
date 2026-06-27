import { useEffect, useRef } from "react";
import heroDark from "@/assets/hero-dark.jpg";
import heroLight from "@/assets/hero-light.jpg";
import { Nav } from "./Nav";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, active: false });

  useEffect(() => {
    const el = wrapRef.current;
    const reveal = revealRef.current;
    if (!el || !reveal) return;

    // Enable cursor spotlight on any hover-capable pointer device, regardless of width
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsHover) return;


    const rect = () => el.getBoundingClientRect();
    const r0 = rect();
    pos.current.x = pos.current.tx = r0.width / 2;
    pos.current.y = pos.current.ty = r0.height / 2;

    // Start hidden — fade in via CSS opacity transition when the user actually moves
    reveal.style.opacity = "0";

    let raf = 0;
    const tick = () => {
      // Slower lerp = smoother trailing motion
      pos.current.x += (pos.current.tx - pos.current.x) * 0.09;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.09;
      // Soft, generous radius with a long feather so edges never pop
      reveal.style.maskImage = `radial-gradient(circle 220px at ${pos.current.x}px ${pos.current.y}px, #000 0%, rgba(0,0,0,0.85) 35%, transparent 100%)`;
      reveal.style.webkitMaskImage = reveal.style.maskImage;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      const r = rect();
      pos.current.tx = e.clientX - r.left;
      pos.current.ty = e.clientY - r.top;
      if (!pos.current.active) {
        pos.current.active = true;
        reveal.style.opacity = "0.55";
      }
    };
    const onLeave = () => {
      pos.current.active = false;
      reveal.style.opacity = "0";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative min-h-screen w-full overflow-hidden bg-[hsl(var(--ink))] text-[hsl(var(--cream))]"
    >
      <Nav />
      {/* Base dark image with slow drift */}
      <img
        src={heroDark}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover hero-drift"
        width={1920}
        height={1280}
      />
      {/* Warm tint + vignette to balance the image with the palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--ink))]/40 via-[hsl(var(--ink))]/55 to-[hsl(var(--ink))]/85" />
      {/* Cursor-revealed cream image (desktop only, fades in/out gently) */}
      <div
        ref={revealRef}
        className="absolute inset-0 pointer-events-none opacity-0 hidden md:block"

        style={{
          maskImage: "radial-gradient(circle 0px at 50% 50%, #000, transparent)",
          transition: "opacity 700ms ease-out",
        }}
      >
        <img
          src={heroLight}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20">
        <p className="hero-anim text-xs uppercase tracking-[0.3em] text-[hsl(var(--ember))]">
          Alvora Studio
        </p>
        <h1 className="hero-anim hero-anim-2 mt-6 font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-[hsl(var(--cream))] max-w-5xl">
          Digital excellence,
          <br />
          <span className="italic font-normal text-[hsl(var(--cream))]/85">crafted with care.</span>
        </h1>
        <p className="hero-anim hero-anim-3 mt-8 max-w-xl text-base sm:text-lg text-[hsl(var(--cream))]/75 leading-relaxed">
          A studio crafting brands, websites, and digital experiences for ambitious businesses worldwide.
        </p>
        <div className="hero-anim hero-anim-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[hsl(var(--cream))] text-[hsl(var(--ink))] px-7 py-3 text-sm font-medium hover:bg-[hsl(var(--cream))]/90 transition"
          >
            Start a project
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-[hsl(var(--cream))]/30 text-[hsl(var(--cream))] px-7 py-3 text-sm font-medium hover:bg-[hsl(var(--cream))]/10 transition"
          >
            See our work
          </a>
        </div>
        <p className="hero-anim hero-anim-4 mt-16 text-xs text-[hsl(var(--cream))]/45 hidden md:block">
          Move your cursor to reveal.
        </p>

      </div>
    </section>
  );
}
