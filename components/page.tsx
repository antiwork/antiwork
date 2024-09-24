"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Page() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

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

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div
      className="bg-white text-black min-h-screen font-sans"
      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Antiwork</h1>
          <p className="text-sm text-gray-600">
            We build products for fun and profit.
          </p>
        </header>

        <main>
          <section className="mb-8">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Stats
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-t border-black pt-2">
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs text-gray-600">Annual revenue</p>
              </div>
              <div className="border-t border-black pt-2">
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs text-gray-600">2023 net income</p>
              </div>
              <div className="border-t border-black pt-2">
                <p className="text-xl font-bold">30</p>
                <p className="text-xs text-gray-600">People</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {alphabet.map((letter) => {
                const product = products.find(product => product.name.startsWith(letter));
                return (
                  <div
                    key={letter}
                    className="border-t border-black pt-2"
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <h3 className={`text-sm font-bold ${!product ? 'text-gray-400' : ''}`}>
                      {product ? product.name : letter}
                    </h3>
                    {hoveredProduct === letter && product && (
                      <>
                        <p className="text-xs text-gray-600 mb-1">
                          {product.description}
                        </p>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-black hover:underline"
                          aria-label={`Learn more about ${product.name}`}
                        >
                          Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                        </a>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
