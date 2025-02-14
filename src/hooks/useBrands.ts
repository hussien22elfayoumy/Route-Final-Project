import { useQuery } from '@tanstack/react-query';
import { fetchAllBrands } from '../utils/public-api';

export function useBrands() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchAllBrands,
    staleTime: 1000 * 60 * 5,
  });

  return { data, error, isLoading, isError };
}
