"use client";
import { useState, useEffect } from "react";
import { createModel, trainModel, predict } from "../lib/model";

const peerReviewedFacts = [
  {
    score: 2,
    fact: "Did you know? Sleep deprivation can lead to significant mood alterations.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8193556/",
  },
  {
    score: 3,
    fact: "Research shows that getting less than 6 hours of sleep is associated with lower happiness levels.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9587590/",
  },
  {
    score: 4,
    fact: "Fun fact: Short naps can significantly boost mood and performance.",
    link: "https://www.sacap.edu.za/blog/applied-psychology/power-nap/",
  },
  {
    score: 5,
    fact: "Interesting! Consistent sleep patterns are linked to higher overall happiness.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10016705/",
  },
  {
    score: 6,
    fact: "Did you know? Regular physical activity and good sleep are key to mental well-being.",
    link: "https://www.nature.com/articles/s41598-024-56332-7",
  },
  {
    score: 7,
    fact: "Fun fact: A bedtime routine can enhance sleep quality and overall happiness.",
    link: "https://sleep.hms.harvard.edu/education-training/public-education/sleep-and-health-education-program/sleep-health-education-41",
  },
  {
    score: 8,
    fact: "High-quality sleep contributes significantly to emotional resilience and mental health.",
    link: "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2023.1297256/full",
  },
  {
    score: 9,
    fact: "Awesome! Quality sleep is crucial for maintaining high levels of happiness.",
    link: "https://www.medicalnewstoday.com/articles/sleep-quality-more-important-for-quality-of-life-than-duration-social-jetlag",
  },
  {
    score: 10,
    fact: "Perfect! Getting 8-9 hours of sleep per night is optimal for mental and physical well-being.",
    link: "https://link.springer.com/article/10.1007/s44155-023-00058-w#:~:text=Results,day%20(p%20%3C%200.001).",
  },
];

const getPeerReviewedFact = (score) => {
  const fact = peerReviewedFacts.find((f) => Math.round(score) === f.score);
  return fact ? fact : { fact: "Keep sleeping well for better happiness!", link: "#" };
};

const HappinessPredictionPage = () => {
  const [model, setModel] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [peerReviewedFact, setPeerReviewedFact] = useState({ fact: "", link: ""});

  useEffect(() => {
    const initializeModel = async () => {
      const model = createModel();
      await trainModel(model);
      setModel(model);
    };
    initializeModel();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePredictClick = () => {
    if (model && input !== "") {
      const result = predict(model, parseFloat(input));
      const roundedResult = parseFloat(result.toFixed(1));
      setOutput(roundedResult);
      setPeerReviewedFact(getPeerReviewedFact(roundedResult));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Predict Your Happiness Score!</h1>
      <p style={{ textAlign: "center" }}>
        Enter the number of hours you sleep to predict your happiness score.
      </p>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter hours of sleep"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handlePredictClick}
        style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
      >
        Predict
      </button>
      {output !== null && (
        <>
          <p
            style={{ fontSize: "20px", marginTop: "20px", textAlign: "center" }}
          >
            Happiness Score: {output}
          </p>
          <p style={{ fontSize: "16px", marginTop: "10px", color: "#555", textAlign: "center" }}>
            {peerReviewedFact.fact}{" "}
            <a
              href={peerReviewedFact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default HappinessPredictionPage;
