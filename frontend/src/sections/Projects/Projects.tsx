import { useTranslation } from 'react-i18next';

import { projects } from '@data/projects';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Projects.module.scss';

const Projects = (): React.JSX.Element => {
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

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={fadeUp}
            >
              <h3 className={styles.cardTitle}>
                {project.title}
              </h3>

              <p
                className={
                  styles.cardDescription
                }
              >
                {project.description}
              </p>

              <div className={styles.badges}>
                {project.stack.map(
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
                  project.githubUrl
                }
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;