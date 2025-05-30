import { useState, useEffect } from "react";

export const useTypewriter = (
  words: string[],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000
) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));

          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setText(currentWord.substring(0, text.length + 1));

          if (text.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text + (showCursor ? "|" : " ");
};
