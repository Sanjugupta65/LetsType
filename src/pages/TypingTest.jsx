import { useCallback, useState } from 'react';
import Results from '../components/Results';
import TypingArea from '../components/TypingArea';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTypingTest } from '../hooks/useTypingTest';

export default function TypingTest({ navigate }) {
  const [duration, setDuration] = useState(60);
  const [difficulty, setDifficulty] = useState('Medium');
  const [category, setCategory] = useState('Random');
  const [result, setResult] = useState(null);
  const [keyboard, setKeyboard] = useState(true);
  const [, setHistory] = useLocalStorage('typingskill-history', []);

  const onFinish = useCallback((stats) => {
    setResult(stats);
    setHistory((history) => [
      { ...stats, id: Date.now(), date: new Date().toISOString() },
      ...history,
    ].slice(0, 100));
  }, [setHistory]);

  const test = useTypingTest({ duration, category, difficulty, onFinish });

  if (result) {
    return (
      <Results
        result={result}
        onAgain={() => {
          setResult(null);
          test.reset();
        }}
        onChange={() => setResult(null)}
        onHome={() => navigate('home')}
      />
    );
  }

  const stats = [
    ['WPM', test.wpm],
    ['Accuracy', `${test.accuracy}%`],
    ['Time', test.running ? `${test.remaining}s` : `${duration}s`],
    ['Characters', test.typed.length],
    ['Errors', test.typed.length - test.correct],
  ];

  return (
    <main className="page">
      <div className="test-shell">
        <div className="test-header">
          <div>
            <h1>Typing Test</h1>
            <p>Choose your settings, then focus on the text.</p>
          </div>
        </div>

        <div className="controls">
          <label>
            Duration
            <select value={duration} onChange={(event) => setDuration(Number(event.target.value))}>
              {[15, 30, 60, 120].map((value) => <option key={value} value={value}>{value} seconds</option>)}
            </select>
          </label>
          <label>
            Difficulty
            <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
              {['Easy', 'Medium', 'Hard'].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label>
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {['Random', 'General', 'Technology', 'Programming', 'Quotes'].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label>
            Mode
            <div className="mode-display">Timed</div>
          </label>
          <button className="primary" onClick={test.begin}>{test.running ? 'Running…' : 'Start Test'}</button>
        </div>

        <div className="stats">
          {stats.map(([label, value]) => (
            <div className="stat" key={label}>
              <div className="stat-label">{label}</div>
              <div className="stat-value">{value}</div>
            </div>
          ))}
        </div>

        <TypingArea test={test} keyboard={keyboard} setKeyboard={setKeyboard} />
      </div>
    </main>
  );
}
