import { ReactNode } from "react";
import { useTheme } from "next-themes";

interface SlideProps {
  id: number;
  backgroundColor?: string;
  foregroundColor?: string;
  children: ReactNode;
  currentSlide?: number;
}

export function Slide({
  id,
  backgroundColor = "bg-white dark:bg-gray-900",
  foregroundColor = "text-black dark:text-white",
  currentSlide = 1,
  children,
}: SlideProps) {
  return (
    <div
      id={`slide-${id}`}
      className={`flex h-full w-full items-center justify-center ${backgroundColor} ${foregroundColor} transition-colors duration-300 ${
        currentSlide === id ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}
