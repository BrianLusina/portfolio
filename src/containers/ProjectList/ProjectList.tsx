import { FunctionComponent, useState } from 'react';
import Tile from '@components/Elements/Tile';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import Button from '@components/Elements/Button';
import ErrorPage from '@pages/Error';
import { ProjectsButtonContainer } from './styles';
import { unsluggify } from '@utils';

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
    <div id="portfolio" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Latest Projects</h2>
                  <p>
                    Some of the latest projects I have worked on
                  </p>
                </div>
              </div>
            </div>

            <section className="row">
              {data &&
                fetchedProjects.map(({ name, description, owner: { login } }) => (
                  <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={name}>
                    <Tile
                      className="portfolio text-center mt--40"
                      title={unsluggify(name)}
                      description={description}
                      link={`${name}?owner=${login}`}
                    />
                  </div>
                ))}
            </section>

            {hasNextPage && (
              <ProjectsButtonContainer className="row gtr-uniform">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <Button variant="primary" onClick={handleSeeMore}>
                      Show more
                    </Button>
                  </div>
                </div>
              </ProjectsButtonContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
