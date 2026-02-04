import GumNew from "@/components/gum-new";
import { motion } from "framer-motion";

export default function Slide12() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <motion.h1
        initial={{ scale: 0.1 }}
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
      >
        <a href="https://gum.new" className="hover:opacity-80">
          <GumNew />
        </a>
      </motion.h1>
    </div>
  );
}
