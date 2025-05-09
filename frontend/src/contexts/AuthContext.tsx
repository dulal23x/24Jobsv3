import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';

// Define the structure of the user profile data we expect from the API
interface UserProfile {
  id: number;
  username: string;
  email: string;
  first_name: string; // Added based on previous serializer example
  last_name: string; // Added based on previous serializer example
  user_type: 'free' | 'premium' | 'developer'; // Include 'developer' role
  credits_remaining: number;
  // Add last_credit_reset if you plan to display it directly
  // last_credit_reset?: string; // Optional: ISO date string 'YYYY-MM-DD'
}

// Define the shape of the context value
interface AuthContextType {
  user: UserProfile | null; // User object or null if not logged in
  isLoading: boolean; // Tracks if user data is being fetched
  isAuthenticated: boolean; // Convenience flag for logged-in status
  isDeveloper: boolean; // Convenience flag for developer role
  fetchUserProfile: () => Promise<void>; // Function to manually trigger profile refresh
  updateLocalCredits: (newCreditCount: number) => void; // Update UI immediately after unlock
  logout: () => void; // Function to handle user logout
}

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user] = useState<UserProfile | null>({ 
    id: 1,
    username: 'developer',
    email: 'developer@example.com',
    first_name: 'Dev',
    last_name: 'User',
    user_type: 'developer',
    credits_remaining: 1000
  });  // Simple state for demo; no real authentication

  // Memoized function to fetch user profile data
  const fetchUserProfile = useCallback(async () => {
    // Implementation of fetchUserProfile
  }, []);

  // Fetch user profile when the provider mounts
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]); // Run effect when fetchUserProfile changes (which is only once)

  // Function to update only the credit count in the local state
  const updateLocalCredits = useCallback((newCreditCount: number) => {
      // Implementation of updateLocalCredits
  }, []);

  // Basic logout function (clears user state)
  const logout = useCallback(() => {
      // Implementation of logout
  }, []);

  // Derive convenience boolean flags
  const isAuthenticated = !!user;
  const isDeveloper = user?.user_type === 'developer';

  // Provide the context value to children components
  return (
    <AuthContext.Provider value={{ 
        user, 
        isLoading: false, 
        isAuthenticated,
        isDeveloper,
        fetchUserProfile, 
        updateLocalCredits,
        logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the context in other components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 