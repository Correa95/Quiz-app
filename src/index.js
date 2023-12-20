import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const questions = [
  {
    question: "What is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the smallest continent in the world",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "What is the largest desert in the world",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "What is the smallest country in the world",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Question />
      <Answers />
    </div>
  );
}

function Header() {
  return <h1>Simple Quiz</h1>;
}

function Question() {
  return (
    <div>
      {questions.map((question, answer) => (
        <>
          <question question={question.question} />
          <answer answer={answer.answer} />
        </>
      ))}
    </div>
  );
}

function Answers({ question, answers }) {
  // const [select, setSelect] = useState(0);

  return (
    <div>
      <span>
        <p className="btn">{question}</p>
      </span>
      <span>
        <button className="btn">{answers}</button>
        <button className="btn">{answers}</button>
        <button className="btn">{answers}</button>
        <button className="btn">{answers}</button>
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
