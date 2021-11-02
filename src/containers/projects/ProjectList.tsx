import { FunctionComponent } from 'react';
import Tile from '@components/tile';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';

const ProjectList: FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES());

  // TODO: loading indicator
  if (loading) return <div>Loading...</div>;

  // TODO: error view
  if (error) return <div>Error :(</div>;

  return (
    <section className="tiles">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {data.viewer.repositories.nodes.map(({ name, description }) => (
        <Tile
          key={name}
          title={name}
          description={description}
          link={name}
          poster=""
          onClick={() => {
            console.log('handleOpenProjectItem');
          }}
        />
      ))}
    </section>
  );
};

export default ProjectList;
