import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Scrub({ word }: { word: string }) {
  const pathRef = useRef(null);

  useGSAP(() => {
    const path: any = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      delay: 1.2,
      strokeDashoffset: 0,
      duration: 0.7,
      ease: "power2.in",
    });
  }, []); // empty deps = run once on mount

  return (
    <span className="relative flex flex-col gap-1 items-center">
      <span className="text-xl">{word}</span>

      <svg
        width="300"
        height="38"
        viewBox="0 0 685 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M683.131 25.5209C679.07 25.0151 669.384 23.9883 661.223 23.7354C657.607 23.6234 655.085 22.9768 566.795 20.6933C478.505 18.4098 304.529 14.3639 213.641 12.5325C122.753 10.7011 120.224 11.2068 117.657 11.4673C105.401 12.7112 88.0711 15.8045 78.5693 18.3562C72.8657 19.8879 68.5924 23.973 66.5464 27.0304C65.6408 28.3838 66.5234 30.0879 67.7955 31.3752C73.6588 37.3092 82.8451 36.2487 89.2206 36.5016C92.0648 36.6144 94.0788 37.2602 157.833 35.4978C221.587 33.7354 347.011 29.6894 413.394 27.3523C479.777 25.0151 483.317 24.5094 487.922 24.2488C492.527 23.9883 498.091 23.9883 501.968 23.7354C505.845 23.4826 507.868 22.9768 421.67 22.2105C335.471 21.4443 160.99 20.4328 69.5885 20.1646C-21.813 19.8964 -24.8474 20.4021 78.531 17.3753C181.909 14.3485 391.793 7.77389 490.811 4.38694C589.829 1 571.623 1 552.864 1"
          stroke="#4A90E2"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </span>
  );
}
