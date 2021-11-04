import { FunctionComponent } from 'react';
import Tile from '@components/tile';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';

const ProjectList: FunctionComponent = () => {
  const { loading, error, data } = useQuery<GetRepositoriesData, GetRepositoriesVariables>(
    GET_REPOSITORIES,
    {
      variables: {
        direction: 'ASC',
        field: 'NAME',
        first: 10,
      },
    },
  );

  // TODO: loading indicator
  if (loading) return <div>Loading...</div>;

  // TODO: error view
  if (error) return <div>Error :(</div>;

  return (
    <section className="tiles">
      {data &&
        data.viewer.repositories.nodes.map(({ name, description }) => (
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
