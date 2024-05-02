import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import { FunctionComponent, useState } from 'react';
import { redirect } from 'react-router-dom';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ErrorPage from '@pages/Error';
import ProjectPageLayout from '../ProjectPageLayout';

/**
 * Work Projects Page that fetches work/client projects as a list
 */
// @ts-ignore
const WorkProjectsPage: FunctionComponent = () => {
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
  
  const workProjects = fetchedProjects.map(({ name, description, owner: { login } }) => ({
    name,
    description,
    link: `/projects/work/${name}?owner=${login}`,
  }))

  return (
    <ProjectPageLayout
      title='Work'
      description='Client Projects'
      projects={workProjects}
      hasNextPage={hasNextPage} 
      loading={loading}
      error={error}
      fetchMoreCallback={handleSeeMore}
    />
  );
};

export default WorkProjectsPage;
