import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import animationData from "../../public/animation.json";
import Lottie from "lottie-react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const boxRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  const headline = "About Me";
  const subTextArray = [
    "I’m a full-stack developer specializing in React and JavaScript, focused on building modern, scalable, and high-performance web applications. I work across both frontend and backend, designing intuitive user interfaces while developing reliable server-side systems and APIs.",
    "My stack includes React, TypeScript, Node.js, Express, MySQL, and NoSQL databases, along with strong experience using Git for version control and collaborative development. I focus on writing clean, maintainable code, structuring applications with clear architecture, and ensuring seamless communication between the client and server.",
    "I enjoy building complete end-to-end solutions—from dynamic front-end experiences to secure APIs, database design, and scalable backend logic. 🚀",
  ];
  // const subText = `I’m a full-stack developer with a focus on React and JavaScript,
  //               passionate about building interactive and user-friendly web
  //               applications. When I’m not coding, I enjoy the gym, traveling,
  //               and discovering new movies and music. I love creating clean,
  //               efficient solutions that make a real impact.`;

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0.6 },
      {
        scale: 1,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      },
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#word",
      { y: 50, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 0.6,
        ease: "power3.out",
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: "#word",
          start: "top bottom",
          end: "top bottom",
          // scrub: true,
        },
      },
    );
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const paragraph =
      containerRef.current.querySelector<HTMLDivElement>(".animatedText");

    const splits: SplitType[] = [];
    const timelines: gsap.core.Timeline[] = [];

    if (!paragraph) return;
    const split = new SplitType(paragraph, { types: "lines,words,chars" });
    splits.push(split);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: "80% bottom",
        end: "130% bottom",
        scrub: true,
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });
    gsap.set(split.chars, {
      color: "#616161",
      filter: "blur(2px)",
    });
    tl.to(split.chars, { color: "#fff", filter: "blur(0px)", stagger: 0.006 });
    timelines.push(tl);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      splits.forEach((split) => split.revert());
      timelines.forEach((tl) => tl.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-zinc-800"></div>
      <section
        id="aboutMe"
        ref={(el: HTMLDivElement) => {
          sectionRef.current = el;
          containerRef.current = el;
        }}
        // ref={containerRef}
        className="flex items-center  justify-center bg-zinc-800 text-foreground overflow-hidden min-h-screen px-4"
      >
        <div
          ref={boxRef}
          className="relative w-[92vw] md:h-200 h-300  rounded-4xl  bg-background  overflow-hidden"
        >
          <div className="absolute inset-0 flex flex-col lg:flex-row w-full h-full items-center lg:gap-56 gap-4 p-4">
            <Lottie
              className="w-full md:w-1/3 "
              animationData={animationData}
              loop={true}
              autoplay={true}
            />

            <div className="flex flex-col whitespace-pre-line  animatedText items-center justify-center gap-4 lg:w-1/2 w-full  h-auto mb-4">
              <div>
                <h2 id="word" className="text-5xl font-display font-black mb-4">
                  {headline}
                </h2>
                {/* <div className="flex flex-col gap-4 mb-10"> */}
                {subTextArray.map((text, index) => (
                  <div className="mb-5" key={index}>
                    {text}
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
