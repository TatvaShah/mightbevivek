"use client";

import { useEffect } from "react";

// GSAP ScrollTrigger plus Lenis, loaded after the page is idle. Content is fully visible without
// JavaScript. prefers-reduced-motion: nothing animates (no smooth scroll, reveals, ticker or stamps).
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => root.toggleAttribute("data-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.setAttribute("data-reduce-motion", "");
      return () => window.removeEventListener("scroll", onScroll);
    }

    let cancelled = false;
    let dispose = () => {};
    const start = async () => {
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const [{ gsap }, { ScrollTrigger }, lenisMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        fine ? import("lenis") : Promise.resolve(null),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      let lenis: import("lenis").default | null = null;
      let tick: ((t: number) => void) | null = null;
      if (lenisMod) {
        lenis = new lenisMod.default({ lerp: 0.09, smoothWheel: true, anchors: { offset: -72 } });
        lenis.on("scroll", ScrollTrigger.update);
        tick = (t: number) => lenis!.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        root.classList.add("lenis");
      }

      const below = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.92;
      const ctx = gsap.context(() => {
        // Headlines: words set like type, one slug at a time.
        document.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
          if (el.dataset.split || !below(el)) return;
          el.dataset.split = "1";
          const words = (el.textContent ?? "").trim().split(/\s+/);
          el.setAttribute("aria-label", el.textContent ?? "");
          el.innerHTML = words.map((w) => `<span class="w" aria-hidden="true"><span>${w}</span></span>`).join(" ");
          const inner = el.querySelectorAll(".w > span");
          gsap.from(inner, {
            yPercent: 110,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.045,
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        // Rules draw across the page.
        gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((el) => {
          if (!below(el)) return;
          gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: el, start: "top 90%" } });
        });

        // Rubber stamps thud in.
        gsap.utils.toArray<HTMLElement>("[data-stamp]").filter(below).forEach((el) =>
          gsap.from(el, {
            scale: 2.6,
            opacity: 0,
            rotate: "-=18",
            duration: 0.55,
            ease: "back.out(2.2)",
            delay: 0.25,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }),
        );

        // Photos: ink press reveal.
        gsap.utils.toArray<HTMLElement>("[data-reveal-img]").forEach((el) => {
          if (!below(el)) return;
          gsap.from(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
        });

        // Rows and cards: staggered entrances.
        ScrollTrigger.batch("[data-row], [data-card]", {
          start: "top 90%",
          onEnter: (els) =>
            gsap.from(els.filter((e) => !(e as HTMLElement).dataset.seen), {
              y: 36,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              onStart() {
                els.forEach((e) => ((e as HTMLElement).dataset.seen = "1"));
              },
            }),
        });

        // Hero photo parallax (desktop only).
        if (window.matchMedia("(min-width: 900px)").matches) {
          gsap.to(".front-photo .halftone img", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: ".front-photo", start: "top top", end: "bottom top", scrub: true },
          });
        }

      });

      // Magnetic primary CTAs.
      const mags = fine ? Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]")) : [];
      const handlers = mags.map((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 });
        };
        const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });

      dispose = () => {
        handlers.forEach((h) => h());
        ctx.revert();
        if (tick) gsap.ticker.remove(tick);
        lenis?.destroy();
        root.classList.remove("lenis");
      };
    };

    const kick = () => void start();
    const idle = (cb: () => void) =>
      typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(cb, { timeout: 1500 }) : setTimeout(cb, 300);
    if (document.readyState === "complete") idle(kick);
    else window.addEventListener("load", () => idle(kick), { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      dispose();
    };
  }, []);
  return null;
}
