const Result = ({ score, maxScore }) => {
  const percent = (score / maxScore) * 100;

  let message = "";
  if (percent >= 90) {
    message = "You’re the kind of man women dream of—solid, grounded, and emotionally intelligent.";
  } else if (percent >= 75) {
    message = "You’re on the right track. A few blind spots, but you’re showing up where it counts.";
  } else if (percent >= 50) {
    message = "You’ve got potential—but also some work to do. Start with consistency and self-awareness.";
  } else {
    message = "If you’re willing to take a hard look, there’s room for growth. Start now. She’s waiting.";
  }

  return (
    <div>
      <h2>Your Score: {score} / {maxScore}</h2>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Take Again</button>
    </div>
  );
};

export default Result;
