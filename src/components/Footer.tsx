import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import successAnimation from "../../public/success.json";
import Lottie from "lottie-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".trigger",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".trigger",

          start: "top bottom",
          end: "top top",
          // scrub: true,
        },
      },
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    if (!form.email || !form.message) {
      setError("Email and message are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Invalid email address");
      return false;
    }

    if (form.message.length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowSuccess(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    console.log(form);
  };
  return (
    <div
      id="contact"
      className="flex relative flex-col gap-10 pt-30 items-center bg-zinc-800 w-full pb-15 px-4"
    >
      <div className="text-center trigger flex flex-col gap-2">
        <h3 className="text-4xl text-white font-medium">Contact Me</h3>
        <p className="w-80 text-white font-medium ">
          Let’s create something impactful.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-125 ">
        <div className="placeholder:text-zinc-400 text-white w-full flex flex-col items-center gap-4">
          <div className="flex gap-4  justify-center w-full trigger">
            <input
              name="firstName"
              type="text"
              onChange={handleChange}
              value={form.firstName}
              placeholder="First name"
              className="py-4 px-4 rounded-md border border-zinc-700 focus:border focus:outline-none  focus:border-accent w-full "
            />
            <input
              name="lastName"
              type="text"
              onChange={handleChange}
              value={form.lastName}
              placeholder="Last name"
              className="py-4 px-4 rounded-md border border-zinc-700 focus:border focus:outline-none  focus:border-accent w-full"
            />
          </div>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            className="py-4 px-4 rounded-md border border-zinc-700 focus:border focus:outline-none  focus:border-accent w-full trigger"
          />
          <textarea
            name="message"
            rows={12}
            onChange={handleChange}
            value={form.message}
            placeholder="Your message here"
            className="py-4 px-4 rounded-md border border-zinc-700 focus:border focus:outline-none  focus:border-accent w-full trigger"
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="bg-accent  w-full py-4 rounded-md cursor-pointer trigger"
          >
            Send
          </button>
        </div>
      </form>
      {showSuccess && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie
            className="w-60"
            animationData={successAnimation}
            loop={false}
            onComplete={() => setShowSuccess(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Footer;
