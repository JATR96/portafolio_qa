import { GitCompareArrows, Contact, Mail } from 'lucide-react';

import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.title}>
            Jesus Abel
          </h3>

          <p className={styles.description}>
            QA Automation Engineer
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/JATR96"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitCompareArrows size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/jesus-abel-t-a5b67b16a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Contact size={20} />
          </a>

          <a
            href="mailto:contact@example.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © {currentYear} QA Automation Portfolio
      </div>
    </footer>
  );
};

export default Footer;