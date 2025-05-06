'use client'
import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  pause?: number;
  loop?: boolean;
  fontClass?: string;
}

export default function Typewriter({
  lines,
  speed = 100,
  pause = 2000,
  loop = true,
  fontClass = "",
}: TypewriterProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  const randomSpeed = () => speed + Math.random() * 50;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayedText.length < lines[currentLine].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + lines[currentLine].charAt(prev.length)
          );
        }, randomSpeed());
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, (speed + 20) / 1.5); // smoother erasing
      } else {
        const nextLine = currentLine + 1;
        if (nextLine < lines.length) {
          setCurrentLine(nextLine);
        } else if (loop) {
          setCurrentLine(0);
        }
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentLine, lines, speed, pause, loop]);

  return (
    <span className={`block whitespace-normal break-words text-[#2E2E2E] text-[40px] ${fontClass}`}>
      {displayedText}|
    </span>
  );
}
