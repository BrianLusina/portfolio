import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import { unsluggify } from '@utils';
import { FunctionComponent, useState } from 'react';
import { redirect } from 'react-router-dom';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ErrorPage from '@pages/Error';
import { ProjectsPageSlickDot, ProjectsPageWrapper } from './styles';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@components/ui/breadcrumb';
import Slider from 'react-slick';
import Tile from '@components/Elements/Tile';
import Button from '@components/Elements/Button';
import ProjectImage from './ProjectImage.jpg';

/**
 * ProjectsPage that fetches open projects as a list
 * @returns
 */
// @ts-ignore
const ProjectsPage: FunctionComponent = () => {
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

  if (!data) return redirect('/404');

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
      <Helmet>
        <title>OSS</title>
        <meta name="description" content="Open Source Software" />
      </Helmet>
      <Breadcrumb title='Open Source Software' />

      <ProjectsPageWrapper className="page-wrapper">
        <div className="portfolio-area pt--90 pb--140 bg_color--1">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...ProjectsPageSlickDot}>
                      {fetchedProjects
                        .slice(0, 3)
                        .map(({ name, description, owner: { login } }) => (
                          <Tile
                            key={name}
                            className="portfolio mt--40"
                            thumbnail={ProjectImage}
                            poster={ProjectImage}
                            title={unsluggify(name)}
                            description={description}
                            link={`/project/${name}?owner=${login}`}
                          />
                        ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-area ptb--120 bg_color--5">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30">
                    <h2 className="title">All Open Source Projects</h2>
                    <p>
                      All open source projects I contribute to
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {fetchedProjects.map(({ name, description, owner: { login } }) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 " key={name}>
                    <Tile
                      className="portfolio mt--40"
                      title={unsluggify(name)}
                      description={description}
                      link={`/project/${name}?owner=${login}`}
                      buttonClassName="portfolio-button"
                      buttonText="View Details"
                    />
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 text-center">
                    {hasNextPage && (
                      <div className="col-lg-12">
                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                          <Button variant="primary" onClick={handleSeeMore}>
                            Show more
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectsPageWrapper>
    </>
  );
};

export default ProjectsPage;
