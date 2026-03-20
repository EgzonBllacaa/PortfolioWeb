import FadeGsapSlider from "../FadeGsapSlider";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Section1 = () => {
  const title = "SkillLink - Developer Community";
  const description = `Full-stack community platform where developers and creators can share posts, comment, like, and chat in real time with personalized profiles and admin tools.

Tech Stack: React, Node.js, Express, Prisma, MySQL, Socket.IO, Tailwind CSS

Key Features: Posts, comments, likes, saved activity, real-time chat, user profiles, admin dashboard.`;
  const images = [
    "/SkillLink.png",
    "/SkillLink-2.png",
    "/SkillLink-3.png",
    "/SkillLink-4.png",
    "/SkillLink-5.png",
    "/SkillLink-6.png",
  ];

  return (
    <section className="relative h-svh w-full bg-zinc-800  overflow-hidden">
      <div className="containerDiv relative  h-full p-8  rotate-45 origin-bottom-left will-change-transform bg-[#384a5f] text-white flex flex-col md:flex-row">
        <div className="flex-1 flex">
          <div className="w-full h-full max-h-[70svh] overflow-hidden md:max-w-[80%]">
            <div className="mt-10 h-80">
              <FadeGsapSlider images={images} />
              <div className="flex gap-4 justify-center">
                <Link
                  to={"https://github.com/EgzonBllacaa/SkillLink"}
                  className="flex items-center gap-2 mt-4   w-fit border-black"
                >
                  <FaGithub size={20} />
                </Link>
                {/* Live Link is not currently hosted */}
                {/* <Link
                  to={"https://www.google.com"}
                  className="flex items-center gap-2 mt-4   w-fit border-black"
                >
                  {/* < size={30} /> */}
                {/* <TbWorld size={20} />
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-col justify-end gap-4  flex mt-12">
          <h1 className="uppercase  text-2xl md:text-4xl font-black leading-none">
            {title}
          </h1>
          <p className="text-md md:text-lg font-normal tracking-[-0.025rem] leading-tight whitespace-pre-line ">
            {description}
          </p>
          <div className="flex gap-4">
            <Link
              to={"https://github.com/egzons/egzons-portfolio"}
              className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
            >
              Code
              <FaGithub size={20} />
            </Link>

            {/* <Link
              to={"https://www.google.com"}
              className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
            >
              Live
              {/* < size={30} /> */}
            {/* <TbWorld size={20} /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
