import React from "react";
import questions from "../data/questions";

const calculateResults = (answers) => {
  const categories = {};

  questions.forEach((question) => {
    const rawValue = answers[question.id];

    if (rawValue === undefined) return;

    const score = question.reverseScored ? 6 - rawValue : rawValue;

    if (!categories[question.category]) {
      categories[question.category] = {
        score: 0,
        maxScore: 0,
      };
    }

    categories[question.category].score += score;
    categories[question.category].maxScore += 5;
  });

  Object.keys(categories).forEach((category) => {
    categories[category].percentage = Math.round(
      (categories[category].score / categories[category].maxScore) * 100
    );
  });

  const totalScore = Object.values(categories).reduce(
    (sum, category) => sum + category.score,
    0
  );

  const maxScore = Object.values(categories).reduce(
    (sum, category) => sum + category.maxScore,
    0
  );

  const overallPercentage = Math.round((totalScore / maxScore) * 100);

  return {
    categories,
    overallPercentage,
  };
};

const getProfile = (categories, overall) => {
  const emotional = categories["Emotional Maturity"]?.percentage || 0;
  const communication =
    categories["Communication & Conflict"]?.percentage || 0;
  const integrity = categories["Character & Integrity"]?.percentage || 0;
  const reliability = categories["Purpose & Reliability"]?.percentage || 0;
  const security = categories["Respect & Security"]?.percentage || 0;

  if (
    overall >= 85 &&
    emotional >= 75 &&
    communication >= 75 &&
    security >= 75
  ) {
    return {
      name: "The Grounded Man",
      summary:
        "You come across as steady, capable, and emotionally grown. You likely make people feel that life with you would be easier, calmer, and more solid — which is rarer than you may think.",
    };
  }

  if (
    integrity >= 80 &&
    reliability >= 80 &&
    (emotional < 70 || communication < 70)
  ) {
    return {
      name: "The Dependable but Guarded Man",
      summary:
        "You probably do a lot right: you show up, handle your business, and take responsibility. Where things may get trickier is emotional openness. You may be reliable in real life, but harder to reach when feelings get involved.",
    };
  }

  if (emotional >= 75 && communication >= 75 && reliability < 70) {
    return {
      name: "The Self-Aware Builder",
      summary:
        "You seem more emotionally aware than average, and that matters. Your next step is turning insight into pattern — because knowing better only really counts when it starts showing up in how you live.",
    };
  }

  if (security < 65 || communication < 65 || emotional < 65) {
    return {
      name: "The Man With Blind Spots",
      summary:
        "You may mean well more often than not. But intention and impact are not the same thing. Some of your habits may be creating friction, distance, or mistrust even when that’s not what you want.",
    };
  }

  if (overall >= 70) {
    return {
      name: "The Strong Foundation",
      summary:
        "You’ve got many of the qualities that matter most, which gives you a strong base. The next level for you is consistency — especially when stress, ego, or conflict try to take the wheel.",
    };
  }

  if (overall >= 60) {
    return {
      name: "The Charming Work in Progress",
      summary:
        "You likely have qualities people enjoy right away, but long-term attraction tends to depend on what happens after the first impression. A little more consistency and self-awareness would make your strengths land much harder.",
    };
  }

  return {
    name: "The Work in Progress",
    summary:
      "There’s more potential here than polish — and that’s okay. The good news is that most of what makes a man more attractive in relationships is learned behavior, not magic.",
  };
};

const categoryDescriptions = {
  "Character & Integrity":
    "Honesty, accountability, respect, and whether your actions match your words.",

  "Self-Care & Responsibility":
    "How consistently you manage yourself, your environment, and everyday adult responsibilities.",

  "Purpose & Reliability":
    "Follow-through, motivation, direction, and whether others can depend on you.",

  "Emotional Maturity":
    "How well you recognize, regulate, and take responsibility for your emotional reactions.",

  "Communication & Conflict":
    "Your ability to listen, repair problems, apologize, and communicate when things get tense.",

  "Respect & Security":
    "How you handle boundaries, independence, jealousy, insecurity, and another person’s autonomy.",

  "Intimacy & Connection":
    "Your approach to affection, vulnerability, emotional closeness, and mutually satisfying intimacy.",
};

const getCategoryMessage = (percentage) => {
  if (percentage >= 85) {
    return "This is one of your strongest relationship instincts. It likely shows up in ways people notice.";
  }

  if (percentage >= 70) {
    return "You’ve got a solid handle on this area. Under pressure, there may still be a few edges worth smoothing out.";
  }

  if (percentage >= 55) {
    return "This area may depend a lot on your mood, stress level, or the situation. In other words: promising, but not yet automatic.";
  }

  return "This may be the part of your game that needs the most honesty. The upside is that improvement here could change a lot, fast.";
};

const getBlindSpotInsight = (category) => {
  const insights = {
    "Character & Integrity":
      "You may have good intentions, but people tend to judge consistency more than intention. If your word and your actions don’t always match, that can quietly erode trust.",

    "Self-Care & Responsibility":
      "Being attractive isn’t just about presentation. It’s also about whether another adult feels like they’d have to manage your life for you.",

    "Purpose & Reliability":
      "Potential is appealing. Follow-through is more appealing. People notice when enthusiasm shows up more often than consistency.",

    "Emotional Maturity":
      "Strength is not pretending nothing gets to you. The more confidently you can name what you feel without making it someone else’s problem, the easier you are to be close to.",

    "Communication & Conflict":
      "A relationship can survive disagreement. What matters more is whether disagreement turns into listening, repair, defensiveness, punishment, or a competition to win.",

    "Respect & Security":
      "Insecurity itself isn’t the problem. What matters is what you do with it. Pressure, checking, testing, and control can push away the connection you’re trying to protect.",

    "Intimacy & Connection":
      "Chemistry can start attraction. Attention, curiosity, affection, and emotional presence are usually what keep intimacy from becoming mechanical.",
  };

  return insights[category];
};

const Result = ({ answers, onRetake }) => {
  const { categories, overallPercentage } = calculateResults(answers);

  const entries = Object.entries(categories);

  const strongest = entries.reduce((best, current) =>
    current[1].percentage > best[1].percentage ? current : best
  );

  const growthArea = entries.reduce((lowest, current) =>
    current[1].percentage < lowest[1].percentage ? current : lowest
  );

  const profile = getProfile(categories, overallPercentage);

  return (
    <main className="results-page">
      <section className="results-hero">
        <p className="eyebrow">Your Read</p>

        <h1>{profile.name}</h1>

        <p className="results-summary">{profile.summary}</p>

        <div className="overall-result">
          <span className="overall-number">{overallPercentage}%</span>
          <span className="overall-label">overall read</span>
        </div>
      </section>

      <section className="result-highlights">
        <div className="highlight-card">
          <p className="highlight-label">Your Strongest Move</p>
          <h2>{strongest[0]}</h2>
          <p>{strongest[1].percentage}%</p>
        </div>

        <div className="highlight-card">
          <p className="highlight-label">Your Blind Spot</p>
          <h2>{growthArea[0]}</h2>
          <p>{growthArea[1].percentage}%</p>
        </div>
      </section>

      <section className="results-intro">
        <p className="results-kicker">
          Attraction is rarely one thing. It’s usually a pattern.
        </p>
      </section>

      <section className="category-results">
        <div className="section-heading">
          <p className="eyebrow">The Breakdown</p>
          <h2>How You Tend to Show Up</h2>
        </div>

        {entries.map(([category, data]) => (
          <article key={category} className="category-result-card">
            <div className="category-result-heading">
              <div>
                <h3>{category}</h3>
                <p>{categoryDescriptions[category]}</p>
              </div>

              <strong>{data.percentage}%</strong>
            </div>

            <div className="score-track">
              <div
                className="score-fill"
                style={{ width: `${data.percentage}%` }}
              />
            </div>

            <p className="category-message">
              {getCategoryMessage(data.percentage)}
            </p>
          </article>
        ))}
      </section>

      <section className="growth-section">
        <p className="eyebrow">Worth Working On</p>

        <h2>{growthArea[0]}</h2>

        <p className="growth-intro">
          Your lowest-scoring area is not a verdict. It’s simply the place
          where a little more maturity, awareness, or consistency could make
          the biggest difference in how people experience you.
        </p>

        <p className="blind-spot-insight">
          {getBlindSpotInsight(growthArea[0])}
        </p>
      </section>

      <section className="results-actions">
        <button
          type="button"
          onClick={onRetake}
          className="secondary-button"
        >
          Take It Again
        </button>
      </section>

      <p className="results-disclaimer">
        This assessment is for reflection, insight, and a little honest
        self-checking. It is not a clinical evaluation, and no score can
        predict chemistry, compatibility, or whether any one person will be
        into you.
      </p>
    </main>
  );
};

export default Result;