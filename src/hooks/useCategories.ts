import { useQuery } from '@tanstack/react-query';
import { fetchAllCategories } from '../utils/public-api';

export function useCategories() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchAllCategories,
    staleTime: 1000 * 60 * 5,
  });

  return { data, error, isLoading, isError };
}
