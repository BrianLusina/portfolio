import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '@graphQl/queries';
import { unsluggify } from '@utils';
import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useParseQuery from '@hooks/useParseQuery';
import config from '@config';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ErrorPage from '@pages/Error';
import ProjectImage from './ProjectImage.jpg';

const ProjectPage: FunctionComponent = () => {
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

  if (loading) return <PageLoader />;

  if (error) return <ErrorPage />;

  // TODO: 404 PAGE
  if (!data) return <div>Nothing found</div>;

  const { repository } = data;
  const { name, description, url, object } = repository;

  return (
    <>
      <h1>{unsluggify(name)}</h1>
      <span className="image main">
        <img src={ProjectImage} alt={slug} />
      </span>
      <p>{description}</p>
      <br />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{object.text}</ReactMarkdown>
      <p>
        View full project on <a href={url}>GitHub</a>
      </p>
    </>
  );
};

export default ProjectPage;
