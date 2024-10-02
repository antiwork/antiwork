"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";

export function Page() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "to pay your people in equity and dividends",
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "to see what sticks",
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "to answer support tickets",
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "to moderate user content",
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "to write tests",
    },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen font-sans transition-colors duration-300"
      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <header className="mb-8">
          <div className="flex items-center mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size={32} color="currentColor" background="transparent" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl font-bold ml-3"
            >
              Antiwork
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            We build products for fun and profit.
          </motion.p>
        </header>

        <main>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-8"
          >
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Stats
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-t border-gray-300 dark:border-gray-700 pt-2"
              >
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Annual revenue
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-t border-gray-300 dark:border-gray-700 pt-2"
              >
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  2023 net income
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="border-t border-gray-300 dark:border-gray-700 pt-2"
              >
                <p className="text-xl font-bold">30</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  People
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mb-8"
          >
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {alphabet.map((letter, index) => {
                const product = products.find((product) =>
                  product.name.startsWith(letter)
                );
                return (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 + index * 0.05 }}
                    className="border-t border-gray-300 dark:border-gray-700 pt-2"
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <h3
                      className={`text-sm font-bold ${
                        !product ? "text-gray-400 dark:text-gray-600" : ""
                      }`}
                    >
                      {product ? product.name : letter}
                    </h3>
                    <AnimatePresence>
                      {hoveredProduct === letter && product && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            {product.description}
                          </p>
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-black dark:text-white hover:underline"
                            aria-label={`Learn more about ${product.name}`}
                          >
                            Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </main>
      </motion.div>
    </motion.div>
  );
}
