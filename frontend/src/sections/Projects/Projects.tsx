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
          <motion.article
            className={styles.featured}
            variants={fadeUp}
          >
            <div>
              <motion.span
                className={styles.featuredBadge}
                variants={fadeUp}
              >
                Featured Project
              </motion.span>

              <motion.h3
                className={styles.featuredTitle}
                variants={fadeUp}
              >
                {featuredProject.title}
              </motion.h3>

              <motion.p
                className={styles.featuredDescription}
                variants={fadeUp}
              >
                {
                  featuredProject.description
                }
              </motion.p>

              <div
                className={styles.featuredbadges}
              >
                {featuredProject.stack.map(
                  (technology) => (
                    <motion.span
                      key={technology}
                      className={styles.badge}
                      variants={fadeUp}
                    >
                      {technology}
                    </motion.span>
                  ),
                )}
              </div>

              <motion.a
                href={
                  featuredProject.githubUrl
                }
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                variants={fadeUp}
              >
                View Repository
              </motion.a>
            </div>
          </motion.article>
        )}

        <div className={styles.grid}>
          {secondaryProjects.map(
            (project) => (
              <motion.article
                key={project.id}
                className={styles.card}
                variants={fadeUp}
              >
                <motion.h3
                  className={styles.cardTitle}
                  variants={fadeUp}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className={styles.cardDescription}
                  variants={fadeUp}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className={styles.badges}
                  variants={fadeUp}
                >
                  {project.stack.map(
                    (
                      technology,
                    ) => (
                      <span
                        key={technology}
                        className={styles.badge}
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </motion.div>

                <motion.a
                  href={
                    project.githubUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                  variants={fadeUp}
                >
                  GitHub
                </motion.a>
              </motion.article>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;