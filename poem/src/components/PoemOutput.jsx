import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./PoemOutput.module.css";

const PoemOutput = ({ poemData }) => {
  const { title, poem } = poemData;
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (poem) {
      const newLines = poem.split("\n");

      const updateLines = () => {
        newLines.forEach((line, index) => {
          setTimeout(() => {
            setLines((prevLines) => {
              if (!prevLines.includes(line)) {
                return [...prevLines, line];
              }
              return prevLines;
            });
          }, index * 500); // Adjust the timing as needed (500ms per line)
        });
      };

      // Call updateLines function
      updateLines();
    }
  }, [poem]);

  return (
    <div className={styles.poemBox}>
      <h2>{title || "Your Generated Poem Title"}</h2>
      <div className={styles.poemContainer}>
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className={styles.poemText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {line.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className={styles.word}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {word + " "}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default PoemOutput;
