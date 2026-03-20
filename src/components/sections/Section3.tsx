import FadeGsapSlider from "../Test2";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Section3 = () => {
  const title = "StreamVibe - Movie Discovery";
  const description = `
Modern movie and TV discovery platform that enables users to browse trending, top-rated, and upcoming titles with fast search and seamless navigation.

Tech Stack: React, TMDB API, Tailwind CSS

Key Features: API-driven content, responsive design, dynamic filtering, and intuitive user experience.`;
  const images = [
    "StreamVibe.png",
    "StreamVibe-2.png",
    "StreamVibe-3.png",
    "StreamVibe-4.png",
    "StreamVibe-5.png",
    "StreamVibe-6.png",
    "StreamVibe-7.png",
  ];
  const codeLink = "https://github.com/EgzonBllacaa/StreamVibe";
  const liveLink = "https://stream-vibe-black.vercel.app/";
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="containerDiv relative w-full h-full p-8 flex rotate-45 origin-bottom-left will-change-transform  bg-[#9BA672]  text-black flex-col md:flex-row">
        <div className="flex-1 flex-col justify-center gap-4  flex ">
          <h1 className="uppercase text-2xl md:text-4xl font-black leading-none">
            {title}
          </h1>
          <p className="text-md md:text-lg font-normal tracking-[-0.025rem] leading-tight whitespace-pre-line">
            {description}
          </p>
          <div className="flex gap-4 z-50 mb-20">
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
              {/* < size={30} /> */}
              <TbWorld size={20} />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-100 h-full max-h-96 ">
            <FadeGsapSlider images={images} />
            <div className="flex gap-4 mb-20 justify-center">
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
      </div>
    </section>
  );
};

export default Section3;
