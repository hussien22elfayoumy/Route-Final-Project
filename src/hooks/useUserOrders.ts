import { useQuery } from '@tanstack/react-query';
import { fetchUserOrders } from '../utils/orders-api';
import { useUserCtx } from '../contexts/UserContext';

export function useUserOrders() {
  const { userId } = useUserCtx();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['allOrders'],
    queryFn: () => fetchUserOrders(userId),
    staleTime: 0,
  });
  return { data, error, isLoading, isError };
}
