import { useTheme } from '@providers/ThemeProvider';

function HomePage(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">
            QA AUTOMATION ENGINEER
          </span>

          <h1 className="hero__title">
            Jesús Abel
          </h1>

          <p className="hero__subtitle">
            Portfolio Enterprise Architecture
          </p>

          <p className="hero__description">
            React • TypeScript • Playwright •
            Selenium • Appium • API Testing •
            CI/CD • DevOps
          </p>

          <div className="hero__actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="hero__button"
            >
              Theme: {theme}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;