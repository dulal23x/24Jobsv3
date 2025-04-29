import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../lib/api';
import { 
  FiSearch, FiMapPin, FiDollarSign, FiBriefcase, 
  FiClock, FiFilter, FiChevronDown, FiX, FiStar,
  FiCalendar, FiChevronRight, FiExternalLink
} from 'react-icons/fi';

// Job type definition
interface Job {
  id?: number | string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  days: number;
  experience: string;
  jobType: string;
  description?: string;
  isBookmarked?: boolean;
}

// Filter options type
interface FilterOptions {
  jobType: string[];
  experience: string[];
  salary: string[];
  location: string[];
}

// Paginated response type
interface PaginatedResponse<T> {
  jobs: T[];
  pagination: {
    totalPages: number;
    totalItems: number;
    page: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  };
}

export default function Jobs() {
  // Search state
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  
  // Filter states
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    jobType: [],
    experience: [],
    salary: [],
    location: []
  });
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [resultsPerPage] = useState(10);
  
  // Job data fetch
  const { data, isLoading, error } = useQuery<PaginatedResponse<Job>, Error>({
    queryKey: ['jobs', keyword, location, selectedFilters, page, resultsPerPage], // Include all dependencies
    queryFn: () => getJobs({ 
      keyword: keyword || undefined, 
      location: location || undefined, 
      page,
      pageSize: resultsPerPage,
      // Pass filter values, ensuring they are arrays or undefined
      jobType: selectedFilters.jobType.length > 0 ? selectedFilters.jobType : undefined,
      experience: selectedFilters.experience.length > 0 ? selectedFilters.experience : undefined,
      salary: selectedFilters.salary.length > 0 ? selectedFilters.salary : undefined,
      // Map the frontend 'location' filter (Remote/Hybrid/On-site) to 'workType' for the API
      workType: selectedFilters.location.length > 0 ? selectedFilters.location : undefined,
    }),
    // keepPreviousData: true, // Optional: consider adding for smoother pagination UX
  });
  
  // Filter options
  const filterOptions: FilterOptions = {
    jobType: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
    experience: ['Entry level', '1+ years', '2+ years', '3+ years', '5+ years', '10+ years'],
    salary: ['$30,000+', '$50,000+', '$70,000+', '$90,000+', '$110,000+', '$150,000+'],
    location: ['Remote', 'Hybrid', 'On-site']
  };
  
  // Toggle filter dropdown
  const toggleFilter = (filterName: string) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };
  
  // Handle filter selection
  const handleFilterSelect = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      
      if (newFilters[category].includes(value)) {
        // Remove the value if already selected
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        // Add the value
        newFilters[category] = [...newFilters[category], value];
      }
      
      return newFilters;
    });
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      jobType: [],
      experience: [],
      salary: [],
      location: []
    });
  };
  
  // Remove specific filter
  const removeFilter = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item !== value)
    }));
  };
  
  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search query
    console.log('Searching for:', keyword, 'in', location);
  };
  
  // Get total count of active filters
  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce(
      (count, filterValues) => count + filterValues.length, 
      0
    );
  };
  
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      {/* Search Bar - Indeed Style */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-white rounded-3 shadow-sm p-4">
            <form onSubmit={handleSearch}>
              <div className="row g-3">
                <div className="col-md-5">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FiSearch className="text-muted" />
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0"
                      placeholder="Job title, keywords, or company"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="col-md-5">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FiMapPin className="text-muted" />
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0"
                      placeholder="City, state, or remote"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary w-100">
                    Find Jobs
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="row">
        {/* Filters Column */}
        <div className="col-md-3 mb-4">
          <div className="bg-white rounded-3 shadow-sm p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 fw-bold">Filters</h5>
              {getActiveFilterCount() > 0 && (
                <button 
                  className="btn btn-link btn-sm p-0 text-decoration-none"
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
              )}
            </div>
            
            {/* Job Type Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('jobType')}
              >
                <h6 className="mb-0 fw-semibold">Job Type</h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'jobType' && (
                <div className="mt-2">
                  {filterOptions.jobType.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`jobType-${option}`}
                        checked={selectedFilters.jobType.includes(option)}
                        onChange={() => handleFilterSelect('jobType', option)}
                      />
                      <label className="form-check-label" htmlFor={`jobType-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Experience Level Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('experience')}
              >
                <h6 className="mb-0 fw-semibold">Experience Level</h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'experience' && (
                <div className="mt-2">
                  {filterOptions.experience.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`experience-${option}`}
                        checked={selectedFilters.experience.includes(option)}
                        onChange={() => handleFilterSelect('experience', option)}
                      />
                      <label className="form-check-label" htmlFor={`experience-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Salary Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('salary')}
              >
                <h6 className="mb-0 fw-semibold">Salary Range</h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'salary' && (
                <div className="mt-2">
                  {filterOptions.salary.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`salary-${option}`}
                        checked={selectedFilters.salary.includes(option)}
                        onChange={() => handleFilterSelect('salary', option)}
                      />
                      <label className="form-check-label" htmlFor={`salary-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Work Type Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('location')}
              >
                <h6 className="mb-0 fw-semibold">Work Type</h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'location' && (
                <div className="mt-2">
                  {filterOptions.location.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`location-${option}`}
                        checked={selectedFilters.location.includes(option)}
                        onChange={() => handleFilterSelect('location', option)}
                      />
                      <label className="form-check-label" htmlFor={`location-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Job Results Column */}
        <div className="col-md-9">
          {/* Active Filters Display */}
          {getActiveFilterCount() > 0 && (
            <div className="bg-white rounded-3 shadow-sm p-3 mb-3">
              <h6 className="fw-semibold mb-2">Active Filters:</h6>
              <div className="d-flex flex-wrap gap-2">
                {Object.entries(selectedFilters).map(([category, values]) => 
                  values.map(value => (
                    <span key={`${category}-${value}`} className="badge bg-light text-dark border py-2 px-3">
                      {value}
                      <button 
                        className="btn-close btn-close-sm ms-2"
                        onClick={() => removeFilter(category, value)}
                        aria-label="Remove filter"
                      ></button>
                    </span>
                  ))
                )}
              </div>
            </div>
          )}
          
          {/* Results Header */}
          <div className="bg-white rounded-3 shadow-sm p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-semibold">
                {isLoading ? 'Searching...' : 
                  // Adjust to use pagination total count if available
                  data ? `${data.pagination?.total ?? data.jobs.length} jobs found` : 'No jobs found'}
              </h5>
              <div className="dropdown">
                <button 
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Sort by: Relevance
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Relevance</button></li>
                  <li><button className="dropdown-item">Date</button></li>
                  <li><button className="dropdown-item">Salary</button></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Job Listings */}
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Searching for jobs...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger">
              An error occurred while loading jobs. Please try again.
            </div>
          ) : data && data.jobs.length > 0 ? (
            <>
              {data.jobs.map((job, index) => (
                <div 
                  key={job.id || index} 
                  className="bg-white rounded-3 shadow-sm p-3 mb-3 position-relative"
                >
                  {/* Bookmark button */}
                  <button 
                    className={`position-absolute top-0 end-0 btn btn-link text-decoration-none p-3 ${
                      job.isBookmarked ? 'text-warning' : 'text-muted'
                    }`}
                  >
                    <FiStar size={20} className={job.isBookmarked ? 'fill-warning' : ''} />
                  </button>
                  
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="fw-bold mb-1">{job.title}</h5>
                      <p className="mb-1 fw-medium">{job.company}</p>
                      <p className="text-muted mb-2">
                        <FiMapPin className="me-1" size={14} /> {job.location} · {job.type}
                      </p>
                      
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {job.salary && (
                          <span className="badge bg-light text-dark py-2 px-3">
                            <FiDollarSign className="me-1" size={14} /> {job.salary}
                          </span>
                        )}
                        {job.jobType && (
                          <span className="badge bg-light text-dark py-2 px-3">
                            <FiBriefcase className="me-1" size={14} /> {job.jobType}
                          </span>
                        )}
                        {job.experience && (
                          <span className="badge bg-light text-dark py-2 px-3">
                            <FiClock className="me-1" size={14} /> {job.experience}
                          </span>
                        )}
                      </div>
                      
                      {job.description && (
                        <p className="text-muted small mb-0">
                          {job.description.length > 200 
                            ? `${job.description.substring(0, 200)}...` 
                            : job.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="col-md-3 d-flex flex-column justify-content-between">
                      <div className="text-md-end mt-3 mt-md-0">
                        <span className="badge bg-light text-dark py-2 px-3">
                          <FiCalendar className="me-1" size={14} /> {job.days} days ago
                        </span>
                      </div>
                      
                      <div className="mt-3 text-md-end">
                        <Link href={`/job/${job.id || index}`} className="btn btn-primary">
                          Apply Now <FiChevronRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Pagination */}
              {/* Use pagination data from the API response */}
              {data && data.pagination && data.pagination.totalPages > 1 && (
                <nav aria-label="Job search pagination" className="mt-4">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${!data.pagination.hasPrevPage ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => setPage(data.pagination.page - 1)}
                        disabled={!data.pagination.hasPrevPage}
                      >
                        Previous
                      </button>
                    </li>
                    
                    {/* Simple pagination links (can be enhanced) */}
                    {Array.from({ length: data.pagination.totalPages }, (_, i) => (
                      <li key={i + 1} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                        <button 
                          className="page-link"
                          onClick={() => setPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    
                    <li className={`page-item ${!data.pagination.hasNextPage ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => setPage(data.pagination.page + 1)}
                        disabled={!data.pagination.hasNextPage}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          ) : (
            <div className="bg-white rounded-3 shadow-sm p-5 text-center">
              <FiBriefcase size={48} className="text-muted mb-3" />
              <h5>No jobs found</h5>
              <p className="text-muted">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}