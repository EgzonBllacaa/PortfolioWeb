import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function FadeGsapSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef<HTMLImageElement[]>([]);

  // Animate fade
  const animateSlide = (from: number, to: number) => {
    const currentSlide = slidesRef.current[from];
    const nextSlide = slidesRef.current[to];

    gsap.set(nextSlide, { opacity: 0, display: "block" });
    gsap.to(currentSlide, { opacity: 0, duration: 0.5 });
    gsap.to(nextSlide, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.set(currentSlide, { display: "none" });
      },
    });
  };

  const nextSlide = () => {
    const next = current === images.length - 1 ? 0 : current + 1;
    animateSlide(current, next);
    setCurrent(next);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden ">
      {/* Slides */}
      {images.map((img, index) => (
        <img
          key={index}
          ref={(el) => {
            if (!el) return;
            slidesRef.current[index] = el;
          }}
          src={img}
          alt={`slide ${index}`}
          className={`absolute  rounded-xl transition-all duration-300 ease-in-out top-0 left-0 h-full object-cover  w-full  ${index === 0 ? "block" : "hidden"}`}
        />
      ))}
      {/* Pagination Bullets */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${current === idx ? "bg-accent" : "bg-black/50"}`}
            onClick={() => {
              if (idx !== current) {
                animateSlide(current, idx);
                setCurrent(idx);
              }
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
