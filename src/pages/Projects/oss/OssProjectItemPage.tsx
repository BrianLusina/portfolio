import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '@graphQl/queries';
import { unsluggify } from '@utils';
import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useParseQuery from '@hooks/useParseQuery';
import config from '@config';
import ProjectItemPageLayout from '../ProjectItemPageLayout';

// @ts-ignore
const OssProjectItemPage: FunctionComponent = () => {
  const { slug } = useParams();
  const query = useParseQuery();
  const owner = query.get('owner');

  const { loading, error, data } = useQuery<GetRepositoryData, GetRepositoryVariables>(
    GET_REPOSITORY,
    {
      variables: {
        // empty string should be fine here, we should get an error from the API
        // which should just return a 404 PAGE
        name: slug || '',
        owner: owner || config.owner,
      },
    },
  );

  // TODO: what to do if data is not available
  if(!data) {
    return
  }

  const { repository } = data;
  const { name, description, url, object } = repository;
  const title = unsluggify(name);

  return (
    <ProjectItemPageLayout title={title} description={description} loading={loading} error={error}>
      <div className="inner">
        <h2>{title}</h2>
        <p className="subtitle">{description}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod
          viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua.{' '}
        </p>

        <div className="portfolio-view-list d-flex flex-wrap">
          <div className="port-view">
            <span>Branch</span>
            <h4>Ability</h4>
          </div>

          <div className="port-view">
            <span>Project Types</span>
            <h4>Website</h4>
          </div>

          <div className="port-view">
            <span>Program</span>
            <h4>View Project</h4>
          </div>
        </div>

        {/* TODO: share project to social platform */}
        {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
      </div>

      <div className="portfolio-thumb-inner">
        <div className="thumb position-relative mb--30">
          <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images" />
          {/* TODO: modal video */}
          {/* <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="ZOoVOfieAF8"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <button className="video-popup position-top-center" onClick={this.openModal}>
                      <span className="play-icon"></span>
                    </button> */}
        </div>

        <div className="thumb mb--30">
          <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images" />
        </div>

        <div className="thumb">
          <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images" />
        </div>
      </div>

      <div className="inner">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{object.text}</ReactMarkdown>
        <p>
          View full project on <a href={url}>GitHub</a>
        </p>
      </div>
    </ProjectItemPageLayout>
  );
};

export default OssProjectItemPage;
