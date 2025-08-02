import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [started]);

  return (
    <div className="app">
      {!started ? (
        <div className="landing">
          <img src="/manquiz.png" alt="Confident man" className="hero-image" />
          <h1>Are You the Kind of Man Women Desire?</h1>
          <p>This isn’t about game. It’s about growth.</p>
          <button onClick={() => setStarted(true)}>Start the Self-Assessment</button>
          <p className="ai-info">
            Powered by advanced AI, this quiz analyzes your responses to deliver personalized insights into what women truly desire.
          </p>
        </div>
      ) : (
        <>
          <header>
            <h1>Are You the Kind of Man Women Desire?</h1>
          </header>
          <Quiz />
        </>
      )}

      <footer className="site-footer">
        <p>
          Created by{' '}
          <a href="https://pamelajterrell.com" target="_blank" rel="noopener noreferrer">
            Pamela J Terrell
          </a>
        </p>
      </footer>

      <Analytics />
    </div>
  );
}

export default App;
