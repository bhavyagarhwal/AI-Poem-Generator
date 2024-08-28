import React from "react";
import { motion } from "framer-motion";
import styles from "./EmotionsAnimation.module.css";

const EmotionsAnimation = ({ percentagesArray }) => {
  const maxIndex = percentagesArray
    .slice(0, 6)
    .indexOf(Math.max(...percentagesArray.slice(0, 6)));

  const animations = {
    0: {
      animate: { scale: [1, 0.8, 1], rotate: [0, 10, -10, 0] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif"
            alt="☺"
            width="400"
            height="400"
          />
        </picture>
      ), // Happiness
    },
    1: {
      animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif"
            alt="😞"
            width="400"
            height="400"
          />
        </picture>
      ), // Sadness
    },
    2: {
      animate: {
        scale: [1, 0.8, 1],
      },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif"
            alt="😡"
            width="400"
            height="400"
          />
        </picture>
      ), // Anger
    },

    3: {
      animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.gif"
            alt="😨"
            width="400"
            height="400"
          />
        </picture>
      ), // Fear
    },
    4: {
      animate: { rotate: [0, 0, 0], scale: [1, 0.8, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif"
            alt="🤯"
            width="400"
            height="400"
          />
        </picture>
      ), // Surprise
    },
    5: {
      animate: { rotate: [0, 0, 0], scale: [1, 0.8, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.gif"
            alt="🤮"
            width="400"
            height="400"
          />
        </picture>
      ), // Disgust
    },
  };

  return (
    <div className={styles.animationContainer}>
      {percentagesArray.length > 0 && (
        <motion.div
          animate={animations[maxIndex].animate}
          transition={animations[maxIndex].transition}
          className={styles.animationContent}
        >
          {animations[maxIndex].content}
        </motion.div>
      )}
    </div>
  );
};

export default EmotionsAnimation;
