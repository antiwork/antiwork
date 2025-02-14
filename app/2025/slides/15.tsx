import GumNew from "@/components/gum-new";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide12() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <div className="mt-12">
        <Image
          src="/2024/q4/office.png"
          alt="Office"
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
}
