import { useCallback, useEffect, useRef, useState } from 'react';
import { pickText, getTypingStats } from '../utils/typing';

export function useTypingTest({ duration, category, difficulty, onFinish }) {
  const [text, setText] = useState(() => pickText(category, difficulty));
  const [typed, setTyped] = useState('');
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(duration);
  const [elapsed, setElapsed] = useState(0);
  const inputRef = useRef(null);
  const textRef = useRef(text);
  const typedRef = useRef('');
  const startRef = useRef(0);
  const finishedRef = useRef(false);

  const finish = useCallback((seconds) => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    const current = typedRef.current;
    const target = textRef.current;
    const stats = getTypingStats(current, target, seconds);

    onFinish({
      ...stats,
      duration: Math.round(seconds),
      text: target,
    });
  }, [onFinish]);

  const reset = useCallback(() => {
    const next = pickText(category, difficulty);
    textRef.current = next;
    typedRef.current = '';
    finishedRef.current = false;
    setText(next);
    setTyped('');
    setRunning(false);
    setRemaining(duration);
    setElapsed(0);
  }, [category, difficulty, duration]);

  useEffect(() => {
    // reset();
  }, [reset]);

  useEffect(() => {
    if (!running) return undefined;

    const id = setInterval(() => {
      const seconds = (Date.now() - startRef.current) / 1000;
      setElapsed(Math.min(duration, seconds));
      setRemaining(Math.max(0, Math.ceil(duration - seconds)));

      if (seconds >= duration) {
        clearInterval(id);
        setRunning(false);
        finish(duration);
      }
    }, 100);

    return () => clearInterval(id);
  }, [running, duration, finish]);

  const begin = () => {
    if (running) return;
    finishedRef.current = false;
    startRef.current = Date.now();
    setRunning(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const onInput = (event) => {
    if (!running) return;

    const value = event.target.value.slice(0, textRef.current.length);
    typedRef.current = value;
    setTyped(value);

    if (value.length >= textRef.current.length) {
      const seconds = Math.max(0.1, (Date.now() - startRef.current) / 1000);
      setElapsed(seconds);
      setRunning(false);
      finish(seconds);
    }
  };

  const correct = [...typed].filter((char, index) => char === text[index]).length;

  return {
    text,
    typed,
    pos: typed.length,
    running,
    remaining,
    elapsed,
    correct,
    inputRef,
    begin,
    reset,
    onInput,
    wpm: elapsed ? Math.round((correct / 5) / (elapsed / 60)) : 0,
    accuracy: typed.length ? Math.round((correct / typed.length) * 100) : 100,
  };
}
