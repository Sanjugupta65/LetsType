export default function Keyboard({ next }) {
  const rows = [
    ['1','2','3','4','5','6','7','8','9','0'],
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M'],
    ['SPACE','BACKSPACE'],
  ];

  return (
    <div className="keyboard">
      {rows.map((row) => (
        <div className="keyboard-row" key={row.join('')}>
          {row.map((key) => (
            <div
              key={key}
              className={`key ${key === 'SPACE' ? 'space' : ''} ${key === 'BACKSPACE' ? 'wide' : ''} ${next === key ? 'next' : ''}`}
            >
              {key === 'SPACE' ? 'Space' : key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
