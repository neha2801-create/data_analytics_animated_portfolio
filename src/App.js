// src/App.js
import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [isReading, setIsReading] = useState(false);

  const resumeText = `
    Neha Pathak has extensive experience as a Senior Software Analyst at Accenture, 
    where she designed ETL workflows and improved data accuracy by 70%. 
    She worked on projects including Snapchat Mobile Application and automated trading platforms.
    Her academic projects include NYC Crash Data Analysis and Digital Ad Click Prediction.
    Technical skills include Python, SQL, AWS, and Tableau.
    She holds a Master's in Computer Science from Purdue University with a 3.80 GPA.
  `;

  const handleVoice = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(resumeText);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      setIsReading(false);
    };

    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="app">
      <h1>Resume Reader</h1>
      <Button onClick={handleVoice} isReading={isReading} />
    </div>
  );
}

export default App;