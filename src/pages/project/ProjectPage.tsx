import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '@graphQl/queries';
import { unsluggify } from '@utils';
import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useParseQuery from '@hooks/useParseQuery';
import config from '@config';
import ProjectImage from './ProjectImage.jpg';

const ProjectPage: FunctionComponent = () => {
  const { slug } = useParams<RoutingProjectItemParams>();
  const query = useParseQuery();
  const owner = query.get('owner');

  const { loading, error, data } = useQuery<GetRepositoryData, GetRepositoryVariables>(
    GET_REPOSITORY,
    {
      variables: {
        name: slug,
        owner: owner || config.owner,
      },
    },
  );

  // TODO: loading indicator
  if (loading) return <div>Loading...</div>;

  // TODO: error view
  if (error) return <div>Error :(</div>;

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
