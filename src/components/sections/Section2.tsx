import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";
import FadeGsapSlider from "../Test2";

const Section2 = () => {
  const title = "3legant - E-commerce";
  const description = `Modern responsive e-commerce platform featuring dynamic product catalogs, a smooth shopping experience, and integrated fashion news.

Tech Stack: React, Tailwind CSS, DummyJSON API, Stripe, Vercel

Key Features: Dynamic product catalog, secure Stripe payments, blog section, fashion news & styling tips, responsive design, seamless checkou`;
  const images = [
    "/3legant.png",
    "/3legant-2.png",
    "/3legant-3.png",
    "/3legant-4.png",
    "/3legant-5.png",
    "/3legant-6.png",
    "/3legant-7.png",
    "/3legant-8.png",
  ];
  const liveLink = "https://e-commerce-three-livid-71.vercel.app/";
  const codeLink = "https://github.com/EgzonBllacaa/E-commerce";
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="containerDiv relative w-full h-full p-8  rotate-45 origin-bottom-left will-change-transform  bg-[#876463] 29564A text-white flex  flex-col md:flex-row-reverse">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full h-full max-h-[70svh] overflow-hidden md:max-w-full mx-auto">
            <div className="mt-10 md:w-175 w-full h-96 mx-auto">
              <FadeGsapSlider images={images} />
              <div className="flex gap-4 justify-center">
                <Link
                  to={codeLink}
                  className="flex items-center gap-2 mt-4   w-fit border-black"
                >
                  <FaGithub size={20} />
                </Link>

                <Link
                  to={liveLink}
                  className="flex items-center gap-2 mt-4  w-fit border-black"
                >
                  {/* < size={30} /> */}
                  <TbWorld size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-col justify-end gap-4 mt-12 flex ">
          <h1 className="uppercase  text-2xl md:text-4xl font-black leading-none">
            {title}
          </h1>
          <p className="text-md md:text-lg font-normal tracking-[-0.025rem] leading-tight whitespace-pre-line">
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

            <Link
              to={"https://e-commerce-three-livid-71.vercel.app/"}
              className="flex items-center gap-2 mt-4 border-b  w-fit border-black"
            >
              Live
              {/* < size={30} /> */}
              <TbWorld size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
