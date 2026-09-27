import { useEffect, useRef, useState } from 'react';
import { pickText, getTypingStats } from '../utils/typing';

export default function Practice() {
  const [text, setText] = useState(() => pickText('Random', null));
  const [typed, setTyped] = useState('');
  const [started, setStarted] = useState(0);
  const [, force] = useState(0);
  const input = useRef(null);

  useEffect(() => {
    const id = setInterval(() => force((value) => value + 1), 500);
    return () => clearInterval(id);
  }, []);

  const elapsed = started ? (Date.now() - started) / 1000 : 0;
  const stats = getTypingStats(typed, text, elapsed);

  const reset = () => {
    setText(pickText('Random', null));
    setTyped('');
    setStarted(0);
    setTimeout(() => input.current?.focus(), 0);
  };

  return (
    <main className="page">
      <div className="practice">
        <div className="practice-head">
          <div>
            <h1>Practice Mode</h1>
            <p>No timer. Just type, reset, and improve.</p>
          </div>
          <button className="secondary" onClick={reset}>New Text</button>
        </div>

        <div className="practice-area" onClick={() => input.current?.focus()}>
          <div className="practice-text">
            {[...text].map((char, index) => (
              <span
                key={index}
                className={`char ${index < typed.length ? (typed[index] === char ? 'correct' : 'wrong') : ''} ${index === typed.length ? 'current' : ''}`}
              >
                {char === ' ' ? '\u00a0' : char}
              </span>
            ))}
          </div>

          <input
            ref={input}
            className="typing-input"
            value={typed}
            onChange={(event) => {
              if (!started) setStarted(Date.now());
              setTyped(event.target.value.slice(0, text.length));
            }}
            autoComplete="off"
            spellCheck="false"
            aria-label="Practice typing input"
          />

          <div className="practice-stats">
            <span>WPM <strong>{stats.wpm}</strong></span>
            <span>Accuracy <strong>{stats.accuracy}%</strong></span>
            <span>Errors <strong>{stats.incorrect}</strong></span>
            <span>Characters <strong>{typed.length}/{text.length}</strong></span>
          </div>

          <button className="secondary" onClick={() => { setTyped(''); setStarted(0); input.current?.focus(); }}>
            Reset Practice
          </button>
        </div>
      </div>
    </main>
  );
}
