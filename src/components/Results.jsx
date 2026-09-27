export default function Results({ result, onAgain, onChange, onHome }) {
  const message = result.wpm < 25
    ? 'Beginner'
    : result.wpm < 40
      ? 'Getting Better'
      : result.wpm < 60
        ? 'Good Job'
        : result.wpm < 80
          ? 'Great Typing'
          : 'Excellent';

  return (
    <main className="page result">
      <div className="result-card">
        <div className="result-head">
          <div className="big">{result.wpm}</div>
          <h2>WPM</h2>
          <p>{message}</p>
        </div>

        <div className="result-grid">
          {[
            ['Accuracy', `${result.accuracy}%`],
            ['Correct', result.correct],
            ['Incorrect', result.incorrect],
            ['Characters', result.total],
          ].map(([label, value]) => (
            <div className="stat" key={label}>
              <div className="stat-label">{label}</div>
              <div className="stat-value">{value}</div>
            </div>
          ))}
        </div>

        <div className="result-actions">
          <button className="primary" onClick={onAgain}>Try Again</button>
          <button className="secondary" onClick={onChange}>Change Test</button>
          <button className="secondary" onClick={onHome}>Home</button>
        </div>
      </div>
    </main>
  );
}
