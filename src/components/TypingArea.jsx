import { useEffect } from 'react';
import Keyboard from './Keyboard';

export default function TypingArea({ test, keyboard, setKeyboard }) {
  useEffect(() => {
    if (test.running) test.inputRef.current?.focus();
  }, [test.running, test.inputRef]);

  const next = (test.text[test.pos] || ' ').toUpperCase();

  return (
    <div className="typing-card" onClick={() => test.inputRef.current?.focus()}>
      <div className="typing-text">
        {[...test.text].map((char, index) => (
          <span
            key={index}
            className={`char ${index < test.typed.length ? (test.typed[index] === char ? 'correct' : 'wrong') : ''} ${index === test.pos ? 'current' : ''}`}
          >
            {char === ' ' ? '\u00a0' : char}
          </span>
        ))}
      </div>

      <input
        ref={test.inputRef}
        className="typing-input"
        value={test.typed}
        onChange={test.onInput}
        aria-label="Typing input"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
      />

      <div className="progress">
        <span style={{ width: `${Math.min(100, (test.pos / Math.max(1, test.text.length)) * 100)}%` }} />
      </div>

      <div className="typing-footer">
        <span className="hint">
          {test.running ? 'Keep going — eyes ahead.' : 'Press Start Test when you\'re ready.'}
        </span>
        <div className="toggle">
          Keyboard
          <button
            className={`switch ${keyboard ? 'on' : ''}`}
            aria-label="Toggle keyboard visualization"
            onClick={(event) => {
              event.stopPropagation();
              setKeyboard((value) => !value);
            }}
          >
            <i />
          </button>
        </div>
      </div>

      {keyboard && <Keyboard next={next} />}
    </div>
  );
}
