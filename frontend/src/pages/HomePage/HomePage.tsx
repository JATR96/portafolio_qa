import {
  lazy,
  Suspense,
} from 'react';

import PageLoader
  from '@components/PageLoader/PageLoader';

import styles from './HomePage.module.scss';

const Hero = lazy(
  () =>
    import(
      '@sections/Hero/Hero'
    ),
);

const About = lazy(
  () =>
    import(
      '@sections/About/About'
    ),
);

const Skills = lazy(
  () =>
    import(
      '@sections/Skills/Skills'
    ),
);

const Experience = lazy(
  () =>
    import(
      '@sections/Experience/Experience'
    ),
);

const Projects = lazy(
  () =>
    import(
      '@sections/Projects/Projects'
    ),
);

const Dashboard = lazy(
  () =>
    import(
      '@sections/Dashboard/Dashboard'
    ),
);

const Certifications = lazy(
  () =>
    import(
      '@sections/Certifications/Certifications'
    ),
);

const Contact = lazy(
  () =>
    import(
      '@sections/Contact/Contact'
    ),
);

const HomePage =
  (): React.JSX.Element => {
    return (
      <main
        id="home"
        className={styles.home}
      >
        <Suspense
          fallback={<PageLoader />}
        >
          <Hero />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Dashboard />

          <Certifications />

          <Contact />
        </Suspense>
      </main>
    );
  };

export default HomePage;