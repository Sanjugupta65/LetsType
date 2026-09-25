import { useState } from 'react';
import Icon from './Icon';


export default function Header({ page, navigate, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['home', 'Home', 'gauge'],
    ['test', 'Typing Test', 'bolt'],
    ['practice', 'Practice', 'book'],
    ['progress', 'Progress', 'trophy'],
  ];

  const go = (nextPage) => {
    navigate(nextPage);
    setOpen(false);
  };

  return (
    <header className="nav">
      <button className="brand" onClick={() => go('home')}>
        <span className="brand-mark"><Icon name="bolt" /></span>
        LetsType
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([id, label, icon]) => (
          <button
            key={id}
            className={`nav-link ${page === id ? 'active' : ''}`}
            onClick={() => go(id)}
          >
            <Icon name={icon} />
            {label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="icon-btn"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <button className="primary small" onClick={() => go('test')}>Start Test →</button>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
