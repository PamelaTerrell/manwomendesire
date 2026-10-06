import React, { useState } from "react";
import questions, { getAnswerOptions } from "../data/questions";
import Result from "./Result";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const currentAnswer = answers[currentQuestion?.id];

  const progressPercent = showResults
    ? 100
    : Math.round((currentIndex / totalQuestions) * 100);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentAnswer === undefined) return;

    if (currentIndex === totalQuestions - 1) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showResults) {
    return <Result answers={answers} onRetake={handleRetake} />;
  }

  const options = getAnswerOptions();

  return (
    <main className="quiz-container">
      <div className="quiz-progress-area">
        <div className="quiz-progress-meta">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin="1"
          aria-valuemax={totalQuestions}
          aria-label="Assessment progress"
        >
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <section className="question-stage">
        <p className="question-category">{currentQuestion.category}</p>

        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="answer-options">
          {options.map((option) => {
            const selected = currentAnswer === option.value;

            return (
              <button
                type="button"
                key={option.value}
                className={`answer-option ${selected ? "selected" : ""}`}
                onClick={() => handleAnswer(option.value)}
                aria-pressed={selected}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        <div className="quiz-navigation">
          <button
            type="button"
            className="secondary-button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Back
          </button>

          <button
            type="button"
            className="primary-button"
            onClick={handleNext}
            disabled={currentAnswer === undefined}
          >
            {currentIndex === totalQuestions - 1
              ? "See My Results"
              : "Continue"}
          </button>
        </div>
      </section>

      <p className="assessment-note">
        There are no perfect answers. Answer based on how you usually behave,
        not how you think you should behave.
      </p>
    </main>
  );
};

export default Quiz;