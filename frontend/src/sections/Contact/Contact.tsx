import { useTranslation } from 'react-i18next';

import { contactLinks } from '@data/contact';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Contact.module.scss';

const Contact =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'homepage',
      );

    return (
      <section
        id="contact"
        className={styles.contact}
      >
        <div
          className={styles.container}
        >
          <h2
            className={styles.title}
          >
            {t('contact.title')}
          </h2>

          <p
            className={
              styles.description
            }
          >
            {t(
              'contact.description',
            )}
          </p>

          <div
            className={styles.grid}
          >
            {contactLinks.map(
              (contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={
                    contact.id !==
                    'email'
                      ? '_blank'
                      : undefined
                  }
                  rel="noreferrer"
                  className={
                    styles.card
                  }
                >
                  <h3>
                    {contact.label}
                  </h3>

                  <p>
                    {contact.value}
                  </p>
                </a>
              ),
            )}
          </div>
        </div>
      </section>
    );
  };

export default Contact;