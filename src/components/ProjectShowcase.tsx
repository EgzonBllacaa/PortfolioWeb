import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import Section1 from "../components/sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const lenisRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        const container = section.querySelector(".containerDiv");

        gsap.to(container, {
          rotation: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 30%",
            scrub: true,
          },
        });

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef },
  );

  useGSAP(() => {
    gsap.fromTo(
      ".headline-word",
      { y: 50, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.inOut",
        filter: "blur(0px)",
      },
    );
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <main id="projects" ref={containerRef}>
        {/* SECTION ONE */}
        <Section1 />

        {/* SECTION TWO */}
        <Section2 />

        {/* SECTION THREE */}
        <Section3 />

        {/* SECTION FOUR */}
        <Section4 />

        {/* SECTION FIVE */}
        <Section5 />
      </main>
    </>
  );
};

export default ProjectShowcase;
