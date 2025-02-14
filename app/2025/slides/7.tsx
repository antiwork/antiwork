import React from "react";
import Link from "next/link";

export default function Slide7() {
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [showMake, setShowMake] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsStrikethrough(true);
      setShowMake(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <Link href="/">
        <h1 className="text-[12rem] font-bold tracking-tighter text-gray-900 dark:text-white hover:opacity-80">
          {showMake && "make "}<span className={isStrikethrough ? "line-through" : ""}>Work</span> play
        </h1>
      </Link>
    </div>
  );
}
