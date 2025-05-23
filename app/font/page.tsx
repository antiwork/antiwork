"use client";

import { useEffect, useState, useRef } from "react";
import { Font } from "../components/Font";
import { Slider } from "@/components/ui/slider";

export default function GeometricFont() {
  const [text, setText] = useState("ANTIWORK");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(176); // Default size from Font component
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check for system preference
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      if (prefersDarkScheme.matches) {
        setIsDarkMode(true);
      }
    }

    // Load saved text
    try {
      const savedText = localStorage.getItem("geometricFontText");
      if (savedText) {
        setText(savedText);
      }
      
      // Load saved font size
      const savedFontSize = localStorage.getItem("geometricFontSize");
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize, 10));
      }
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
    }

    // Adjust textarea height on load
    if (textareaRef.current) {
      adjustTextareaHeight(textareaRef.current);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  
  // Save font size preference
  useEffect(() => {
    localStorage.setItem("geometricFontSize", fontSize.toString());
  }, [fontSize]);

  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    // Reset height to allow proper scrollHeight calculation
    element.style.height = "auto";
    // Set height to scrollHeight to fit content
    element.style.height = element.scrollHeight + "px";
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    // Save to localStorage
    try {
      localStorage.setItem("geometricFontText", newText);
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }

    // Adjust textarea height
    adjustTextareaHeight(e.target);
  };

  const fillAlphabet = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setText(alphabet);

    // Save to localStorage
    try {
      localStorage.setItem("geometricFontText", alphabet);
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }

    // Adjust textarea height
    if (textareaRef.current) {
      textareaRef.current.value = alphabet;
      adjustTextareaHeight(textareaRef.current);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderText = () => {
    const lines = text.toUpperCase().split("\n");
    const color = isDarkMode ? "#ffffff" : "#000000";

    return lines.map((line, lineIndex) => (
      <div className="text-row" key={`line-${lineIndex}`}>
        <Font text={line} color={color} size={fontSize} />
      </div>
    ));
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-color: ${isDarkMode ? "#121212" : "#ffffff"};
          --text-color: ${isDarkMode ? "#ffffff" : "#000000"};
          --button-bg: ${isDarkMode ? "#2e7d32" : "#4CAF50"};
          --button-hover-bg: ${isDarkMode ? "#246428" : "#45a049"};
          --button-text: white;
          --border-color: ${isDarkMode ? "#ffffff" : "#000"};
        }

        body {
          font-family: monospace;
          background-color: var(--bg-color);
          color: var(--text-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          padding: 0;
          transition: background-color 0.3s ease;
        }
        .text-container {
          padding: 0 20px 20px;
          word-wrap: break-word;
          line-height: 1.5;
        }

        .text-container div {
          margin: 20px auto;
          word-wrap: break-word;
        }

        .text-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          width: 100%;
          max-width: 100%;
          margin: 50px auto;
        }
        .input-area {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          font-family: monospace;
          border: none;
          outline: none;
          box-sizing: border-box;
          resize: none;
          border-bottom: 3px solid var(--border-color);
          overflow: hidden; /* Hide scrollbars */
          background-color: var(--bg-color);
          color: var(--text-color);
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: var(--button-bg);
          color: var(--button-text);
          border: none;
          cursor: pointer;
          margin: 10px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: var(--button-hover-bg);
        }
        .button-group {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          padding: 0 10px;
        }
        .font-size-control {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
        }
        h1 {
          margin: 10px 0;
        }
      `}</style>

      <div className="input-area">
        <textarea
          ref={textareaRef}
          id="textInput"
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextChange}
        />
        <div className="button-group">
          <button onClick={fillAlphabet}>Fill with Alphabet</button>
          <button id="darkModeToggle" onClick={toggleDarkMode}>
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        
        <div className="font-size-control">
          <div className="mb-2 flex justify-between">
            <span>Font size: {fontSize}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFontSize(Math.max(50, fontSize - 10))}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Smaller
            </button>
            <input
              type="range"
              min={50}
              max={300}
              step={1}
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
              className="flex-grow h-2 bg-black/10 rounded-full appearance-none cursor-pointer"
            />
            <button
              onClick={() => setFontSize(Math.min(300, fontSize + 10))}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Larger
            </button>
          </div>
        </div>
      </div>

      <div id="textContainer" className="text-container">
        {renderText()}
      </div>
    </>
  );
}
