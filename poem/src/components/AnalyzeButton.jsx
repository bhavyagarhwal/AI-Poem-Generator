import React, { useState } from "react";
import styles from "./AnalyzeButton.module.css";

function AnalyzeButton({ onClick }) {
  const [buttonState, setButtonState] = useState("initial");

  const handleClick = () => {
    setButtonState("analyzing");
    onClick().then(() => {
      setButtonState("done");
    });
  };

  let buttonText;
  switch (buttonState) {
    case "analyzing":
      buttonText = "Analyzing...";
      break;
    case "done":
      buttonText = "Analysis Done";
      break;
    default:
      buttonText = "Analyze Poem";
  }

  return (
    <button
      className={`${styles.analyzeButton} ${
        buttonState !== "initial" ? styles.analyzing : ""
      }`}
      onClick={handleClick}
      disabled={buttonState === "analyzing"}
    >
      {buttonText}
    </button>
  );
}

export default AnalyzeButton;
