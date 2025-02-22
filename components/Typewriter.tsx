"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
}
const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="title" style={{ color: "#a2d2fa" }}>
      {currentText.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </span>
  );
};

export default Typewriter;
