import { useTranslation } from 'react-i18next';

import { certifications } from '@data/certifications';

import styles from './Certifications.module.scss';

const Certifications =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'homepage',
      );

    const featuredCertification =
      certifications.find(
        (
          certification,
        ) =>
          certification.featured,
      );

    const secondaryCertifications =
      certifications.filter(
        (
          certification,
        ) =>
          !certification.featured,
      );

    return (
      <section
        id="certifications"
        className={
          styles.certifications
        }
      >
        <div
          className={
            styles.container
          }
        >
          <h2
            className={
              styles.title
            }
          >
            {t(
              'certifications.title',
            )}
          </h2>

          <p
            className={
              styles.description
            }
          >
            {t(
              'certifications.description',
            )}
          </p>

          {featuredCertification && (
            <article
              className={
                styles.featured
              }
            >
              <span
                className={
                  styles.featuredBadge
                }
              >
                Featured
              </span>

              <h3
                className={
                  styles.featuredTitle
                }
              >
                {
                  featuredCertification.title
                }
              </h3>

              <p>
                {
                  featuredCertification.issuer
                }
              </p>

              <p>
                {
                  featuredCertification.year
                }
              </p>
            </article>
          )}

          <div
            className={
              styles.grid
            }
          >
            {secondaryCertifications.map(
              (
                certification,
              ) => (
                <article
                  key={
                    certification.id
                  }
                  className={
                    styles.card
                  }
                >
                  <h3>
                    {
                      certification.title
                    }
                  </h3>

                  <p>
                    {
                      certification.issuer
                    }
                  </p>

                  <p>
                    {
                      certification.year
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    );
  };

export default Certifications;