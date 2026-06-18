import styles from './Footer.module.scss';

const Footer = (): React.JSX.Element => {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
    >
      <div
        className={styles.container}
      >
        <div
          className={styles.brand}
        >
          <h3
            className={styles.logo}
          >
            JATR QA
          </h3>

          <p
            className={
              styles.description
            }
          >
            QA Automation Engineer
          </p>

          <p
            className={
              styles.specialties
            }
          >
            Automation • API Testing •
            Performance
          </p>
        </div>

        <div
          className={styles.links}
        >
          <a
            href="https://github.com/JATR96"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jesus-abel-t-a5b67b16a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jesus_tornero@outlook.com"
          >
            Email
          </a>
        </div>

        <div
          className={
            styles.copyright
          }
        >
          © {currentYear} JATR QA
        </div>
      </div>
    </footer>
  );
};

export default Footer;