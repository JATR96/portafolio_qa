import Hero from '@sections/Hero/Hero';

import About from '@sections/About/About';

import Skills from '@sections/Skills/Skills';

import Experience from '@sections/Experience/Experience';

import Projects from '@sections/Projects/Projects';

import Dashboard from '@sections/Dashboard/Dashboard';

import Certifications from '@sections/Certifications/Certifications';

import Contact from '@sections/Contact/Contact';

import Footer from '@components/Footer/Footer';

import SEO from '@components/SEO/SEO';

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <SEO
        title="JATR QA | QA Automation Engineer"
        description="QA Automation Engineer especializado en Playwright, API Testing, Performance Testing y Quality Engineering."
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Dashboard />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;