import React, { useState, useEffect } from "react";

const Typewriter = ({ strings, speed }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextChar = strings[currentStringIndex][currentCharIndex] || "";

        if (currentCharIndex === strings[currentStringIndex].length - 1) {
          // Move to the next string after a brief pause
          setTimeout(() => {
            setCurrentCharIndex(0);
            setDisplayedText(""); // Clear displayedText after each string

            setCurrentStringIndex(
              (prevIndex) => (prevIndex + 1) % strings.length
            );
          }, speed);
        } else {
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }

        return prevText + nextChar;
      });
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [strings, currentStringIndex, currentCharIndex, speed]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
