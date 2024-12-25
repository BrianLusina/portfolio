import { FunctionComponent } from 'react';
import Hero from '@components/ui/Hero';
import ContactForm from '@components/ContactForm';
import About from './components/about';
import Header from '@components/Header';
import BlogSection from './components/blog';
import WorkSection from './components/work';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <WorkSection />

      <BlogSection blogs={[]} />
 
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
