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
    <div className="text-center space-y-6">
      <h2 className="text-4xl text-black font-bold mt-8">
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <div className="xl:mt-[2px] lg:mt-[1px] md:mt-[0px] mt-[1px]">
            <Logo size={logoSize} color="black" background="transparent" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold ml-3">
            Antiwork
          </h1>
        </div>
      </h2>
      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-500">
        2025 Public Annual Meeting
      </h2>
    </div>
  );
}

Slide1.backgroundColor = "bg-white";
Slide1.foregroundColor = "text-black";
