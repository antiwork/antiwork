import { ReactNode } from "react";

interface SlideProps {
  id: number;
  backgroundColor?: string;
  children: ReactNode;
  currentSlide?: number;
}

export function Slide({ 
  id, 
  backgroundColor = "bg-white",
  currentSlide = 1,
  children 
}: SlideProps) {
  return (
    <div
      id={`slide-${id}`}
      className={`h-screen w-screen flex items-center justify-center ${backgroundColor} ${currentSlide === id ? 'block' : 'hidden'}`}
    >
      {children}
    </div>
  );
}