import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import Section1 from "../components/sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

// ─── Constants ────────────────────────────────────────────────────────────────

gsap.registerPlugin(ScrollTrigger);

const SCROLL_ANIMATION = {
  headline: {
    from: { y: 50, opacity: 0, filter: "blur(10px)" },
    to: {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.inOut",
      filter: "blur(0px)",
    },
  },
  container: {
    scrollTrigger: {
      start: "top bottom",
      end: "top 30%",
      scrub: true,
    },
  },
  pin: {
    start: "bottom bottom",
    end: "bottom top",
  },
} as const;

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useLenisScrollTriggerSync() {
  const lenis = useLenis(); // ✅ re-runs when lenis instance is ready

  useEffect(() => {
    if (!lenis) return;

    function update(time: number) {
      lenis!.raf(time * 1000);
    }

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, [lenis]); // ✅ stable, reactive dependency
}

function useSectionScrollAnimations(
  containerRef: React.RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      const sections = document.querySelectorAll<HTMLElement>("section");

      sections.forEach((section, index) => {
        const container = section.querySelector(".containerDiv");
        const isLast = index === sections.length - 1;

        gsap.to(container, {
          rotation: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: section,
            ...SCROLL_ANIMATION.container.scrollTrigger,
          },
        });

        if (isLast) return;

        ScrollTrigger.create({
          trigger: section,
          pin: true,
          pinSpacing: false,
          ...SCROLL_ANIMATION.pin,
        });
      });
    },
    { scope: containerRef },
  );
}

function useHeadlineAnimation() {
  useGSAP(() => {
    gsap.fromTo(
      ".headline-word",
      SCROLL_ANIMATION.headline.from,
      SCROLL_ANIMATION.headline.to,
    );
  }, []);
}

// ─── Component ────────────────────────────────────────────────────────────────

const SECTIONS = [Section1, Section2, Section3, Section4, Section5] as const;

const ProjectShowcase = () => {
  const lenisRef = useRef<LenisRef | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useLenisScrollTriggerSync();

  useSectionScrollAnimations(containerRef);
  useHeadlineAnimation();

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <main id="projects" ref={containerRef}>
        {SECTIONS.map((Section, i) => (
          <Section key={i} />
        ))}
      </main>
    </>
  );
};

export default ProjectShowcase;
