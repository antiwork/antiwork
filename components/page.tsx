"use client";

import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function Page() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const products = [
    {
      name: "Flexile",
      url: "http://Flexile.com",
      description: "to run your business",
    },
    {
      name: "Gumroad",
      url: "http://Gumroad.com",
      description: "to see what sticks",
    },
    {
      name: "Helper",
      url: "http://Helper.ai",
      description: "to answer support tickets",
    },
    {
      name: "Iffy",
      url: "http://Iffy.com",
      description: "to moderate user content",
    },
    {
      name: "Shortest",
      url: "http://shortest.com",
      description: "to write tests",
    },
  ];

  return (
    <div
<<<<<<< HEAD
      className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen font-sans transition-colors duration-300"
      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Antiwork</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We build products for fun and profit.
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
=======
      className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sans"
      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Antiwork</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We build products for fun and profit.
          </p>
>>>>>>> c09e6d3d7fdf3aab74d575e858798f0a2f44ecc3
        </header>

        <main>
          <section className="mb-8">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Stats
            </h2>
            <div className="grid grid-cols-3 gap-4">
<<<<<<< HEAD
              <div className="border-t border-gray-300 dark:border-gray-700 pt-2">
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Annual revenue</p>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-700 pt-2">
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">2023 net income</p>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-700 pt-2">
                <p className="text-xl font-bold">30</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">People</p>
=======
              <div className="border-t border-black dark:border-gray-600 pt-2">
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Annual revenue
                </p>
              </div>
              <div className="border-t border-black dark:border-gray-600 pt-2">
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  2023 net income
                </p>
              </div>
              <div className="border-t border-black dark:border-gray-600 pt-2">
                <p className="text-xl font-bold">30</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  People
                </p>
>>>>>>> c09e6d3d7fdf3aab74d575e858798f0a2f44ecc3
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-3">
<<<<<<< HEAD
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border-t border-gray-300 dark:border-gray-700 pt-2"
                  onMouseEnter={() => setHoveredProduct(product.name)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <h3 className="text-sm font-bold">
                    {product.name}
                  </h3>
                  {hoveredProduct === product.name && (
                    <>
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
                    </>
                  )}
                </div>
              ))}
=======
              {alphabet.map((letter) => {
                const product = products.find((product) =>
                  product.name.startsWith(letter)
                );
                return (
                  <div
                    key={letter}
                    className="border-t border-black dark:border-gray-600 pt-2"
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
                    {hoveredProduct === letter && product && (
                      <>
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
                      </>
                    )}
                  </div>
                );
              })}
>>>>>>> c09e6d3d7fdf3aab74d575e858798f0a2f44ecc3
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
