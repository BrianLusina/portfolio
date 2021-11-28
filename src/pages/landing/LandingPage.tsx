import { FunctionComponent } from 'react';
import ProjectList from '@containers/ProjectList';
import MetaInfo from '@components/MetaInfo';
import config from '@config';

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <MetaInfo
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
      />
      <ProjectList />
    </>
  );
};

export default LandingPage;
