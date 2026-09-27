import Icon from '../components/Icon';

export default function Home({ navigate }) {
  const features = [
    ['bolt', 'Real-time', 'Feedback', 'Get instant feedback on your typing speed and accuracy.'],
    ['users', 'Challenge', 'Yourself', 'Build consistency with focused typing sessions.'],
    ['trophy', 'Detailed', 'Statistics', 'Track your performance and improvement over time.'],
    ['sun', 'Personal', 'Progress', 'Keep your results locally and see your trends.'],
    ['gauge', 'Minimalist', 'Interface', 'A clean workspace designed to keep you focused.'],
  ];
  const steps = [
    ['01', 'Choose your test', 'Pick a duration, difficulty, and text category.'],
    ['02', 'Start typing', 'Follow the text and let real-time stats guide you.'],
    ['03', 'Check your results', 'Review speed, accuracy, errors, and characters.'],
    ['04', 'Improve your score', 'Use your history to spot patterns and keep practicing.'],
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">A focused typing workspace</div>
        <h1>Type faster.<br />Type smarter. <span className="accent">Improve every day.</span></h1>
        <p>Practice typing, measure your speed and accuracy, and build confidence with real-time feedback in a clean, distraction-free interface.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => navigate('test')}>Start Typing →</button>
          <button className="secondary" onClick={() => navigate('progress')}>View Progress</button>
        </div>
      </section>

      <section>
        <h2 className="section-title">Why <span className="accent">TypingSkill?</span></h2>
        <div className="feature-grid">
          {features.map(([icon, title, suffix, description]) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon name={icon} /></div>
              <h3>{title}<span>{suffix}</span></h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how">
        <h2 className="section-title">How it <span className="accent">works</span></h2>
        <div className="steps">
          {steps.map(([number, title, description]) => (
            <article className="step" key={number}>
              <div className="step-number">{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
