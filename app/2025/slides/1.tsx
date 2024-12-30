import { Logo } from "@/app/components/Logo";
import { useState, useEffect } from "react";

export default function Slide1() {
  const [logoSize, setLogoSize] = useState(32);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1280) {
        setLogoSize(64);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(36);
      } else if (window.innerWidth >= 640) {
        setLogoSize(30);
      } else {
        setLogoSize(24);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  return (
    <div className="space-y-6 text-center">
      <h2 className="mt-8 text-4xl font-bold text-black dark:text-white">
        <div className="mb-4 flex items-center justify-center md:mb-0">
          <div className="mt-[1px] md:mt-[0px] lg:mt-[1px] xl:mt-[2px]">
            <Logo
              size={logoSize}
              color="currentColor"
              background="transparent"
            />
          </div>
          <h1 className="ml-3 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-6xl">
            Anti-Work
          </h1>
        </div>
      </h2>
      <h2 className="text-xl text-gray-500 sm:text-2xl lg:text-3xl xl:text-4xl dark:text-gray-400">
        2025 Public Annual Meeting
      </h2>
    </div>
  );
}
