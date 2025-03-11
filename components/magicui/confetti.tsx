"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactConfetti with no SSR
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

interface ConfettiProps {
  children: React.ReactNode;
  options?: {
    particleCount?: number;
    spread?: number;
    origin?: {
      x?: number;
      y?: number;
    };
    shapes?: string[];
    colors?: string[];
  };
  manualstart?: boolean;
}

export function Confetti({
  children,
  options = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  },
  manualstart = false,
}: ConfettiProps) {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleClick = useCallback(() => {
    if (!manualstart) {
      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 2000);
    }
  }, [manualstart]);

  const handleManualStart = useCallback(() => {
    if (manualstart) {
      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 2000);
    }
  }, [manualstart]);

  return (
    <div onClick={handleClick}>
      {isConfettiActive && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={options.particleCount}
          gravity={0.1}
          colors={options.colors}
        />
      )}
      <div onClick={manualstart ? handleManualStart : undefined}>
        {children}
      </div>
    </div>
  );
}
