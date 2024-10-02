"use client";

import { ArrowUpRight, Shuffle, ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react";
import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function PageContent() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [editingLetter, setEditingLetter] = useState<string | null>(null);
  const [newProductName, setNewProductName] = useState("");
  const [newProductDomain, setNewProductDomain] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ target: containerRef });

  const shadowY = useTransform(scrollY, [0, 500], [0, 50]);
  const highlightY = useTransform(scrollY, [0, 500], [0, -50]);

  const generateRandomColors = useCallback(() => {
    // ... (keep the existing color generation logic)
  }, [router]);

  const setInitialColors = useCallback(() => {
    // ... (keep the existing initial color logic)
  }, []);

  useEffect(() => {
    // ... (keep the existing effects)
  }, [searchParams, setInitialColors, backgroundColor, generateRandomColors]);

  const [products, setProducts] = useState([
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "to pay your people in equity and dividends",
      votes: 0,
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "to see what sticks",
      votes: 0,
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "to answer support tickets",
      votes: 0,
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "to moderate user content",
      votes: 0,
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "to write tests",
      votes: 0,
    },
  ]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleVote = (index: number, increment: number) => {
    const newProducts = [...products];
    newProducts[index].votes += increment;
    setProducts(newProducts.sort((a, b) => b.votes - a.votes));
  };

  const handleSubmitNewProduct = (letter: string) => {
    if (newProductName && newProductDomain && newProductDescription) {
      setProducts([
        ...products,
        {
          name: newProductName,
          url: `https://${newProductDomain}`,
          description: newProductDescription,
          votes: 0,
        },
      ]);
      setEditingLetter(null);
      setNewProductName("");
      setNewProductDomain("");
      setNewProductDescription("");
    }
  };

  const domains = [".com", ".ai", ".app", ".io", ".co"];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen font-sans transition-colors duration-300 relative overflow-hidden"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
          y: highlightY,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)`,
          y: shadowY,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12 relative"
      >
        <header className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size={32} color={textColor} background="transparent" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold ml-3"
            >
              Antiwork
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative"
            onMouseEnter={() => setShowShortcutHint(true)}
            onMouseLeave={() => setShowShortcutHint(false)}
          >
            <button
              onClick={generateRandomColors}
              className="p-2 rounded"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} />
            </button>
            <AnimatePresence>
              {showShortcutHint && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 px-2 py-1 text-xs rounded"
                  style={{ backgroundColor: textColor, color: backgroundColor }}
                >
                  Press &apos;S&apos; to shuffle
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </header>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm mb-8"
          style={{ color: textColor }}
        >
          We build products for fun and profit.
        </motion.p>

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
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs" style={{ color: textColor }}>
                  Annual revenue
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs" style={{ color: textColor }}>
                  2023 net income
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">30</p>
                <p className="text-xs" style={{ color: textColor }}>
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
                    className="border-t pt-2"
                    style={{ borderColor: textColor }}
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {editingLetter === letter ? (
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitNewProduct(letter);
                      }}>
                        <input
                          type="text"
                          value={newProductName}
                          onChange={(e) => setNewProductName(e.target.value)}
                          placeholder="Product name"
                          className="text-sm font-bold mb-1 w-full bg-transparent border-b"
                          style={{ borderColor: textColor, color: textColor }}
                        />
                        <div className="flex mb-1">
                          <input
                            type="text"
                            value={newProductDomain}
                            onChange={(e) => setNewProductDomain(e.target.value)}
                            placeholder="Domain"
                            className="text-xs w-1/2 bg-transparent border-b mr-2"
                            style={{ borderColor: textColor, color: textColor }}
                          />
                          <select
                            value={newProductDomain.split('.').pop()}
                            onChange={(e) => setNewProductDomain(newProductDomain.split('.')[0] + e.target.value)}
                            className="text-xs w-1/2 bg-transparent border-b"
                            style={{ borderColor: textColor, color: textColor }}
                          >
                            {domains.map((domain) => (
                              <option key={domain} value={domain}>{domain}</option>
                            ))}
                          </select>
                        </div>
                        <input
                          type="text"
                          value={newProductDescription}
                          onChange={(e) => setNewProductDescription(e.target.value)}
                          placeholder="Description"
                          className="text-xs w-full bg-transparent border-b mb-1"
                          style={{ borderColor: textColor, color: textColor }}
                        />
                        <button
                          type="submit"
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: textColor, color: backgroundColor }}
                        >
                          Add Product
                        </button>
                      </form>
                    ) : (
                      <>
                        <h3
                          className={`text-sm font-bold ${
                            !product ? "opacity-50" : ""
                          }`}
                          onClick={() => !product && setEditingLetter(letter)}
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
                              <p
                                className="text-xs mb-1"
                                style={{ color: textColor }}
                              >
                                {product.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <a
                                  href={product.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-xs hover:underline"
                                  aria-label={`Learn more about ${product.name}`}
                                  style={{ color: textColor }}
                                >
                                  Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                                </a>
                                <div className="flex items-center">
                                  <button
                                    onClick={() => handleVote(index, 1)}
                                    className="mr-1"
                                  >
                                    <ChevronUp size={16} />
                                  </button>
                                  <span className="text-xs mr-1">{product.votes}</span>
                                  <button
                                    onClick={() => handleVote(index, -1)}
                                  >
                                    <ChevronDown size={16} />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
            {products.length > 10 && (
              <button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="mt-4 text-sm flex items-center"
                style={{ color: textColor }}
              >
                <MoreHorizontal size={16} className="mr-1" />
                {showAllProducts ? "Show less" : "Show more"}
              </button>
            )}
          </motion.section>
        </main>
      </motion.div>
    </motion.div>
  );
}

export function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          ▼▼
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
