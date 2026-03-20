import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";
import FadeGsapSlider from "../Test2";

const Section5 = () => {
  const title = "Photographer Portfolio";
  const description = `
Professional showcase for wedding, portrait, and lifestyle photography focusing on authentic storytelling and a clean, high-quality visual experience.

Tech Stack: React, Tailwind CSS, Vercel, Optimized Media Delivery.

Key Features: Curated photo galleries, immersive storytelling, about section, client booking/contact form, responsive design.`;
  const images = [
    "/Riard-Portfolio.png",
    "/Riard-Portfolio-2.png",
    "/Riard-Portfolio-3.png",
    "/Riard-Portfolio-4.png",
    "/Riard-Portfolio-5.png",
    "/Riard-Portfolio-6.png",
  ];
  const codeLink = "https://github.com/EgzonBllacaa/Photographer-Website";
  const liveLink = "https://www.riardbllaca.com/";
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="containerDiv relative w-full h-full  rotate-45 origin-bottom-left will-change-transform text-zinc-300  bg-[#23452F]   flex  flex-col gap-8  items-start">
        <div className="flex-1 flex-col  justify-end w-full items-end  gap-4  flex ">
          <div className="md:w-3xl w-full px-5">
            <h1 className="uppercase  text-2xl md:text-4xl font-black leading-none ">
              {title}
            </h1>
            <p className="text-md md:text-lg font-normal tracking-[-0.025rem] leading-tight whitespace-pre-line">
              {description}
            </p>
            <div className="flex gap-4">
              <Link
                to={codeLink}
                className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
              >
                Code
                <FaGithub size={20} />
              </Link>

              <Link
                to={liveLink}
                className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
              >
                Live
                <TbWorld size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-100 w-60 h-60 md:ml-10 mb-20 mx-auto mt-12">
          <FadeGsapSlider images={images} />
          <div className="flex gap-4 justify-center">
            <Link
              to={codeLink}
              className="flex items-center gap-2 mt-4  w-fit border-black"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              to={liveLink}
              className="flex items-center gap-2 mt-4   w-fit border-black"
            >
              {/* < size={30} /> */}
              <TbWorld size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
