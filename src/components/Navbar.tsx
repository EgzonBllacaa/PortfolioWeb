import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "./ui/avatar"; // Adjust paths
import FixedWidth from "../components/FixedWidth"; // Adjust paths

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Hide/Show logic
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false);
          setMenuOpen(false); // Close mobile menu if user scrolls down
        } else {
          setShow(true);
        }

        // Background logic
        setIsScrolled(window.scrollY > 50);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Projects", to: "/#projects" },
    { name: "About me", to: "/#aboutMe" },
    { name: "Contact", to: "/#contact" },
  ];

  // --- Desktop Layout ---
  const desktopNavbar = (
    <div className="hidden lg:block w-full">
      <FixedWidth>
        <div className="flex justify-between items-center px-5">
          {/* Brand & Socials */}
          <div className="flex flex-row gap-4 bg-[hsla(0,0%,100%,.55)] backdrop-blur-md px-6 py-2 rounded-md shadow-sm">
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="/profile_test.jpg" alt="EB" />
                <AvatarFallback>EB</AvatarFallback>
                <AvatarBadge className="bg-green-600" />
              </Avatar>
              <HashLink
                smooth
                to="/#hero"
                className="font-bold text-zinc-900 hover:text-black"
              >
                Egzon Bllaca
              </HashLink>
            </div>
            <div className="flex gap-1 items-center bg-[#2c3b44] rounded-md px-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-white hover:text-[#7fcce4]"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-white hover:text-[#7fcce4]"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center bg-[hsla(0,0%,100%,.55)] backdrop-blur-md gap-6 px-8 py-4 rounded-md shadow-sm">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="font-medium text-zinc-800 hover:text-black hover:underline underline-offset-8 transition-all"
              >
                <HashLink smooth to={link.to}>
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </FixedWidth>
    </div>
  );

  // --- Mobile Layout ---
  const mobileNavbar = (
    <div className="lg:hidden w-full px-4">
      <div className="flex flex-col gap-3">
        {/* Top Header */}
        <div className="flex justify-between items-center bg-[hsla(0,0%,100%,.55)] backdrop-blur-md px-4 py-2 rounded-md shadow-md">
          <div className="flex gap-3 items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/profile_test.jpg" />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
            <span className="font-bold text-zinc-900">Egzon Bllaca</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-[#2c3b44] text-white rounded-md cursor-pointer active:bg-[#1a2b34]"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`
          flex flex-col bg-[hsla(0,0%,100%,.55)] backdrop-blur-lg rounded-md overflow-hidden transition-all duration-300 shadow-xl
          ${menuOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0"}
        `}
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg font-semibold text-zinc-800 border-b border-white/20 last:border-0"
            >
              {link.name}
            </HashLink>
          ))}
          <div className="flex gap-6 px-6 pt-4 mt-2  border-white/30">
            <FaLinkedin className="text-[#2c3b44] text-2xl" />
            <FaGithub className="text-[#2c3b44] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 pt-4 transition-all duration-500
      ${show ? "translate-y-0" : "-translate-y-full"}
      ${isScrolled ? "scale-95" : "scale-100"}
    `}
    >
      {desktopNavbar}
      {mobileNavbar}
    </nav>
  );
};

export default Navbar;
