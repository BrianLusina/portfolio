import { unsluggify } from '@utils';
import { FunctionComponent } from 'react';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ErrorPage from '@pages/Error';
import { ProjectsPageSlickDot, ProjectsPageWrapper } from './styles';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@components/ui/breadcrumb';
import Slider from 'react-slick';
import Tile from '@components/Elements/Tile';
import Button from '@components/Elements/Button';
import HexagonBackgroundImage from '@assets/images/bg/grayhexagons.jpg';
import Header from '@components/Header';
import signatureLogo from '@assets/images/logos/lusina_signature_dark.png';
import { ProjectPageLayoutProps } from './ProjectPageLayout.types';
import ProjectImage from './assets/images/ProjectImage.jpg';


/**
 * Project page layout that is common for all project page types
 * */
const ProjectPageLayout: FunctionComponent<ProjectPageLayoutProps> = ({
  title,
  description,
  projects,
  loading,
  error,
  hasNextPage,
  fetchMoreCallback,
}) => {
  if (loading) return <PageLoader />;

  if (error) return <ErrorPage />;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header logo={signatureLogo}/>
      <Breadcrumb title={title} description={description} backgroundImage={HexagonBackgroundImage} />

      <ProjectsPageWrapper className="page-wrapper">
        <div className="portfolio-area pt--90 pb--140 bg_color--1">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...ProjectsPageSlickDot}>
                      {projects.slice(0, 3).map(({ name, description, link }) => (
                        <Tile
                          key={name}
                          className="portfolio mt--40"
                          thumbnail={ProjectImage}
                          poster={ProjectImage}
                          title={unsluggify(name)}
                          description={description}
                          link={link}
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
                    <h2 className="title">All {title} Projects</h2>
                    <p>All {title} I contribute to</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {projects.map(({ name, description, link }) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 " key={name}>
                    <Tile
                      className="portfolio mt--40"
                      title={unsluggify(name)}
                      description={description}
                      link={link}
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
                          <Button variant="primary" onClick={fetchMoreCallback}>
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

export default ProjectPageLayout;
