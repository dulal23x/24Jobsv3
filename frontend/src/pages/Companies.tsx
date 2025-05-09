import React, { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { getCompanies, Company } from '../lib/api';
import { 
  FiSearch, FiMapPin, FiBriefcase, FiUsers, 
  FiGlobe, FiChevronDown, FiFilter, FiGrid, FiList
} from 'react-icons/fi';

// Filter options type
interface FilterOptions {
  industries: string[];
  locations: string[];
  sizes: string[];
}

export default function Companies() {
  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filter states
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    industries: [],
    locations: [],
    sizes: []
  });
  
  // Companies data fetch
  const { data, isLoading, error } = useQuery<Company[]>({
    queryKey: ['companies', searchQuery, selectedFilters],
    queryFn: async () => {
      try {
        // Use the imported getCompanies function instead of apiRequest
        return await getCompanies();
      } catch (err) {
        console.error("Error fetching companies data:", err);
        // Sample fallback data
        return [
          { 
            id: 101, 
            name: 'TechCorp Solutions', 
            industry: 'Technology', 
            location: 'San Francisco, CA',
            size: '1000-5000 employees',
            website: 'www.techcorp.com',
            logo: ''
          },
          { 
            id: 102, 
            name: 'Global Media', 
            industry: 'Media', 
            location: 'New York, NY',
            size: '5000-10000 employees',
            website: 'www.globalmedia.com',
            logo: ''
          },
          { 
            id: 103, 
            name: 'InnoTech', 
            industry: 'Software', 
            location: 'Austin, TX',
            size: '500-1000 employees',
            website: 'www.innotech.io',
            logo: ''
          }
        ];
      }
    }
  });
  
  // Filter options
  const filterOptions: FilterOptions = {
    industries: ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Media'],
    locations: ['New York', 'San Francisco', 'Chicago', 'Austin', 'Seattle', 'Boston', 'Remote'],
    sizes: ['1-50 employees', '51-200 employees', '201-500 employees', '501-1000 employees', '1000+ employees']
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
      industries: [],
      locations: [],
      sizes: []
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
    console.log('Searching for companies:', searchQuery);
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
      {/* Search Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-white rounded-3 shadow-sm p-4">
            <h1 className="h3 fw-bold mb-4">Find Companies</h1>
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FiSearch className="text-muted" />
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0"
                  placeholder="Search companies by name, industry, or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary px-4">
                  Search
                </button>
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
            
            {/* Industry Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('industries')}
                style={{ cursor: 'pointer' }}
              >
                <h6 className="mb-0 fw-semibold">
                  <FiBriefcase className="me-2" /> Industry
                </h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'industries' && (
                <div className="mt-2">
                  {filterOptions.industries.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`industry-${option}`}
                        checked={selectedFilters.industries.includes(option)}
                        onChange={() => handleFilterSelect('industries', option)}
                      />
                      <label className="form-check-label" htmlFor={`industry-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Location Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('locations')}
                style={{ cursor: 'pointer' }}
              >
                <h6 className="mb-0 fw-semibold">
                  <FiMapPin className="me-2" /> Location
                </h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'locations' && (
                <div className="mt-2">
                  {filterOptions.locations.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`location-${option}`}
                        checked={selectedFilters.locations.includes(option)}
                        onChange={() => handleFilterSelect('locations', option)}
                      />
                      <label className="form-check-label" htmlFor={`location-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Company Size Filter */}
            <div className="mb-3">
              <div 
                className="d-flex justify-content-between align-items-center py-2 cursor-pointer"
                onClick={() => toggleFilter('sizes')}
                style={{ cursor: 'pointer' }}
              >
                <h6 className="mb-0 fw-semibold">
                  <FiUsers className="me-2" /> Company Size
                </h6>
                <FiChevronDown />
              </div>
              
              {activeFilter === 'sizes' && (
                <div className="mt-2">
                  {filterOptions.sizes.map((option) => (
                    <div className="form-check mb-2" key={option}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`size-${option}`}
                        checked={selectedFilters.sizes.includes(option)}
                        onChange={() => handleFilterSelect('sizes', option)}
                      />
                      <label className="form-check-label" htmlFor={`size-${option}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Company Results Column */}
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
                {isLoading ? 'Loading companies...' : 
                  data ? `${data.length} companies found` : 'No companies found'}
              </h5>
              <div className="d-flex gap-2">
                <div className="btn-group">
                  <button 
                    className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <FiGrid size={16} />
                  </button>
                  <button 
                    className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <FiList size={16} />
                  </button>
                </div>
                <div className="dropdown">
                  <button 
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Sort: Relevance
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item">Relevance</button></li>
                    <li><button className="dropdown-item">Name (A-Z)</button></li>
                    <li><button className="dropdown-item">Size (Largest first)</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Listings */}
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading companies...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger">
              An error occurred while loading companies. Please try again.
            </div>
          ) : data && data.length > 0 ? (
            <>
              {viewMode === 'grid' ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                  {data.map(company => (
                    <div key={company.id} className="col">
                      <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <img 
                              src={company.logo || `https://via.placeholder.com/150?text=${company.name.charAt(0)}`} 
                              alt={company.name} 
                              className="img-fluid rounded"
                              style={{ maxHeight: '80px', objectFit: 'contain' }}
                              onError={(e) => {
                                // @ts-ignore
                                e.target.onerror = null; 
                                // @ts-ignore
                                e.target.src=`/images/company-logo-fallback.png?text=${company.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <h5 className="card-title fw-bold mb-1">{company.name}</h5>
                          <p className="text-muted small mb-2">{company.industry}</p>
                          <div className="d-flex align-items-center text-muted small mb-2">
                            <FiMapPin size={14} className="me-1" />
                            <span>{company.location}</span>
                          </div>
                          {company.size && (
                            <div className="d-flex align-items-center text-muted small mb-2">
                              <FiUsers size={14} className="me-1" />
                              <span>{company.size}</span>
                            </div>
                          )}
                          {company.website && (
                            <div className="d-flex align-items-center text-muted small mb-3">
                              <FiGlobe size={14} className="me-1" />
                              <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-truncate">
                                {company.website}
                              </a>
                            </div>
                          )}
                          <div className="d-grid">
                            <Link href={`/company/${company.id}`} className="btn btn-outline-primary btn-sm">
                              View Company
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="list-group mb-4">
                  {data.map(company => (
                    <div key={company.id} className="list-group-item border-0 bg-white shadow-sm rounded-3 mb-3 p-3">
                      <div className="row align-items-center">
                        <div className="col-md-1 text-center mb-3 mb-md-0">
                          <img 
                            src={company.logo || `https://via.placeholder.com/150?text=${company.name.charAt(0)}`} 
                            alt={company.name} 
                            className="img-fluid rounded"
                            style={{ maxHeight: '50px', objectFit: 'contain' }}
                            onError={(e) => {
                              // @ts-ignore
                              e.target.onerror = null; 
                              // @ts-ignore
                              e.target.src=`/images/company-logo-fallback.png?text=${company.name.charAt(0)}`;
                            }}
                          />
                        </div>
                        <div className="col-md-7">
                          <h5 className="mb-1 fw-bold">{company.name}</h5>
                          <div className="d-flex flex-wrap gap-3 text-muted small">
                            <span>
                              <FiBriefcase size={14} className="me-1" />
                              {company.industry}
                            </span>
                            <span>
                              <FiMapPin size={14} className="me-1" />
                              {company.location}
                            </span>
                            {company.size && (
                              <span>
                                <FiUsers size={14} className="me-1" />
                                {company.size}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                          <Link href={`/company/${company.id}`} className="btn btn-outline-primary btn-sm">
                            View Company
                          </Link>
                          {company.website && (
                            <a 
                              href={`https://${company.website}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-outline-secondary btn-sm ms-2"
                            >
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <div className="bg-white rounded-3 shadow-sm p-5 text-center">
              <FiBriefcase size={48} className="text-muted mb-3" />
              <h5>No companies found</h5>
              <p className="text-muted">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}