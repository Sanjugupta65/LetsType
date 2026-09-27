import { useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Progress() {
  const [history, setHistory] = useLocalStorage('typingskill-history', []);

  const stats = useMemo(() => {
    if (!history.length) return { best: 0, avg: 0, bestAcc: 0, avgAcc: 0, time: 0 };

    return {
      best: Math.max(...history.map((item) => item.wpm)),
      avg: Math.round(history.reduce((sum, item) => sum + item.wpm, 0) / history.length),
      bestAcc: Math.max(...history.map((item) => item.accuracy)),
      avgAcc: Math.round(history.reduce((sum, item) => sum + item.accuracy, 0) / history.length),
      time: history.reduce((sum, item) => sum + item.duration, 0),
    };
  }, [history]);

  const recent = history.slice(0, 12);

  const clear = () => {
    if (window.confirm('Clear all typing history? This cannot be undone.')) {
      setHistory([]);
    }
  };

  return (
    <main className="page">
      <div className="dashboard">
        <div className="dash-head">
          <div>
            <h1>Your Progress</h1>
            <p>Your results stay in this browser using localStorage.</p>
          </div>
          {history.length > 0 && <button className="danger" onClick={clear}>Clear history</button>}
        </div>

        <div className="metric-grid">
          {[
            ['Best WPM', stats.best],
            ['Average WPM', stats.avg],
            ['Best Accuracy', `${stats.bestAcc}%`],
            ['Average Accuracy', `${stats.avgAcc}%`],
          ].map(([label, value]) => (
            <div className="metric" key={label}>
              <div className="stat-label">{label}</div>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="chart">
          <div className="table-top">
            <strong>Recent speed</strong>
            <span>{history.length} tests · {Math.round(stats.time / 60)} min</span>
          </div>
          {recent.length ? (
            <div className="chart-bars">
              {recent.slice().reverse().map((item, index) => (
                <div className="bar-wrap" key={item.id || index}>
                  <div className="bar" title={`${item.wpm} WPM`} style={{ height: `${Math.max(3, Math.min(100, item.wpm))}%` }} />
                  <span>{item.wpm}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty">Complete a typing test to start your progress history.</div>
          )}
        </div>

        <div className="table-card">
          <div className="table-top"><strong>Recent tests</strong></div>
          {recent.length ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Date</th><th>Duration</th><th>WPM</th><th>Accuracy</th><th>Errors</th></tr>
                </thead>
                <tbody>
                  {recent.map((item) => (
                    <tr key={item.id}>
                      <td>{new Date(item.date).toLocaleDateString()}</td>
                      <td>{item.duration}s</td>
                      <td>{item.wpm}</td>
                      <td>{item.accuracy}%</td>
                      <td>{item.incorrect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty">No tests yet.</div>
          )}
        </div>
      </div>
    </main>
  );
}
