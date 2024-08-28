import React, { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styles from "./PoemDetails.module.css";

function PoemDetails({ analysis, onExtractPercentages }) {
  // Process the analysis string into a list of lines and extract percentages
  const processAnalysis = (text) => {
    const percentagesArray = text
      .match(/\d+%/g)
      .map((percentage) => parseInt(percentage));

    // Call the callback function to pass percentagesArray up to the parent
    onExtractPercentages(percentagesArray);

    // Create data for the pie chart
    const data = [
      { name: "Happiness", value: percentagesArray[0] },
      { name: "Sadness", value: percentagesArray[1] },
      { name: "Anger", value: percentagesArray[2] },
      { name: "Fear", value: percentagesArray[3] },
      { name: "Surprise", value: percentagesArray[4] },
      { name: "Disgust", value: percentagesArray[5] },
      { name: "Other", value: percentagesArray[6] },
    ];

    return data;
  };

  // Define colors for the pie chart
  const COLORS = [
    "#FFBB28",
    "#FF8042",
    "#FF3333",
    "#00C49F",
    "#0088FE",
    "#AA336A",
    "#A0A0A0",
  ];

  const chartData = analysis ? processAnalysis(analysis) : [];

  return (
    <div className={styles.detailsContainer}>
      <h2>Poem Emotional Analysis</h2>
      <div className={styles.analysis}>
        {analysis ? (
          <>
            <ul>
              {analysis.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <div className={styles.pieChartContainer}>
              <PieChart width={400} height={400}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={145}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </>
        ) : (
          <p className={styles.placeholderText}>
            No analysis available. Click "Analyze Poem" to get the results.
          </p>
        )}
      </div>
    </div>
  );
}

export default PoemDetails;
