import { FunctionComponent } from 'react';
import Tile from '../tile';
import projects from './projects';

const ProjectList: FunctionComponent = () => {
  return (
    <section className="tiles">
      {projects.map(({ id, title, link, image, description, classname }) => (
        <Tile
          key={id}
          title={title}
          description={description}
          className={classname}
          link={link}
          poster={image}
          onClick={() => {
            console.log('handleOpenProjectItem');
          }}
        />
      ))}
    </section>
  );
};

export default ProjectList;
