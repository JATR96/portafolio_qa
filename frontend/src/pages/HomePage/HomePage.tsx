import Hero from '@sections/Hero/Hero';

import About from '@sections/About/About';

import Skills from '@sections/Skills/Skills';

import Projects from '@sections/Projects/Projects';

import Certifications from '@sections/Certifications/Certifications';

import Contact from '@sections/Contact/Contact';

const HomePage = (): React.JSX.Element => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
};

export default HomePage;