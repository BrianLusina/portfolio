import { useEffect } from 'react';
import { captureException } from '@monitoring';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '@graphQl/queries';
import useAsync from '@hooks/async/useAsync';

const fetchOssData = async (
    direction: 'ASC' | 'DESC',
    field: "NAME" | "CREATED_AT" | "UPDATED_AT" | "STARGAZERS" | "PUSHED_AT",
    currentSize: number
): Promise<EventInfo> => {
  try {
    const { loading, error, data, fetchMore } = useQuery<
    GetRepositoriesData,
    GetRepositoriesVariables
  >(GET_REPOSITORIES, {
    variables: {
      direction: direction,
      field: field,
      first: currentSize,
    },
  });

  const fetchedProjects = data ? data.viewer.repositories.nodes : [];
  const hasNextPage = data ? data.viewer.repositories.pageInfo.hasNextPage : false;

    return {
        data: fetchedProjects,
        hasNextPage
    };
  } catch (error) {
    captureException(error as Error);
    throw new Error(`Failed to fetch event information`);
  }
};

/**
 * Hook to fetch event information
 * @param {string} slug slug of event
 */
export default function useFetchOss(
    direction: 'ASC' | 'DESC',
    field: "NAME" | "CREATED_AT" | "UPDATED_AT" | "STARGAZERS" | "PUSHED_AT",
    first: number
): {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: RepositoryObject[];
  error: Error | null | undefined;
} {
  const { data, status, error, run } = useAsync({
    status: 'pending',
    data: null,
    error: null,
  });

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    return run(fetchOssData(direction, field, first));
  }, [direction, field, first, run]);

  return {
    status,
    data: data as RepositoryObject[],
    error,
  };
}