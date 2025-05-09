import axios from 'axios';

const api = axios.create({
  // The baseURL will be proxied by Vite to the Django backend (http://127.0.0.1:8000)
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define interfaces for expected API responses (optional but good practice)
export interface Company {
  id: number;
  name: string;
  industry?: string;
  size?: string;
  location?: string;
  website?: string;
  logo?: string;
  description?: string;
  foundedYear?: number;
  employeeCount?: string;
  rating?: number;
}

// Backend response format from Django
interface PersonBackend {
  id: number;
  first_name: string;
  last_name: string;
  title?: string;
  company?: { id: number | null; name: string } | null;
  city?: string;
  state?: string;
  country?: string;
  email?: string | null; // Masked or full email
  phone?: string | null; // Masked or full phone
  is_unlocked: boolean;
  connect_status: 'none' | 'pending' | 'connected';
}

// Frontend expected format
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  title?: string;
  company?: { id: number | null; name: string } | null;
  city?: string;
  state?: string;
  country?: string;
  email?: string | null; // Masked or full email
  phone?: string | null; // Masked or full phone
  isUnlocked: boolean;
  connectStatus: 'none' | 'pending' | 'connected';
}

interface PaginatedResponseBackend<T> {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  data: T[];
}

export interface PaginatedResponse<T> {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  data: T[];
}

interface UnlockResponseBackend {
  id: number;
  email: string | null;
  phone: string | null;
  isUnlocked: boolean;
}

interface UnlockResponse {
  id: number;
  email: string | null;
  phone: string | null;
  isUnlocked: boolean;
}

interface ConnectionResponseBackend {
  id: number;
  connectStatus: 'none' | 'pending' | 'connected';
}

interface ConnectionResponse {
  id: number;
  connectStatus: 'none' | 'pending' | 'connected';
}

// Add Job interface (assuming structure based on Jobs.tsx)
interface JobBackend {
  id: number | string;
  title: string;
  company: string; // Assuming company name string, adjust if it's an object
  location: string;
  type: string; // e.g., Full-time, Part-time
  salary: string; // e.g., $50,000 - $70,000
  days_posted: number; // Backend might use snake_case
  experience_level: string; // Backend might use snake_case
  job_type: string; // Backend might use snake_case
  description?: string;
}

interface Job {
  id: number | string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g., Full-time, Part-time
  salary: string;
  days: number; // Frontend expects 'days'
  experience: string; // Frontend expects 'experience'
  jobType: string; // Frontend expects 'jobType'
  description?: string;
  isBookmarked?: boolean; // Frontend might add this client-side
}

// Transform backend job to frontend job
function transformJob(backendJob: JobBackend): Job {
  return {
    id: backendJob.id,
    title: backendJob.title,
    company: backendJob.company,
    location: backendJob.location,
    type: backendJob.type,
    salary: backendJob.salary,
    days: backendJob.days_posted,
    experience: backendJob.experience_level,
    jobType: backendJob.job_type,
    description: backendJob.description,
    // isBookmarked is likely managed client-side, default to false
    isBookmarked: false,
  };
}

// Transform backend person to frontend person
function transformPerson(backendPerson: PersonBackend): Person {
  return {
    id: backendPerson.id,
    firstName: backendPerson.first_name,
    lastName: backendPerson.last_name,
    title: backendPerson.title,
    company: backendPerson.company,
    city: backendPerson.city,
    state: backendPerson.state,
    country: backendPerson.country,
    email: backendPerson.email,
    phone: backendPerson.phone,
    isUnlocked: backendPerson.is_unlocked,
    connectStatus: backendPerson.connect_status,
  };
}

// API function for fetching people with parameters
export async function getPeople(params: { 
  page?: number, 
  pageSize?: number, 
  keyword?: string, 
  sortBy?: string,
  location?: string,
  connections?: string[],
  industries?: string[],
  companySize?: string[],
}): Promise<PaginatedResponse<Person>> {
  // Ensure trailing slash for DRF default router
  const response = await api.get<PaginatedResponseBackend<PersonBackend>>('/people/', { params });
  
  // Transform the data
  const transformedResponse: PaginatedResponse<Person> = {
    pagination: response.data.pagination,
    data: response.data.data.map(transformPerson),
  };
  
  return transformedResponse;
}

// API function for fetching companies
export async function getCompanies(): Promise<Company[]> {
  // Ensure trailing slash
  const response = await api.get<Company[]>('/companies/');
  return response.data;
}

// API function for unlocking a contact
export async function unlockContact(personId: number): Promise<UnlockResponse> {
  // Ensure trailing slash and send data in correct format { personId: ... }
  const response = await api.post<UnlockResponseBackend>('/people/contacts/unlock/', { personId });
  return {
    id: response.data.id,
    email: response.data.email,
    phone: response.data.phone,
    isUnlocked: response.data.isUnlocked,
  };
}

// API function for creating a connection request
export async function createConnection(personId: number): Promise<ConnectionResponse> {
  // Ensure trailing slash and send data in correct format { personId: ... }
  // Note: View expects 'connections/' path, which maps to the 'create_connection' action
  const response = await api.post<ConnectionResponseBackend>('/people/connections/', { personId });
  return {
    id: response.data.id,
    connectStatus: response.data.connectStatus,
  };
}

// API function for fetching jobs with parameters
export async function getJobs(params: { 
  page?: number, 
  pageSize?: number, 
  keyword?: string, 
  location?: string, 
  // Add filter params based on Jobs.tsx state
  jobType?: string[],
  experience?: string[],
  salary?: string[],
  workType?: string[] // Assuming 'location' filter in Jobs.tsx maps to workType (Remote/Hybrid/On-site)
}): Promise<PaginatedResponse<Job>> {
  // Ensure trailing slash for DRF default router
  const response = await api.get<PaginatedResponseBackend<JobBackend>>('/jobs/', { params });
  
  // Transform the data
  const transformedResponse: PaginatedResponse<Job> = {
    pagination: response.data.pagination,
    data: response.data.data.map(transformJob),
  };
  
  return transformedResponse;
}

export default api; 