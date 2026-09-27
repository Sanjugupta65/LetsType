import { TYPING_DATA } from '../data/passages';

export function pickText(category = 'Random', difficulty = 'Medium') {
  let pool = TYPING_DATA.filter((item) =>
    (category === 'Random' || item.category === category) &&
    (!difficulty || item.difficulty === difficulty)
  );

  if (!pool.length) pool = TYPING_DATA;
  return pool[Math.floor(Math.random() * pool.length)].text;
}

export function getTypingStats(typed, target, elapsedSeconds) {
  const correct = [...typed].filter((char, index) => char === target[index]).length;
  const total = typed.length;
  const seconds = Math.max(0.1, elapsedSeconds || 0);
  const wpm = Math.round((correct / 5) / (seconds / 60));
  const accuracy = total ? Math.round((correct / total) * 100) : 100;

  return {
    wpm,
    accuracy,
    correct,
    incorrect: total - correct,
    total,
  };
}
