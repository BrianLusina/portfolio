import { FunctionComponent, useState } from 'react';
import Tile from '@components/Elements/Tile';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import Button from '@components/Elements/Button';
import ErrorPage from '@pages/Error';
import { randomlyPickCssClass } from './utils';
import { ProjectsButtonContainer } from './styles';

const ProjectList: FunctionComponent = () => {
  const itemsPerPage = 20;
  const [currentSize, setCurrentSize] = useState<number>(itemsPerPage);
  const { loading, error, data, fetchMore } = useQuery<
    GetRepositoriesData,
    GetRepositoriesVariables
  >(GET_REPOSITORIES, {
    variables: {
      direction: 'ASC',
      field: 'NAME',
      first: currentSize,
    },
  });

  const fetchedProjects = data ? data.viewer.repositories.nodes : [];
  const hasNextPage = data ? data.viewer.repositories.pageInfo.hasNextPage : false;
  let fetchedSize = fetchedProjects.length;

  if (loading) return <PageLoader />;

  if (error) return <ErrorPage />;

  const handleSeeMore = (): void => {
    if (hasNextPage) {
      fetchedSize += currentSize;
      setCurrentSize(fetchedSize);

      fetchMore({
        variables: {
          first: fetchedSize,
        },
      });
    }
  };

  return (
    <>
      <section className="tiles">
        {data &&
          fetchedProjects.map(({ name, description, owner: { login } }) => (
            <Tile
              key={name}
              className={randomlyPickCssClass()}
              title={name}
              description={description}
              link={`${name}?owner=${login}`}
            />
          ))}
      </section>
      {hasNextPage && (
        <ProjectsButtonContainer className="row gtr-uniform">
          <div className="col-12">
            <Button variant="primary" onClick={handleSeeMore}>
              Show more
            </Button>
          </div>
        </ProjectsButtonContainer>
      )}
    </>
  );
};

export default ProjectList;
