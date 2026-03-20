import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextFade = ({ paragraphs }: { paragraphs: string[] }) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const paragraphs = containerRef.current.querySelectorAll(".sentence");

    // Fade paragraphs in when they enter viewport
    gsap.to(paragraphs, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "sine.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // when top of container hits 80% of viewport

        toggleActions: "play none none none",
        // markers: true,
      },
    });

    // Animate scribble under first paragraph
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
      delay: 3,
      scrollTrigger: {
        trigger: paragraphs[0],
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
    paragraphs.forEach((p, index) => {
      if ((index + 1) % 2 !== 0) {
        console.log("Index:", index);
        gsap.to(p, {
          x: 100,
          duration: 0.7,
          delay: 2,
          ease: "power1.inOut",
        });
      }
    });
    // gsap.to(paragraphs, {
    //   duration: 0.7,
    //   delay: 2,
    //   ease: "power1.inOut",
    //   x: 100,
    // });
  }, []);

  return (
    <div className="space-y-2 overflow-hidden " ref={containerRef}>
      <p className="sentence opacity-0 translate-y-10 relative inline-block text-2xl font-bold">
        This is a{" "}
        <span className="relative">
          scrubbed
          <svg
            viewBox="0 0 120 20"
            preserveAspectRatio="none"
            className="absolute left-0 bottom-1 w-full h-3 z-[-1]"
          >
            <path
              ref={pathRef}
              d="M2 10 Q20 2 40 10 T80 10 T118 8"
              stroke="#b87106"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </p>
      {paragraphs.map((p: string, i: number) => (
        <p key={i} className="sentence opacity-0 translate-y-10 text-xl">
          {p}
        </p>
      ))}
    </div>
  );
};

export default TextFade;
