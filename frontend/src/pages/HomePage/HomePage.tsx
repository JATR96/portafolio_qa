import Hero from '@sections/Hero/Hero';

import About from '@sections/About/About';

import Skills from '@sections/Skills/Skills';

import Projects from '@sections/Projects/Projects';

const HomePage = (): React.JSX.Element => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default HomePage;