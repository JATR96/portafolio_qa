import Hero from '@sections/Hero/Hero';

import About from '@sections/About/About';

import Skills from '@sections/Skills/Skills';

import Projects from '@sections/Projects/Projects';

import Certifications from '@sections/Certifications/Certifications';

const HomePage = (): React.JSX.Element => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
    </main>
  );
};

export default HomePage;