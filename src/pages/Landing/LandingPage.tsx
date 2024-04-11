import { FunctionComponent } from 'react';
import ProjectList from '@containers/ProjectList';
import Hero from '@components/ui/Hero';
import ContactForm from '@components/ContactForm';
import About from './components/about';
import BlogSection from './components/blog';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <Hero />
      {/* <MetaInfo
        author={{
          name: config.author.name,
          url: config.author.linkedIn,
        }}
        project={{
          name: config.title,
          url: config.author.githubRepos,
        }}
        description={
          <p>
            This documents some of the projects I have done over the years. With details on the
            tooling used as well as the reasons for the projects.
          </p>
        }
      /> */}

      <About />
      
      {/* maybe service area */}
      
      <ProjectList />

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
