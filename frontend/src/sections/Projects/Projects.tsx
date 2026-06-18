import { useTranslation } from 'react-i18next';

import { projects } from '@data/projects';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Projects.module.scss';

const Projects = (): React.JSX.Element => {

  const featuredProject =
    projects.find(
      (project) => project.featured,
    );

  const secondaryProjects =
    projects.filter(
      (project) => !project.featured,
    );

  const { t } = useTranslation('homepage');

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <motion.h2
          className={styles.title}
          variants={fadeUp}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.p
          className={styles.description}
          variants={fadeUp}
        >
          {t('projects.description')}
        </motion.p>

        {featuredProject && (
          <article
            className={styles.featured}
          >
            <div>
              <span
                className={styles.featuredBadge}
              >
                Featured Project
              </span>

              <h3
                className={
                  styles.featuredTitle
                }
              >
                {featuredProject.title}
              </h3>

              <p
                className={
                  styles.featuredDescription
                }
              >
                {
                  featuredProject.description
                }
              </p>

              <div
                className={
                  styles.featuredbadges
                }
              >
                {featuredProject.stack.map(
                  (technology) => (
                    <span
                      key={technology}
                      className={
                        styles.badge
                      }
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>

              <a
                href={
                  featuredProject.githubUrl
                }
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                View Repository
              </a>
            </div>
          </article>
        )}

        <div className={styles.grid}>
          {secondaryProjects.map(
            (project) => (
              <article
                key={project.id}
                className={styles.card}
              >
                <h3
                  className={
                    styles.cardTitle
                  }
                >
                  {project.title}
                </h3>

                <p
                  className={
                    styles.cardDescription
                  }
                >
                  {project.description}
                </p>

                <div
                  className={
                    styles.badges
                  }
                >
                  {project.stack.map(
                    (
                      technology,
                    ) => (
                      <span
                        key={
                          technology
                        }
                        className={
                          styles.badge
                        }
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                <a
                  href={
                    project.githubUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              </article>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;