import { QueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getPeople, getCompanies, unlockContact, createConnection } from './api';

// Create a custom query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

// Export custom hooks for API calls
export function usePeopleQuery(params: { page?: number, pageSize?: number, keyword?: string, sortBy?: string }) {
  return useQuery({
    queryKey: ['people', params],
    queryFn: () => getPeople(params),
  });
}

export function useCompaniesQuery() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
  });
}

export function useUnlockContactMutation() {
  return useMutation({
    mutationFn: (personId: number) => unlockContact(personId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['people'] });
    },
  });
}

export function useCreateConnectionMutation() {
  return useMutation({
    mutationFn: (personId: number) => createConnection(personId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['people'] });
    },
  });
}
