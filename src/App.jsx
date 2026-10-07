import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import { Analytics } from "@vercel/analytics/react";
import { trackEvent } from "./utils/analytics";

function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [started]);

  const handleStart = () => {
    trackEvent("quiz_started");
    setStarted(true);
  };

  return (
    <div className="app">
      {!started ? (
        <main className="landing-page">
          <section className="hero-section">
            <div className="hero-content">
              <p className="eyebrow">A Relationship Self-Assessment</p>

              <h1>Are You the Kind of Man Women Desire?</h1>

              <p className="hero-lead">
                Attraction is about more than looks, money, confidence, or
                knowing what to say.
              </p>

              <p className="hero-description">
                This assessment explores the everyday qualities that can shape
                trust, attraction, emotional safety, intimacy, and long-term
                connection.
              </p>

              <button className="hero-button" onClick={handleStart}>
                Start the Self-Assessment
              </button>

              <p className="hero-note">
                28 questions · About 5 minutes · No signup required
              </p>
            </div>

            <div className="hero-image-wrapper">
              <img src="/manquiz.png" alt="" className="hero-image" />
            </div>
          </section>

          <section className="assessment-intro">
            <p className="eyebrow">What This Looks At</p>

            <h2>Desirability is often revealed in ordinary moments.</h2>

            <p>
              How do you behave when you are frustrated? Can people depend on
              you? How do you handle jealousy, criticism, boundaries, conflict,
              responsibility, and intimacy?
            </p>

            <p>
              Those patterns may say more about relationship readiness than a
              clever opening line ever could.
            </p>
          </section>

          <section className="assessment-topics">
            <div>
              <h3>Character</h3>
              <p>Integrity, respect, accountability, and consistency.</p>
            </div>

            <div>
              <h3>Emotional Maturity</h3>
              <p>Self-awareness, regulation, vulnerability, and repair.</p>
            </div>

            <div>
              <h3>Relationships</h3>
              <p>Communication, boundaries, security, and intimacy.</p>
            </div>
          </section>

          <section className="final-cta">
            <h2>Answer honestly.</h2>

            <p>
              Not based on the man you intend to be. Based on the man you are
              most days.
            </p>

            <button onClick={handleStart}>Take the Assessment</button>
          </section>
        </main>
      ) : (
        <>
          <header className="quiz-header">
            <button
              type="button"
              className="site-title"
              onClick={() => setStarted(false)}
            >
              The Desire Assessment
            </button>
          </header>

          <Quiz />
        </>
      )}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-mark" aria-hidden="true">
            STABILE
          </div>

          <div className="footer-copy">
            <p className="creator-credit">
              Created by{" "}
              <a
                href="https://pamelajterrell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pamela J. Terrell
              </a>
            </p>

            <p className="brand-credit">
              Part of the{" "}
              <a
                href="https://stabileusa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stabile USA
              </a>{" "}
              digital portfolio
            </p>

            <p className="brand-tagline">
              Independent ideas. Built to last.
            </p>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}

export default App;