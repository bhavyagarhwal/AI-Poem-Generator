import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import PromptInput from "./components/PromptInput";
import PoemOutput from "./components/PoemOutput";
import EmotionsAnimation from "./components/EmotionsAnimation";
import PoemDetails from "./components/PoemDetails";
import AnalyzeButton from "./components/AnalyzeButton";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";

function App() {
  const [poemData, setPoemData] = useState({ title: "", poem: "" });
  const [emotionAnalysis, setEmotionAnalysis] = useState("");
  const [percentagesArray, setPercentagesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket("ws://localhost:9000/ws");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  const fetchPoem = async (prompt) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:9000/generate-poem", {
        prompt,
      });
      console.log("Received poem response:", response.data);
      setPoemData({
        title: response.data.title || "Your Generated Poem Title",
        poem: response.data.poem,
      });
      setTimeout(() => {
        setIsLoading(false);
        setIsGenerated(true);
      }, 3000);
    } catch (error) {
      console.error("Error fetching poem:", error);
      setIsLoading(false);
    }
  };

  const analyzePoem = async () => {
    try {
      const response = await axios.post("http://localhost:9000/analyze-poem", {
        poem: poemData.poem,
      });
      setEmotionAnalysis(response.data.analysis);
    } catch (error) {
      console.error("Error analyzing poem:", error);
    }
  };

  return (
    <div>
      <Heading />
      <div className="form-container">
        {isLoading ? (
          <div className={styles.loader}>
            <div className={styles.card}>
              <div className={styles.loader}>
                <p>loading...</p>
                <div className={styles.words}>
                  <span className={styles.word}>buttons</span>
                  <span className={styles.word}>forms</span>
                  <span className={styles.word}>switches</span>
                  <span className={styles.word}>cards</span>
                  <span className={styles.word}>buttons</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <PromptInput fetchPoem={fetchPoem} />
            {isGenerated && poemData.poem && (
              <>
                <PoemOutput poemData={poemData} />
                <AnalyzeButton onClick={analyzePoem} />
                <div className={styles.flexContainer}>
                  <PoemDetails
                    analysis={emotionAnalysis}
                    onExtractPercentages={setPercentagesArray}
                  />
                  <EmotionsAnimation percentagesArray={percentagesArray} />
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
