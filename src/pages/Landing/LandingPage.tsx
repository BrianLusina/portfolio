import { FunctionComponent, Suspense } from 'react';
import ProjectList from '@containers/ProjectList';
import Hero from '@components/ui/Hero';
import ContactForm from '@components/ContactForm';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import About from './components/about';
import BlogSection from './components/blog';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <Hero />

      <About />

      <Suspense fallback={<PageLoader />}>
        <ProjectList />
      </Suspense>

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
