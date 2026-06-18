import { useTranslation } from 'react-i18next';

import { projects } from '@data/projects';

import styles from './Projects.module.scss';

const Projects = (): React.JSX.Element => {
  const { t } = useTranslation('homepage');

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t('projects.title')}
        </h2>

        <p className={styles.description}>
          {t('projects.description')}
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={styles.card}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;