import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../utils/public-api';

export function useProducts() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });
  return { data, error, isLoading, isError };
}
