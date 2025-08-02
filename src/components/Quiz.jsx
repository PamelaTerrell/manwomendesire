import React, { useState } from 'react';
import questions from '../data/questions';
import Result from './Result';

// Helper: group questions by category
const groupByCategory = (questions) => {
  return questions.reduce((acc, question) => {
    if (!acc[question.category]) acc[question.category] = [];
    acc[question.category].push(question);
    return acc;
  }, {});
};

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const groupedQuestions = groupByCategory(questions);
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          {/* Progress Bar */}
          <div className="progress-bar-wrapper" aria-label="Quiz progress">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
            <p>{answeredCount} / {totalQuestions} answered</p>
          </div>

          {/* Questions grouped by category */}
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => {
            // Count answered questions in this category
            const categoryAnsweredCount = categoryQuestions.filter(q => answers[q.id]).length;
            return (
              <section key={category} className="category-section">
                <h2>{category} ({categoryAnsweredCount} / {categoryQuestions.length})</h2>
                {categoryQuestions.map(q => (
                  <div key={q.id} className="question-card">
                    <p>{q.question}</p>
                    <div className="options">
                      {q.options.map((opt, idx) => (
                        <label key={idx}>
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt.value}
                            checked={answers[q.id] === opt.value}
                            onChange={() => handleAnswer(q.id, opt.value)}
                          />
                          {opt.text}
                        </label>
                      ))}
                    </div>
                    <hr />
                  </div>
                ))}
              </section>
            );
          })}

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={answeredCount < totalQuestions}
          >
            Get My Results
          </button>
        </>
      ) : (
        <Result score={totalScore} maxScore={totalQuestions * 5} />
      )}
    </div>
  );
};

export default Quiz;
