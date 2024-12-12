import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Slide } from "@/components/Slide";

interface SlideDeckProps {
  slides: React.ReactElement[];
}

export function SlideDeck({ slides }: SlideDeckProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [typedNumber, setTypedNumber] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const totalSlides = slides.length;

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" && currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" && currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (/^[0-9]$/.test(e.key)) {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      const newTypedNumber = typedNumber + e.key;
      setTypedNumber(newTypedNumber);
      const timeout = setTimeout(() => {
        const slideNumber = parseInt(newTypedNumber);
        if (slideNumber > 0 && slideNumber <= totalSlides) {
          setCurrentSlide(slideNumber);
        }
        setTypedNumber("");
      }, 750);

      setTypingTimeout(timeout);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }

    if (isRightSwipe && currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }

    setTouchEnd(null);
    setTouchStart(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [currentSlide, typedNumber, typingTimeout]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="h-screen w-screen">
        <Slide
          id={currentSlide}
          currentSlide={currentSlide}
          backgroundColor={slides[currentSlide - 1].props.backgroundColor}
        >
          {slides[currentSlide - 1]}
        </Slide>
      </div>
      <div
        className={`py-1 px-2 rounded fixed bottom-2 right-2 text-sm flex items-center gap-1 ${
          typedNumber
            ? "bg-black text-white opacity-100"
            : "bg-white text-black opacity-50"
        }`}
      >
        {typedNumber ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Jumping to {typedNumber}</span>
          </>
        ) : (
          `${currentSlide} / ${totalSlides}`
        )}
      </div>
    </div>
  );
}
