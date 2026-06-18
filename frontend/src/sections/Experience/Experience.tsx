import { useTranslation } from 'react-i18next';

import { experiences } from '@data/experience';

import styles from './Experience.module.scss';

const Experience =
  (): React.JSX.Element => {
    return (
      <section id="experience">
        {experiences.map(
          (item) => (
            <article key={item.id}>
              <h3>{item.role}</h3>

              <p>{item.company}</p>

              <span>
                {item.period}
              </span>
            </article>
          ),
        )}
      </section>
    );
  };

export default Experience;