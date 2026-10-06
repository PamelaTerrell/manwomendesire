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
      name: "The Grounded Partner",
      summary:
        "Your answers suggest a strong combination of reliability, emotional awareness, respect, and relationship maturity. Your greatest strength may be that people can experience both steadiness and emotional safety around you.",
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
        "You appear to value responsibility, loyalty, and following through. Where relationships may become harder is emotional openness—especially when you feel hurt, criticized, or vulnerable.",
    };
  }

  if (
    emotional >= 75 &&
    communication >= 75 &&
    reliability < 70
  ) {
    return {
      name: "The Self-Aware Builder",
      summary:
        "You appear comfortable with emotional awareness and honest communication. Your next level may come from making your habits, responsibilities, and long-term consistency match that emotional insight.",
    };
  }

  if (
    security < 65 ||
    communication < 65 ||
    emotional < 65
  ) {
    return {
      name: "The Man With Blind Spots",
      summary:
        "You have strengths to build on, but some of your relationship habits may create distance, defensiveness, or insecurity without you intending to. Awareness is where meaningful change starts.",
    };
  }

  if (overall >= 70) {
    return {
      name: "The Strong Foundation",
      summary:
        "You appear to have many of the qualities that support healthy relationships. Your biggest opportunity is not becoming someone different—it is making your strongest qualities more consistent when life gets difficult.",
    };
  }

  return {
    name: "The Work in Progress",
    summary:
      "Your answers suggest that some healthy instincts are already present, while consistency and self-awareness still need attention. The encouraging part is that most of these qualities are behaviors that can be practiced and strengthened.",
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
    "How well you understand, regulate, and take responsibility for your emotional reactions.",

  "Communication & Conflict":
    "Your ability to listen, repair problems, apologize, and communicate during disagreement.",

  "Respect & Security":
    "How you handle boundaries, independence, jealousy, insecurity, and another person's autonomy.",

  "Intimacy & Connection":
    "Your approach to affection, vulnerability, emotional closeness, and mutually satisfying intimacy.",
};

const getCategoryMessage = (percentage) => {
  if (percentage >= 85) {
    return "This appears to be one of your strongest relationship skills.";
  }

  if (percentage >= 70) {
    return "You have a healthy foundation here, with some room for greater consistency.";
  }

  if (percentage >= 55) {
    return "This area may depend heavily on the situation, especially when you are stressed or emotionally activated.";
  }

  return "This may be an important area for reflection and intentional growth.";
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
        <p className="eyebrow">Your Relationship Self-Assessment</p>

        <h1>{profile.name}</h1>

        <p className="results-summary">{profile.summary}</p>

        <div className="overall-result">
          <span className="overall-number">{overallPercentage}%</span>
          <span className="overall-label">overall assessment</span>
        </div>
      </section>

      <section className="result-highlights">
        <div className="highlight-card">
          <p className="highlight-label">Strongest Area</p>
          <h2>{strongest[0]}</h2>
          <p>{strongest[1].percentage}%</p>
        </div>

        <div className="highlight-card">
          <p className="highlight-label">Growth Opportunity</p>
          <h2>{growthArea[0]}</h2>
          <p>{growthArea[1].percentage}%</p>
        </div>
      </section>

      <section className="category-results">
        <div className="section-heading">
          <p className="eyebrow">Your Breakdown</p>
          <h2>How You Show Up</h2>
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
        <p className="eyebrow">Something Worth Working On</p>

        <h2>{growthArea[0]}</h2>

        <p>
          Your lowest score is not a label or a judgment. Think of it as the
          area where a little more awareness may produce the biggest difference
          in how other people experience you.
        </p>
      </section>

      <section className="results-actions">
        <button type="button" onClick={onRetake} className="secondary-button">
          Retake the Assessment
        </button>
      </section>

      <p className="results-disclaimer">
        This assessment is designed for personal reflection and entertainment.
        It is not a psychological or clinical evaluation, and no score can
        determine whether any individual person will find someone attractive
        or compatible.
      </p>
    </main>
  );
};

export default Result;