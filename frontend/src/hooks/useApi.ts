import { useQuery, useMutation, useQueryClient, QueryKey } from '@tanstack/react-query';
import { 
    getPeople, 
    getCompanies, 
    unlockContact, 
    createConnection 
} from '../lib/api';

// Define query keys as constants for consistency
const QUERY_KEYS = {
    PEOPLE: 'people',
    COMPANIES: 'companies',
};

// Hook to fetch people with pagination, filtering, and sorting
export function usePeopleQuery(params: { page?: number, pageSize?: number, keyword?: string, sortBy?: string }) {
    // Create a stable query key based on parameters
    const queryKey: QueryKey = [QUERY_KEYS.PEOPLE, params];
    return useQuery({
        queryKey: queryKey,
        queryFn: () => getPeople(params),
        placeholderData: (previousData) => previousData, // Keep previous data while loading new page
        retry: false, // Optional: disable retries on error
    });
}

// Hook to fetch companies
export function useCompaniesQuery() {
    return useQuery({
        queryKey: [QUERY_KEYS.COMPANIES],
        queryFn: getCompanies,
    });
}

// Hook for the unlock contact mutation
export function useUnlockContactMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (personId: number) => unlockContact(personId),
        // When mutate is called:
        // Optimistically update the cache? (More complex)
        // Or invalidate and refetch queries after mutation succeeds
        onSuccess: (data) => {
            // Invalidate the people query to refetch updated data
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PEOPLE] });
            
            // Optionally, update the specific person in the cache directly for faster UI update
            // queryClient.setQueryData([QUERY_KEYS.PEOPLE], (oldData: any) => { ... update logic ... });
            console.log('Unlock successful for:', data.id);
        },
        onError: (error) => {
            // Handle mutation error (e.g., show notification)
            console.error('Unlock failed:', error);
        },
    });
}

// Hook for the create connection mutation
export function useCreateConnectionMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (personId: number) => createConnection(personId),
        onSuccess: (data) => {
            // Invalidate people query to reflect updated connection status
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PEOPLE] });
            console.log('Connection request successful for:', data.id);
        },
        onError: (error) => {
            console.error('Connection request failed:', error);
        },
    });
} 