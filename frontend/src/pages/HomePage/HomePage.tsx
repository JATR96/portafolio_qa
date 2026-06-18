import Hero from '@sections/Hero/Hero';

import About from '@sections/About/About';

import Skills from '@sections/Skills/Skills';

import Projects from '@sections/Projects/Projects';

import Certifications from '@sections/Certifications/Certifications';

import Contact from '@sections/Contact/Contact';

import Footer from '@components/Footer/Footer';

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;