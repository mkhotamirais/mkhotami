import { useState, useEffect } from "react";

const AutoType = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <div style={{ fontSize: "24px", fontFamily: "monospace" }}>{displayedText}</div>;
};
AutoType.propTypes;

export default AutoType;
