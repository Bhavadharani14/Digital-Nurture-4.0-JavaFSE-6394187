import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>My Academy - Cohort Dashboard</h2>
      <CohortDetails name="React Basics" trainer="Alice" status="ongoing" />
      <CohortDetails name="Spring Boot APIs" trainer="Bob" status="completed" />
    </div>
  );
}

export default App;
