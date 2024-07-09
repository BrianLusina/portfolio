import { useEffect } from 'react';
import { IDLE, LOADING_STATES } from '@constants';
import { captureException } from '@monitoring';
import aboutApi from '@aboutApi';
import useAsync from '@hooks/async/useAsync';

const fetchMainSkills = async ():Promise<MainSkillResponseItemDto[]> => {
    try {
      const data = await aboutApi.mainSkills();
      return data.items;
    } catch (error) {
      captureException(error as Error);
      throw new Error(`Failed to fetch main skills`)
    }
};

/**
 * Hook to fetch main skills
 */
export default function useFetchMainSkills(): {
  status: LOADING_STATES;
  data: MainSkillResponseItemDto[] | null | undefined;
  error: Error | null | undefined;
} {
  const { data, status, error, run } = useAsync<MainSkillResponseItemDto[]>({
    status: IDLE,
    data: null,
    error: null,
  });

  useEffect(() => {
    return run(fetchMainSkills());
  }, [run]);

  return {
    status,
    data,
    error,
  };
}