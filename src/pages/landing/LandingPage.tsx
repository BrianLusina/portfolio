import { FunctionComponent } from 'react';
import ProjectList from '@containers/projects';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <header>
        <h1>
          This is Liber, a journal of some projects done by{' '}
          <a href="https://www.linkedin.com/in/brianlusina/">@Lusina</a>
          <br />
          View <i>some</i> of them{' '}
          <a href="https://github.com/BrianLusina?tab=repositories">here</a>.
        </h1>
        <p>
          This documents some of the projects I have done over the years. With details on the
          tooling used as well as the reasons for the projects.
        </p>
      </header>
      <ProjectList />
    </>
  );
};

export default LandingPage;
