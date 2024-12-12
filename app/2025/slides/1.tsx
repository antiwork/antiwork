import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { motion } from "framer-motion";
import { Slide } from "@/components/Slide";

export default function Slide1() {
  return (
    <Slide id={1}>
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <div>
            <Link href="/">
              <Logo size={500} color="black" background="transparent" />
            </Link>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl text-black font-bold mt-8"
        >
          2025 Public Annual Meeting
        </motion.h2>
      </div>
    </Slide>
  );
}
