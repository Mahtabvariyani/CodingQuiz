"use client";

import React, { useState } from "react";
import { quiz } from "@/constants";

const second = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState<boolean | null>(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: any, index: any) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="w-full max-w-[570px] rounded-[20px] backdrop-blur-md py-12 px-8 text-center md:py-[60px] md:px-[70px]  h-[70vh] ">
      {!showResult ? (
        <div>
          <h6 className="text-purple-200 pb-2 text-xs md:text-3xl md:text-bold  sm:text-sm ">
            {questions[activeQuestion].question}
          </h6>
          <span className="bg-indigo-500 mx-auto mt-4 mb-6 inline-block h-1 w-[90px] rounded"></span>
          {answers.map((answer, index) => (
            <div className="flex flex-wrap gap-3" key={index}>
              <button
                onClick={() => onAnswerSelected(answer, index)}
                className="text-white block w-full rounded-lg border m-2 border-gray-700 p-3 text-center text-base font-medium transition hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white"
              >
                {answer}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h6 className="text-purple-800 text-bold mb-10   leading-relaxed">
          <h3>Results</h3>
          <h3>Overall {(result.score / 25) * 100}%</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-white block w-full rounded-lg border m-2 border-gray-700 p-3 text-center text-base font-medium transition bg-fuchsia-500"
          >
            Restart
          </button>
        </h6>
      )}
      <span className="bg-indigo-500 mt-5 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
      <h6 className="text-gray-400 mb-10 text-base  leading-relaxed">
        Questions : {activeQuestion + 1} <span>/{questions.length}</span>
      </h6>
      {checked && !showResult && (
        <button
          onClick={nextQuestion}
          className="text-white block w-full rounded-lg border m-2 border-gray-700 p-3 text-center text-base font-medium transition bg-fuchsia-500"
        >
          {activeQuestion === questions.length - 1
            ? "Finished"
            : "Next Question"}
        </button>
      )}
    </div>
  );
};

export default second;
