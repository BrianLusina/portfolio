import { FunctionComponent } from 'react';
import Tile from '../tile';
import projects from './projects';

const ProjectList: FunctionComponent = () => {
  return (
    <section className="tiles">
      {projects.map(({ id, title, description, classname }) => (
        <Tile
          key={id}
          title={title}
          description={description}
          className={classname}
          onClick={() => {
            console.log('handleOpenProjectItem');
          }}
        />
      ))}
    </section>
  );
};

export default ProjectList;
