import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const score = (total / (goal * 100)) * 100; // assuming 100 marks per subject

  return (
    <div className="score-container">
      <h1>Student Details:</h1>
      <p><span className="label name-label">Name:</span> <span className="value name-value">{name}</span></p>
      <p><span className="label school-label">School:</span> <span className="value school-value">{school}</span></p>
      <p><span className="label total-label">Total:</span> <span className="value total-value">{total} Marks</span></p>
      <p><span className="label score-label">Score:</span> <span className="value score-value">{score.toFixed(2)}%</span></p>
    </div>
  );
}

export default CalculateScore;
