import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import FadeGsapSlider from "../FadeGsapSlider";

const Section4 = () => {
  const title = "Flicker - Social Media Platform";
  const description = `Full-stack social platform for post creation, community engagement, and personalized profiles with secure authentication and scalable architecture.

Tech Stack: React, TypeScript, Tailwind, Express, MySQL (Prisma), JWT, Vercel, Render, Railway.

Key Features: Posts, likes, comments, dynamic profiles, secure JWT authentication, responsive UI.`;
  const images = [
    "Flicker.png",
    "Flicker-2.png",
    "Flicker-3.png",
    "Flicker-4.png",
    "Flicker-5.png",
  ];
  const codeLink = "https://github.com/EgzonBllacaa/Social_Media";
  // const liveLink = "";
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="containerDiv relative w-full h-full p-8 flex flex-col   justify-center md:items-center text-center  rotate-45 origin-bottom-left will-change-transform  bg-[#8AB5AE]  text-black">
        <div className="md:w-[30%] w-full md:h-60 h-50 mb-10 md:mb-40">
          <div className="flex gap-4 justify-center mb-2">
            <Link
              to={codeLink}
              className="flex items-center gap-2 mt-4   w-fit border-black"
            >
              <FaGithub size={20} />
            </Link>

            {/* <Link
              to={liveLink}
              className="flex items-center gap-2 mt-4   w-fit border-black"
            >
              <TbWorld size={20} />
            </Link> */}
          </div>
          <FadeGsapSlider images={images} />
        </div>
        <div className="mt-12">
          <h1 className="uppercase  text-2xl md:text-4xl font-black">
            {title}
          </h1>

          <p className="text-md md:text-lg font-normal tracking-[-0.025rem] leading-tight whitespace-pre-line">
            {description}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to={codeLink}
              className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
            >
              Code
              <FaGithub size={20} />
            </Link>

            {/* <Link
              to={liveLink}
              className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
            >
              Live
              <TbWorld size={20} />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
