const answerOptions = [
  { text: "Always", value: 5 },
  { text: "Often", value: 4 },
  { text: "Sometimes", value: 3 },
  { text: "Rarely", value: 2 },
  { text: "Never", value: 1 },
];

const questions = [
  // CHARACTER & INTEGRITY
  {
    id: 1,
    category: "Character & Integrity",
    question:
      "When I make a promise, I follow through even when keeping it becomes inconvenient.",
  },
  {
    id: 2,
    category: "Character & Integrity",
    question:
      "When I make a mistake, I can acknowledge it without immediately explaining why someone else was partly responsible.",
  },
  {
    id: 3,
    category: "Character & Integrity",
    question:
      "I treat strangers and service workers respectfully, even when I’m frustrated or inconvenienced.",
  },
  {
    id: 4,
    category: "Character & Integrity",
    question:
      "I sometimes tell people what they want to hear even when I know I probably won’t follow through.",
    reverseScored: true,
  },

  // SELF-CARE & RESPONSIBILITY
  {
    id: 5,
    category: "Self-Care & Responsibility",
    question:
      "I take care of my hygiene, grooming, clothing, and living space without needing someone else to push me.",
  },
  {
    id: 6,
    category: "Self-Care & Responsibility",
    question:
      "I handle ordinary responsibilities like cleaning, laundry, errands, bills, or appointments without expecting praise for doing them.",
  },
  {
    id: 7,
    category: "Self-Care & Responsibility",
    question:
      "I usually deal with small problems before they become larger problems.",
  },
  {
    id: 8,
    category: "Self-Care & Responsibility",
    question:
      "When life gets busy, basic responsibilities are often the first things I let slide.",
    reverseScored: true,
  },

  // PURPOSE & RELIABILITY
  {
    id: 9,
    category: "Purpose & Reliability",
    question:
      "People who depend on me can usually trust that I will do what I said I would do.",
  },
  {
    id: 10,
    category: "Purpose & Reliability",
    question:
      "I have goals or responsibilities that give me a sense of direction, and I actively make progress toward them.",
  },
  {
    id: 11,
    category: "Purpose & Reliability",
    question:
      "I can motivate myself to handle important things even when I don’t feel like doing them.",
  },
  {
    id: 12,
    category: "Purpose & Reliability",
    question:
      "I tend to begin things enthusiastically but struggle to stay consistent once the excitement wears off.",
    reverseScored: true,
  },

  // EMOTIONAL MATURITY
  {
    id: 13,
    category: "Emotional Maturity",
    question:
      "I can recognize when I am hurt, embarrassed, jealous, or afraid instead of expressing everything as anger.",
  },
  {
    id: 14,
    category: "Emotional Maturity",
    question:
      "When I’m upset, I can usually calm myself before saying or doing something I’ll regret.",
  },
  {
    id: 15,
    category: "Emotional Maturity",
    question:
      "I can hear criticism from someone I care about without automatically treating it as disrespect.",
  },
  {
    id: 16,
    category: "Emotional Maturity",
    question:
      "When someone hurts my feelings, I sometimes withdraw, become sarcastic, or make them guess what is wrong.",
    reverseScored: true,
  },

  // COMMUNICATION & CONFLICT
  {
    id: 17,
    category: "Communication & Conflict",
    question:
      "During disagreements, I try to understand what the other person means before preparing my response.",
  },
  {
    id: 18,
    category: "Communication & Conflict",
    question:
      "I can explain what is bothering me without insulting, threatening, mocking, or deliberately hurting the other person.",
  },
  {
    id: 19,
    category: "Communication & Conflict",
    question:
      "I can apologize clearly when I realize that I handled something badly.",
  },
  {
    id: 20,
    category: "Communication & Conflict",
    question:
      "When I believe I’m right, it becomes difficult for me to let the other person’s perspective matter.",
    reverseScored: true,
  },

  // RESPECT, BOUNDARIES & SECURITY
  {
    id: 21,
    category: "Respect & Security",
    question:
      "I respect a partner’s friendships, interests, privacy, and independence even when they don’t involve me.",
  },
  {
    id: 22,
    category: "Respect & Security",
    question:
      "If I feel jealous or insecure, I can talk about it without trying to control another person’s behavior.",
  },
  {
    id: 23,
    category: "Respect & Security",
    question:
      "I can hear 'no' or accept a boundary without taking it as a personal attack.",
  },
  {
    id: 24,
    category: "Respect & Security",
    question:
      "When I feel uncertain about a relationship, I sometimes look for reassurance by testing, checking up on, or pressuring the other person.",
    reverseScored: true,
  },

  // INTIMACY & CONNECTION
  {
    id: 25,
    category: "Intimacy & Connection",
    question:
      "With a partner, I care about their comfort and pleasure as much as my own.",
  },
  {
    id: 26,
    category: "Intimacy & Connection",
    question:
      "I am willing to communicate openly about affection, sex, closeness, and what each person enjoys or needs.",
  },
  {
    id: 27,
    category: "Intimacy & Connection",
    question:
      "I understand that intimacy also includes affection, trust, attention, vulnerability, and emotional presence.",
  },
  {
    id: 28,
    category: "Intimacy & Connection",
    question:
      "When physical intimacy is unavailable, I find it much harder to feel connected to a partner.",
    reverseScored: true,
  },
];

export const getAnswerOptions = () =>
  answerOptions.map((option) => ({ ...option }));

export default questions;