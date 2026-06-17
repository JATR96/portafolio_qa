import styles from './HomePage.module.scss';

const HomePage = (): React.JSX.Element => {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          QA Automation Portfolio
        </h1>

        <p className={styles.subtitle}>
          Bootstrap Runtime Ready
        </p>

        <p className={styles.description}>
          React 19 + TypeScript + Vite +
          Zustand + React Query +
          SCSS Modules.
        </p>
      </div>
    </main>
  );
};

export default HomePage;