const questions = [
  // Character & Integrity
  {
    id: 1,
    category: "Character & Integrity",
    question: "I keep my word—even if it costs me something.",
    options: [
      { text: "Always", value: 5 },
      { text: "Often", value: 4 },
      { text: "Sometimes", value: 3 },
      { text: "Rarely", value: 2 },
      { text: "Never", value: 1 },
    ],
  },
  {
    id: 2,
    category: "Character & Integrity",
    question: "I take responsibility when I mess up instead of shifting blame.",
    options: [...sameOptions()],
  },
  {
    id: 3,
    category: "Character & Integrity",
    question: "I don’t gossip or trash people behind their back.",
    options: [...sameOptions()],
  },
  {
    id: 4,
    category: "Character & Integrity",
    question: "I treat strangers and service workers with the same respect I’d want for my sister or mother.",
    options: [...sameOptions()],
  },

  // Cleanliness & Habits
  {
    id: 5,
    category: "Cleanliness & Habits",
    question: "My living space is clean and organized—even when I’m not expecting company.",
    options: [...sameOptions()],
  },
  {
    id: 6,
    category: "Cleanliness & Habits",
    question: "I shower, groom, and dress in a way that shows self-respect.",
    options: [...sameOptions()],
  },
  {
    id: 7,
    category: "Cleanliness & Habits",
    question: "I do laundry, dishes, and household chores without expecting applause.",
    options: [...sameOptions()],
  },
  {
    id: 8,
    category: "Cleanliness & Habits",
    question: "I care about the details: fresh breath, clean nails, decent sheets.",
    options: [...sameOptions()],
  },

  // Work Ethic & Drive
  {
    id: 9,
    category: "Work Ethic & Drive",
    question: "I show up on time and follow through—even when no one’s watching.",
    options: [...sameOptions()],
  },
  {
    id: 10,
    category: "Work Ethic & Drive",
    question: "I have personal or career goals—and I’m actively working toward them.",
    options: [...sameOptions()],
  },
  {
    id: 11,
    category: "Work Ethic & Drive",
    question: "I don’t rely on others to push me—I’m self-motivated.",
    options: [...sameOptions()],
  },
  {
    id: 12,
    category: "Work Ethic & Drive",
    question: "I take pride in being dependable and useful to others.",
    options: [...sameOptions()],
  },

  // Trust & Emotional Maturity
  {
    id: 13,
    category: "Trust & Emotional Maturity",
    question: "I can admit when I’m wrong—and actually say the words.",
    options: [...sameOptions()],
  },
  {
    id: 14,
    category: "Trust & Emotional Maturity",
    question: "I talk about how I feel instead of withdrawing or lashing out.",
    options: [...sameOptions()],
  },
  {
    id: 15,
    category: "Trust & Emotional Maturity",
    question: "I don’t punish with silence, sarcasm, or passive aggression.",
    options: [...sameOptions()],
  },
  {
    id: 16,
    category: "Trust & Emotional Maturity",
    question: "I make people feel heard, not dismissed.",
    options: [...sameOptions()],
  },

  // Sex, Intimacy & Connection
  {
    id: 17,
    category: "Sex, Intimacy & Connection",
    question: "I care about her pleasure as much as my own—and I take the time to learn her body.",
    options: [...sameOptions()],
  },
  {
    id: 18,
    category: "Sex, Intimacy & Connection",
    question: "I don’t just want sex—I want her to feel safe, desired, and emotionally connected.",
    options: [...sameOptions()],
  },
  {
    id: 19,
    category: "Sex, Intimacy & Connection",
    question: "I pay attention to her signals, not just my wants.",
    options: [...sameOptions()],
  },
  {
    id: 20,
    category: "Sex, Intimacy & Connection",
    question: "I know real intimacy means emotional presence, not just physical release.",
    options: [...sameOptions()],
  },
];

// Utility function to avoid repeating the same options
function sameOptions() {
  return [
    { text: "Always", value: 5 },
    { text: "Often", value: 4 },
    { text: "Sometimes", value: 3 },
    { text: "Rarely", value: 2 },
    { text: "Never", value: 1 },
  ];
}

export default questions;
