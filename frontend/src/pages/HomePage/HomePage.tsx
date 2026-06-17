import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main
      id="home"
      className={styles.home}
    >
      <section className={styles.hero}>
        <h1 className={styles.title}>
          QA Automation Engineer
        </h1>

        <p className={styles.subtitle}>
          Enterprise Testing,
          Automation, Performance
          and Quality Engineering
        </p>
      </section>
    </main>
  );
};

export default HomePage;