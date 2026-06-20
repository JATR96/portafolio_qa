import {
  lazy,
  Suspense,
} from 'react';

import PageLoader
  from '@components/PageLoader/PageLoader';

import SectionReveal
  from '@components/SectionReveal/SectionReveal';  

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
        <Suspense fallback={<PageLoader />}>
          <Hero />

          <SectionReveal>
            <About />
          </SectionReveal>

          <SectionReveal>
            <Skills />
          </SectionReveal>

          <SectionReveal>
            <Experience />
          </SectionReveal>

          <SectionReveal>
            <Projects />
          </SectionReveal>

          <SectionReveal>
            <Dashboard />
          </SectionReveal>

          <SectionReveal>
            <Certifications />
          </SectionReveal>

          <SectionReveal>
            <Contact />
          </SectionReveal>
        </Suspense>
      </main>
    );
  };

export default HomePage;