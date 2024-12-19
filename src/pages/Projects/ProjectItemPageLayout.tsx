import { FunctionComponent, ReactNode } from 'react';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ErrorPage from '@pages/Error';
import { Helmet } from 'react-helmet';
import Header from '@components/Header';
import ProjectImage from './assets/images/ProjectImage.jpg';
import { ProjectPageHero } from './styles';

type ProjectItemPageLayoutProps = {
  title: string;
  description: string;
  backgroundImageUrl?: string;
  loading: boolean;
  error?: Error;
  children: ReactNode;
};

/**
 * Project Item Page layout for common pages for items
 */
const ProjectItemPageLayout: FunctionComponent<ProjectItemPageLayoutProps> = ({
  title,
  description,
  backgroundImageUrl = ProjectImage,
  loading,
  error,
  children,
}) => {

  if (loading) return <PageLoader />;

  if (error) return <ErrorPage />;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />

      <ProjectPageHero
        className="rn-page-title-area pt--120 pb--190 bg_image"
        data-black-overlay="7"
        imageSrc={backgroundImageUrl}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectPageHero>

      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItemPageLayout;
