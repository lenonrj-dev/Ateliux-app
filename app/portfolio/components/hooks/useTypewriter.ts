/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }
    let index = 0;
    setDisplayed("");
    const interval = window.setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index += 1;
      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  return displayed;
}
