"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; 
import { Logo } from "@/app/components/Logo";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Page } from "@/components/page";
import { Slide } from "./Slide";

export default function QuarterlyAllHands() {
  const slides = [
    {
      id: 1,
      backgroundColor: undefined,
      content: (
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Logo
              size={50}
              color="black"
              background="transparent"
            />
            <span className="text-5xl font-bold tracking-tight">
              Antiwork
            </span>
          </div>
          <h2 className="text-2xl text-gray-500 font-normal">
            Transforming Work and Compensation
          </h2>
        </div>
      )
    },
    {
      id: 2,
      backgroundColor: "bg-black",
      content: (
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Logo size={500} color="white" background="transparent" />
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      backgroundColor: "bg-white",
      content: (
        <Image
          src="/app/2024/q4/nomeetings.png"
          alt="No meetings"
          width={563}
          height={762}
          className="p-8 h-full object-contain"
        />
      )
    },
    {
      id: 4,
      backgroundColor: "bg-white", 
      content: (
        <Image
          src="/app/2024/q4/godmode.png"
          alt="God mode"
          width={626}
          height={750}
          className="p-8 h-full object-contain"
        />
      )
    },
    {
      id: 5,
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg
            width="1266"
            height="217"
            viewBox="0 0 1266 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="1.58578" y1="214.909" x2="214.909" y2="1.58582"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            />
            <motion.line
              x1="214.909" y1="4.41431" x2="422.586" y2="212.091"
              stroke="black" 
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.line 
              x1="422.586" y1="214.909" x2="635.909" y2="1.58582"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.line
              x1="635.909" y1="4.41431" x2="843.586" y2="212.091"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
            />
            <motion.line
              x1="843.586" y1="214.909" x2="1056.91" y2="1.58582" 
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.line
              x1="1056.91" y1="4.41431" x2="1264.59" y2="212.091"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.svg>
        </div>
      )
    },
    {
      id: 6,
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg width="1666" height="829" viewBox="0 0 1666 829" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              y1="-2" x2="427.913" y2="-2" 
              transform="matrix(0.96515 -0.261698 0.344722 0.938705 2 828.323)"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            />
            <motion.line
              x1="414.164" y1="714.801" x2="837.164" y2="520.183"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.line
              y1="-2" x2="493.905" y2="-2"
              transform="matrix(0.848341 -0.52945 0.645543 0.763724 838 521.562)"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.line
              x1="1245.94" y1="263.801" x2="1664.94" y2="2.30333"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
            />
          </motion.svg>
        </div>
      )
    },
    {
      id: 7,
      backgroundColor: "bg-blue-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Q4 Financial Review</h1>
          <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Revenue</h2>
              <p className="text-blue-700 text-xl">$24.5M</p>
              <p className="text-blue-600">+15% YoY</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Operating Margin</h2>
              <p className="text-blue-700 text-xl">28%</p>
              <p className="text-blue-600">+3% YoY</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      backgroundColor: "bg-emerald-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-emerald-900 mb-12">Strategic Initiatives</h1>
          <ul className="space-y-6 text-xl text-emerald-800">
            <li className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-emerald-500 mr-4"></div>
              Market Expansion into APAC Region
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-emerald-500 mr-4"></div>
              Launch of New Product Line
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-emerald-500 mr-4"></div>
              Digital Transformation Initiative
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 9,
      backgroundColor: "bg-purple-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">Team Updates</h1>
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Engineering</h2>
              <p className="text-purple-700">3 New Hires</p>
              <p className="text-purple-600">2 Promotions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Sales</h2>
              <p className="text-purple-700">5 New Hires</p>
              <p className="text-purple-600">1 Promotion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Marketing</h2>
              <p className="text-purple-700">2 New Hires</p>
              <p className="text-purple-600">3 Promotions</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      backgroundColor: "bg-amber-50", 
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Product Roadmap</h1>
          <div className="flex w-full max-w-4xl justify-between">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-amber-200 flex items-center justify-center mb-4">
                <span className="text-amber-800 font-bold">Q1</span>
              </div>
              <p className="text-amber-800">Beta Launch</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-amber-300 flex items-center justify-center mb-4">
                <span className="text-amber-800 font-bold">Q2</span>
              </div>
              <p className="text-amber-800">Market Testing</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                <span className="text-amber-800 font-bold">Q3</span>
              </div>
              <p className="text-amber-800">Full Release</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      backgroundColor: "bg-white",
      content: (
        <div className="scale-50">
          <div className="scale-50">
            <Page />
          </div>
        </div>
      )
    },
    {
      id: 12,
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">What's next?</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Gumroad</h2>
          <ul className="space-y-4 text-xl text-gray-700">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              COSS to collect 3.5% fee above $1MM+
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              Open sourcing Gumroad on Ruby on Rails and Gumroad on Next on TypeScript
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              Advertising and other products while we subsidize private AI with trading data
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              Securities for OSS contributors
            </li>
          </ul>
        </div>
      )
    }
  ];

  const searchParams = useSearchParams();
  const initialSlide = searchParams.get('slide') ? parseInt(searchParams.get('slide')!) : 1;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [typedNumber, setTypedNumber] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('slide', currentSlide.toString());
    window.history.replaceState({}, '', url);
  }, [currentSlide]);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    }
  }, [currentSlide, typedNumber, typingTimeout]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="h-full w-full"
        >
          <Slide id={currentSlide} currentSlide={currentSlide} backgroundColor={slides[currentSlide - 1].backgroundColor}>
            {slides[currentSlide - 1].content}
          </Slide>
        </motion.div>
      </AnimatePresence>

      <div className={`py-1 px-2 rounded fixed bottom-2 right-2 text-sm flex items-center gap-1 ${typedNumber ? 'bg-black text-white opacity-100' : 'bg-white text-black opacity-50'}`}>
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
