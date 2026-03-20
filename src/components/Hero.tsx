import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lottie from "lottie-react";
import codingData from "../../public/coding.json";

const Hero = () => {
  // const headlineRef = useRef(null);
  const headline = "EGZON BLLACA";
  const subText = "Modern web development.";
  const subText2 = "Clean code. Real impact.";
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
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".headline-element", {
      y: "-=20", // up
      duration: 0.8,
      ease: "power2.inOut",
    })
      .to(".headline-element", {
        x: "+=20", // right
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(".headline-element", {
        y: "+=20", // down
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(".headline-element", {
        x: "-=20", // left (back to original position)
        duration: 0.8,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen h-full text-foreground flex flex-col  justify-center  my-auto mx-auto px-4"
    >
      <div className="flex flex-col items-center ">
        <h1 className="md:text-7xl sm:text-6xl text-3xl flex gap-4  mb-3 ">
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className="headline-word font-display font-black opacity-0 blur-lg"
            >
              {word}
            </span>
          ))}
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <span className="md:text-lg text-sm sm:text-md flex gap-1 ">
            {subText.split(" ").map((word, i) => (
              <span key={i} className="headline-word opacity-0 blur-lg">
                {word}
              </span>
            ))}
          </span>
          <span className="md:text-lg text-sm sm:text-md  flex gap-1 ">
            {subText2.split(" ").map((word, i) => (
              <span key={i} className="headline-word opacity-0 blur-lg">
                {word}
              </span>
            ))}
          </span>
        </div>
        <Lottie
          className="absolute headline-element bottom-0 left-0 md:w-60 w-30"
          animationData={codingData}
        />
      </div>
    </div>
  );
};

export default Hero;
