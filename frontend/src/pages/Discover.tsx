import React, { useState } from 'react';

// Sample data for demonstration
const samplePeople = [
  {
    id: 1,
    name: 'Jane Peters',
    title: 'Senior Product Manager',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    industry: ['Product', 'Technology'],
    avatar: 'JP'
  },
  {
    id: 2,
    name: 'Michael Stevens',
    title: 'Marketing Director',
    company: 'CreativeAgency',
    location: 'New York, NY',
    industry: ['Marketing', 'Creative'],
    avatar: 'MS'
  },
  {
    id: 3,
    name: 'Ava Martinez',
    title: 'Software Engineer',
    company: 'TechInnovate',
    location: 'Austin, TX',
    industry: ['Engineering', 'Software'],
    avatar: 'AM'
  },
  {
    id: 4,
    name: 'David Williams',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Chicago, IL',
    industry: ['Data Science', 'Analytics'],
    avatar: 'DW'
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    title: 'UX/UI Designer',
    company: 'DesignWorks',
    location: 'Seattle, WA',
    industry: ['Design', 'UI/UX'],
    avatar: 'SJ'
  },
  {
    id: 6,
    name: 'Robert Chen',
    title: 'VP of Sales',
    company: 'GrowthCorp',
    location: 'Boston, MA',
    industry: ['Sales', 'Leadership'],
    avatar: 'RC'
  },
  {
    id: 7,
    name: 'Emily Rodriguez',
    title: 'HR Manager',
    company: 'PeopleSolutions',
    location: 'Miami, FL',
    industry: ['Human Resources', 'Management'],
    avatar: 'ER'
  },
  {
    id: 8,
    name: 'James Wilson',
    title: 'Chief Financial Officer',
    company: 'FinancePro',
    location: 'Denver, CO',
    industry: ['Finance', 'Leadership'],
    avatar: 'JW'
  }
];

// Filter categories
const locations = [
  'San Francisco, CA',
  'New York, NY',
  'Austin, TX',
  'Chicago, IL',
  'Seattle, WA',
  'Boston, MA',
  'Miami, FL',
  'Denver, CO'
];

const industries = [
  'Product',
  'Technology',
  'Marketing',
  'Creative',
  'Engineering',
  'Software',
  'Data Science',
  'Analytics',
  'Design',
  'UI/UX',
  'Sales',
  'Leadership',
  'Human Resources',
  'Management',
  'Finance'
];

const companies = [
  'TechCorp',
  'CreativeAgency',
  'TechInnovate',
  'AnalyticsPro',
  'DesignWorks',
  'GrowthCorp',
  'PeopleSolutions',
  'FinancePro'
];

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{
    locations: string[],
    industries: string[],
    companies: string[]
  }>({
    locations: [],
    industries: [],
    companies: []
  });
  const [expandedFilters, setExpandedFilters] = useState({
    locations: false,
    industries: false,
    companies: false
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Toggle filter sections
  const toggleFilterSection = (section: 'locations' | 'industries' | 'companies') => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section]
    });
  };

  // Handle filter selection
  const handleFilterChange = (type: 'locations' | 'industries' | 'companies', value: string) => {
    const currentFilters = [...selectedFilters[type]];
    if (currentFilters.includes(value)) {
      const updatedFilters = currentFilters.filter(filter => filter !== value);
      setSelectedFilters({
        ...selectedFilters,
        [type]: updatedFilters
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [type]: [...currentFilters, value]
      });
    }
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      locations: [],
      industries: [],
      companies: []
    });
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Filter people based on search and selected filters
  const filteredPeople = samplePeople.filter(person => {
    // Search term filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      if (
        !person.name.toLowerCase().includes(searchTermLower) &&
        !person.title.toLowerCase().includes(searchTermLower) &&
        !person.company.toLowerCase().includes(searchTermLower) &&
        !person.location.toLowerCase().includes(searchTermLower)
      ) {
        return false;
      }
    }

    // Location filter
    if (selectedFilters.locations.length > 0 && !selectedFilters.locations.includes(person.location)) {
      return false;
    }

    // Industry filter
    if (selectedFilters.industries.length > 0 && !person.industry.some(ind => selectedFilters.industries.includes(ind))) {
      return false;
    }

    // Company filter
    if (selectedFilters.companies.length > 0 && !selectedFilters.companies.includes(person.company)) {
      return false;
    }

    return true;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get active filters count
  const activeFiltersCount = 
    selectedFilters.locations.length + 
    selectedFilters.industries.length + 
    selectedFilters.companies.length;

  return (
    <div className="container-fluid p-0">
      {/* Hero Banner Section */}
      <div className="py-5 bg-gradient-to-r from-[#f0f7ff] to-[#e7f3ff]">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold text-[#0a66c2] mb-3">Discover Professionals</h1>
              <p className="fs-5 text-gray-700 mb-4">Connect with professionals across industries, explore career opportunities, and expand your network with 24Jobs' powerful search tools.</p>
              <div className="d-flex gap-2 flex-wrap mb-2">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-search me-1"></i> Advanced Search
                </span>
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-filter me-1"></i> Smart Filters
                </span>
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-people me-1"></i> Network Insights
                </span>
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-graph-up me-1"></i> Career Trends
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="network-graph p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                  <h5 className="fw-semibold mb-3 border-bottom pb-2">Professional Network Visualization</h5>
                  <div className="d-flex justify-content-center">
                    <svg width="100%" height="220" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Main Node */}
                      <circle cx="250" cy="110" r="30" fill="#0073B1" />
                      <text x="250" y="110" textAnchor="middle" dominantBaseline="middle" fill="white" fontWeight="bold" fontSize="12">You</text>
                      
                      {/* Connection Lines */}
                      <line x1="250" y1="110" x2="150" y2="50" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      <line x1="250" y1="110" x2="120" y2="110" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      <line x1="250" y1="110" x2="150" y2="170" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      <line x1="250" y1="110" x2="350" y2="50" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      <line x1="250" y1="110" x2="380" y2="110" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      <line x1="250" y1="110" x2="350" y2="170" stroke="#0073B1" strokeWidth="2" opacity="0.7" />
                      
                      {/* Connected Nodes */}
                      <circle cx="150" cy="50" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="150" y="50" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">MS</text>
                      
                      <circle cx="120" cy="110" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="120" y="110" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">AM</text>
                      
                      <circle cx="150" cy="170" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="150" y="170" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">JP</text>
                      
                      <circle cx="350" cy="50" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="350" y="50" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">RC</text>
                      
                      <circle cx="380" cy="110" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="380" y="110" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">SJ</text>
                      
                      <circle cx="350" cy="170" r="20" fill="#e7f3ff" stroke="#0073B1" strokeWidth="2" />
                      <text x="350" y="170" textAnchor="middle" dominantBaseline="middle" fill="#0073B1" fontWeight="bold" fontSize="10">DW</text>
                    </svg>
                  </div>
                  <div className="d-flex justify-content-center mt-1">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-plus-lg me-1"></i> Expand Network
                    </button>
                  </div>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="position-absolute" style={{ top: '-15px', right: '-10px', zIndex: 2 }}>
                  <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-graph-up-arrow text-primary fs-4"></i>
                  </div>
                </div>
                <div className="position-absolute" style={{ bottom: '-10px', left: '30px', zIndex: 2 }}>
                  <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-people-fill text-primary fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow-1 py-5 bg-gray-50">
        <div className="container">
          <div className="row g-4">
            {/* Featured Search Section */}
            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-search text-primary me-2"></i>
                    Find the Perfect Professional Connection
                  </h5>
                  <div className="position-relative">
                    <i className="bi bi-search position-absolute text-gray-400" style={{ top: '14px', left: '14px' }}></i>
                    <input 
                      type="text" 
                      className="form-control form-control-lg py-2 ps-5" 
                      placeholder="Search by name, title, company, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary position-absolute" style={{ right: '5px', top: '5px' }}>
                      Search
                    </button>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span className="badge bg-light text-dark px-3 py-2">
                      <i className="bi bi-tag me-1"></i> Software Engineer
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">
                      <i className="bi bi-tag me-1"></i> Product Manager
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">
                      <i className="bi bi-tag me-1"></i> Marketing Director
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">
                      <i className="bi bi-tag me-1"></i> UX Designer
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">
                      <i className="bi bi-tag me-1"></i> Data Scientist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main search bar */}
            <div className="col-12 mb-3">
              <div className="card p-3 shadow-sm">
                <div className="position-relative">
                  <i className="bi bi-search position-absolute text-gray-400" style={{ top: '12px', left: '12px' }}></i>
                  <input 
                    type="text" 
                    className="form-control py-2 ps-5" 
                    placeholder="Search by name, title, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Left Sidebar - Filters */}
            <div className="col-md-3">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-gradient-to-r from-[#0073B1] to-[#0a66c2] text-white py-3 d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 fw-semibold d-flex align-items-center">
                    <i className="bi bi-funnel-fill me-2"></i> Smart Filters
                  </h6>
                  {activeFiltersCount > 0 && (
                    <button 
                      className="btn btn-sm btn-light p-1 px-2" 
                      onClick={clearAllFilters}
                    >
                      <i className="bi bi-x-circle me-1"></i> Clear All
                    </button>
                  )}
                </div>
                
                {/* Active Filters Summary */}
                {activeFiltersCount > 0 && (
                  <div className="card-body border-bottom bg-light py-2">
                    <div className="d-flex flex-wrap gap-1">
                      {selectedFilters.locations.map((location, idx) => (
                        <span key={`loc-${idx}`} className="badge bg-primary text-white rounded-pill px-3 py-2 d-flex align-items-center">
                          <i className="bi bi-geo-alt me-1"></i> {location}
                          <button className="btn btn-sm p-0 ms-1 text-white" onClick={() => handleFilterChange('locations', location)}>
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </span>
                      ))}
                      {selectedFilters.industries.map((industry, idx) => (
                        <span key={`ind-${idx}`} className="badge bg-info text-white rounded-pill px-3 py-2 d-flex align-items-center">
                          <i className="bi bi-briefcase me-1"></i> {industry}
                          <button className="btn btn-sm p-0 ms-1 text-white" onClick={() => handleFilterChange('industries', industry)}>
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </span>
                      ))}
                      {selectedFilters.companies.map((company, idx) => (
                        <span key={`comp-${idx}`} className="badge bg-success text-white rounded-pill px-3 py-2 d-flex align-items-center">
                          <i className="bi bi-building me-1"></i> {company}
                          <button className="btn btn-sm p-0 ms-1 text-white" onClick={() => handleFilterChange('companies', company)}>
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="card-body">
                  {/* Filter Tips */}
                  <div className="alert alert-light border mb-3 p-2">
                    <div className="d-flex">
                      <div className="me-2">
                        <i className="bi bi-lightbulb-fill text-warning fs-5"></i>
                      </div>
                      <div>
                        <p className="mb-0 small">
                          <strong>Pro Tip:</strong> Combine multiple filters to find the perfect professional match.
                        </p>
                      </div>
                    </div>
                  </div>
                
                  {/* Location Filter */}
                  <div className="filter-section mb-3">
                    <div 
                      className="d-flex justify-content-between align-items-center py-2 cursor-pointer filter-header"
                      onClick={() => toggleFilterSection('locations')}
                    >
                      <h6 className="mb-0 fw-semibold d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill me-2 text-primary"></i> Location
                        {selectedFilters.locations.length > 0 && (
                          <span className="badge bg-primary text-white rounded-circle ms-2">
                            {selectedFilters.locations.length}
                          </span>
                        )}
                      </h6>
                      <i className={`bi ${expandedFilters.locations ? 'bi-chevron-up' : 'bi-chevron-down'} text-primary`}></i>
                    </div>
                    <div className={`mt-2 ps-4 ${expandedFilters.locations ? 'd-block' : 'd-none'}`}>
                      {locations.map((location, index) => (
                        <div className="form-check custom-checkbox mb-2" key={index}>
                          <input
                            className="form-check-input border-primary"
                            type="checkbox"
                            id={`location-${index}`}
                            checked={selectedFilters.locations.includes(location)}
                            onChange={() => handleFilterChange('locations', location)}
                          />
                          <label className="form-check-label d-flex justify-content-between align-items-center" htmlFor={`location-${index}`}>
                            {location}
                            <span className="badge bg-light text-primary rounded-pill">{Math.floor(Math.random() * 20) + 5}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Filter */}
                  <div className="filter-section mb-3">
                    <div 
                      className="d-flex justify-content-between align-items-center py-2 cursor-pointer filter-header"
                      onClick={() => toggleFilterSection('industries')}
                    >
                      <h6 className="mb-0 fw-semibold d-flex align-items-center">
                        <i className="bi bi-briefcase-fill me-2 text-primary"></i> Industry
                        {selectedFilters.industries.length > 0 && (
                          <span className="badge bg-primary text-white rounded-circle ms-2">
                            {selectedFilters.industries.length}
                          </span>
                        )}
                      </h6>
                      <i className={`bi ${expandedFilters.industries ? 'bi-chevron-up' : 'bi-chevron-down'} text-primary`}></i>
                    </div>
                    <div className={`mt-2 ps-4 ${expandedFilters.industries ? 'd-block' : 'd-none'}`}>
                      {/* Search within industry filters */}
                      <div className="position-relative mb-3">
                        <input 
                          type="text" 
                          className="form-control form-control-sm ps-4" 
                          placeholder="Search industries..." 
                        />
                        <i className="bi bi-search position-absolute text-gray-400" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                      </div>
                      
                      {industries.map((industry, index) => (
                        <div className="form-check custom-checkbox mb-2" key={index}>
                          <input
                            className="form-check-input border-primary"
                            type="checkbox"
                            id={`industry-${index}`}
                            checked={selectedFilters.industries.includes(industry)}
                            onChange={() => handleFilterChange('industries', industry)}
                          />
                          <label className="form-check-label d-flex justify-content-between align-items-center" htmlFor={`industry-${index}`}>
                            {industry}
                            <span className="badge bg-light text-primary rounded-pill">{Math.floor(Math.random() * 30) + 10}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Company Filter */}
                  <div className="filter-section">
                    <div 
                      className="d-flex justify-content-between align-items-center py-2 cursor-pointer filter-header"
                      onClick={() => toggleFilterSection('companies')}
                    >
                      <h6 className="mb-0 fw-semibold d-flex align-items-center">
                        <i className="bi bi-building me-2 text-primary"></i> Company
                        {selectedFilters.companies.length > 0 && (
                          <span className="badge bg-primary text-white rounded-circle ms-2">
                            {selectedFilters.companies.length}
                          </span>
                        )}
                      </h6>
                      <i className={`bi ${expandedFilters.companies ? 'bi-chevron-up' : 'bi-chevron-down'} text-primary`}></i>
                    </div>
                    <div className={`mt-2 ps-4 ${expandedFilters.companies ? 'd-block' : 'd-none'}`}>
                      {companies.map((company, index) => (
                        <div className="form-check custom-checkbox mb-2" key={index}>
                          <input
                            className="form-check-input border-primary"
                            type="checkbox"
                            id={`company-${index}`}
                            checked={selectedFilters.companies.includes(company)}
                            onChange={() => handleFilterChange('companies', company)}
                          />
                          <label className="form-check-label d-flex justify-content-between align-items-center" htmlFor={`company-${index}`}>
                            {company}
                            <span className="badge bg-light text-primary rounded-pill">{Math.floor(Math.random() * 15) + 3}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Advanced Filters & Save Search */}
                <div className="card-footer bg-light py-3">
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center">
                      <i className="bi bi-sliders me-2"></i> More Filters
                    </button>
                    <button className="btn btn-primary btn-sm d-flex align-items-center justify-content-center">
                      <i className="bi bi-bookmark-plus me-2"></i> Save This Search
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Premium Upgrade Card */}
              <div className="card border-0 shadow-sm bg-gradient-to-r from-[#f0f7ff] to-[#e7f3ff]">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h6 className="mb-0 fw-bold text-primary">Unlock Premium</h6>
                  </div>
                  <p className="small mb-3">Get unlimited access to professional profiles and advanced search features.</p>
                  <button className="btn btn-primary btn-sm w-100">
                    <i className="bi bi-arrow-up-circle me-1"></i> Upgrade Now
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content - Search Results */}
            <div className="col-md-9">
              <div className="card shadow-sm">
                <div className="card-header bg-white py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 fw-semibold">
                      {filteredPeople.length} professionals found
                    </h6>
                    <div className="d-flex align-items-center">
                      <span className="text-gray-600 small me-2">Sort by:</span>
                      <select className="form-select form-select-sm py-1 border-0 bg-transparent">
                        <option>Relevance</option>
                        <option>Name</option>
                        <option>Company</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    {currentItems.length > 0 ? (
                      currentItems.map(person => (
                        <div className="col-md-6 col-lg-4" key={person.id}>
                          <div className="card h-100 hover:shadow-lg border-0 professional-card transition-all">
                            <div className="card-body p-0">
                              {/* Card Header with Gradient */}
                              <div className="bg-gradient-to-r from-[#0073B1] to-[#0a66c2] p-3 rounded-top position-relative overflow-visible">
                                {/* White background circle to cover any blue line */}
                                <div className="position-absolute start-50 translate-x-[-50%]" style={{ bottom: '-2px', zIndex: 2, width: '80px', height: '4px', backgroundColor: 'white', borderRadius: '4px' }}></div>
                                
                                {/* Avatar */}
                                <div className="position-absolute start-50 translate-x-[-50%]" style={{ bottom: '-36px', zIndex: 3 }}>
                                  <div className="rounded-circle bg-white p-1" style={{ width: '72px', height: '72px' }}>
                                    <div className="rounded-circle bg-[#e7f3ff] d-flex align-items-center justify-content-center text-[#0a66c2] w-100 h-100">
                                      <span className="fw-bold fs-4">{person.avatar}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <span className="badge bg-white text-primary px-2 py-1 rounded-pill">
                                    <i className="bi bi-star-fill me-1 small"></i> Top Talent
                                  </span>
                                  <div className="d-flex gap-1">
                                    <button className="btn btn-sm btn-light rounded-circle p-1" title="Add to favorites">
                                      <i className="bi bi-star text-primary"></i>
                                    </button>
                                    <button className="btn btn-sm btn-light rounded-circle p-1" title="Save for later">
                                      <i className="bi bi-bookmark text-primary"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Card Content */}
                              <div className="p-3 pt-5 text-center" style={{ marginTop: '36px' }}>
                                <h5 className="fw-bold mb-1 mt-3">{person.name}</h5>
                                <p className="text-primary mb-1 fw-medium">{person.title}</p>
                                <p className="text-gray-600 mb-1">
                                  <i className="bi bi-building me-1"></i> {person.company}
                                </p>
                                <p className="text-gray-500 mb-2">
                                  <i className="bi bi-geo-alt me-1"></i> {person.location}
                                </p>
                                
                                {/* Skills and Tags */}
                                <div className="d-flex flex-wrap gap-1 justify-content-center mb-3">
                                  {person.industry.map((tag, idx) => (
                                    <span className="badge bg-light text-primary small px-2 py-1 rounded-pill" key={idx}>
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                
                                {/* Connection Stats */}
                                <div className="d-flex justify-content-around my-3 px-2">
                                  <div className="text-center">
                                    <div className="fw-bold text-primary">42</div>
                                    <div className="text-gray-500 small">Connections</div>
                                  </div>
                                  <div className="border-start border-end px-3 text-center">
                                    <div className="fw-bold text-primary">18</div>
                                    <div className="text-gray-500 small">Posts</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="fw-bold text-primary">5</div>
                                    <div className="text-gray-500 small">Years</div>
                                  </div>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="d-flex gap-2 mt-3">
                                  <button className="btn btn-outline-primary flex-grow-1">
                                    <i className="bi bi-envelope me-1"></i> Message
                                  </button>
                                  <button className="btn btn-primary flex-grow-1">
                                    <i className="bi bi-person-plus me-1"></i> Connect
                                  </button>
                                </div>
                              </div>
                              
                              {/* Quick Actions Footer */}
                              <div className="card-footer bg-light d-flex justify-content-around py-2 border-top">
                                <a href="#" className="text-decoration-none text-gray-600 small d-flex align-items-center">
                                  <i className="bi bi-eye me-1"></i> View Profile
                                </a>
                                <a href="#" className="text-decoration-none text-gray-600 small d-flex align-items-center">
                                  <i className="bi bi-share me-1"></i> Share
                                </a>
                                <a href="#" className="text-decoration-none text-gray-600 small d-flex align-items-center">
                                  <i className="bi bi-three-dots me-1"></i> More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12 text-center py-5">
                        <i className="bi bi-search fs-1 text-gray-400 mb-3 d-block"></i>
                        <h5 className="fw-semibold">No professionals found</h5>
                        <p className="text-gray-600">Try adjusting your search or filters</p>
                        {activeFiltersCount > 0 && (
                          <button className="btn btn-outline-primary mt-2" onClick={clearAllFilters}>
                            Clear All Filters
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Pagination */}
                {filteredPeople.length > 0 && (
                  <div className="card-footer bg-white py-3">
                    <nav aria-label="Search results pagination">
                      <ul className="pagination justify-content-center mb-0">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(number)}>
                              {number}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}