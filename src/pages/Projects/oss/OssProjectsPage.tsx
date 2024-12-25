import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import { FunctionComponent, useState } from 'react';
import ProjectPageLayout from '../ProjectPageLayout';

/**
 * OSS Projects Page that fetches all open projects as a list and displays them
 */
const OssProjectsPage: FunctionComponent = () => {
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

  const ossProjects = fetchedProjects.map(({ name, description, owner: { login } }) => ({
    name,
    description,
    link: `/projects/oss/${name}?owner=${login}`,
  }))

  return (
      <ProjectPageLayout
        title='OSS'
        description='Open Source Software'
        projects={ossProjects}
        hasNextPage={hasNextPage} 
        loading={loading}
        error={error}
        fetchMoreCallback={handleSeeMore}
      />
  );
};

export default OssProjectsPage;
