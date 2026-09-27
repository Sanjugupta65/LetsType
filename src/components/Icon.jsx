const icons = {
  bolt: '⚡', gauge: '◔', book: '▤', users: '♧', trophy: '♜', sun: '☼', moon: '◐', menu: '☰', close: '×'
};

export default function Icon({ name }) {
  return <span className="icon" aria-hidden="true">{icons[name] || '•'}</span>;
}
