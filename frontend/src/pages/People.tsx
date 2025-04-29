import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPeople, unlockContact, createConnection } from '../lib/api';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  FiSearch, FiMail, FiPhone, FiUser, FiCheck, FiLock, FiUnlock, 
  FiMessageSquare, FiMapPin, FiFilter, FiBriefcase, FiChevronDown,
  FiCheckCircle, FiSliders, FiChevronLeft, FiChevronRight, FiPlus,
  FiLinkedin, FiTwitter, FiFacebook, FiX, FiArrowDown, FiArrowUp,
  FiClock, FiGlobe, FiRefreshCw
} from 'react-icons/fi';

// Define types based on API
interface Person {
  id: number | string;
  firstName: string;
  lastName: string;
  title?: string;
  company?: { id: number | string | null; name: string } | null;
  city?: string;
  state?: string;
  country?: string;
  email?: string | null;
  phone?: string | null;
  isUnlocked: boolean;
  connectStatus: 'none' | 'pending' | 'connected';
  isNew?: boolean; // Added for UI display
}

interface PaginationResponse {
  data: Person[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

// Helper functions for masking contact info
const maskEmail = (email: string | null | undefined): string => {
  if (!email) return '***@***.com';
  const [localPart, domain] = email.split('@');
  return `***@${domain}`;
};

const maskPhone = (phone: string | null | undefined): string => {
  if (!phone) return 'XXX-XXX-XXXX';
  // Keep last 4 digits visible, mask the rest
  return phone.replace(/\d(?=\d{4})/g, 'X');
};

export default function People() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const queryClient = useQueryClient();
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  // Fetch people data
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['people', { page, pageSize, keyword: debouncedQuery }],
    queryFn: () => getPeople({ page, pageSize, keyword: debouncedQuery }),
  });
  
  // Mutation for unlocking contact info
  const unlockMutation = useMutation({
    mutationFn: (personId: number | string) => unlockContact(Number(personId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['people'] });
    }
  });
  
  // Mutation for creating connections
  const connectMutation = useMutation({
    mutationFn: (personId: number | string) => createConnection(Number(personId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['people'] });
    }
  });
  
  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  
  // Handle pagination navigation
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  
  const handleNextPage = () => {
    if (data?.pagination?.hasNextPage) {
      setPage(page + 1);
    }
  };

  // Handle unlock contact
  const handleUnlockContact = (personId: number | string) => {
    unlockMutation.mutate(personId);
  };
  
  // Handle connect request
  const handleConnect = (personId: number | string) => {
    connectMutation.mutate(personId);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left sidebar for filters - fixed position */}
        <div className="col-md-3 col-lg-2 d-none d-md-block vh-100 position-fixed" style={{ overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
          <div className="p-3">
            <h5 className="fw-bold mb-4">Filters</h5>
            
            {/* Connection filter */}
            <div className="mb-4">
              <h6 className="fw-semibold small text-uppercase mb-2">Connection</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterConnections" />
                <label className="form-check-label" htmlFor="filterConnections">
                  1st connections
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterNetworkConnections" />
                <label className="form-check-label" htmlFor="filterNetworkConnections">
                  2nd connections
                </label>
              </div>
            </div>
            
            {/* Industry filter */}
            <div className="mb-4">
              <h6 className="fw-semibold small text-uppercase mb-2">Industry</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterTechnology" />
                <label className="form-check-label" htmlFor="filterTechnology">
                  Technology
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterFinance" />
                <label className="form-check-label" htmlFor="filterFinance">
                  Finance
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterHealthcare" />
                <label className="form-check-label" htmlFor="filterHealthcare">
                  Healthcare
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterEducation" />
                <label className="form-check-label" htmlFor="filterEducation">
                  Education
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterMarketing" />
                <label className="form-check-label" htmlFor="filterMarketing">
                  Marketing
                </label>
              </div>
            </div>
            
            {/* Company Size filter */}
            <div className="mb-4">
              <h6 className="fw-semibold small text-uppercase mb-2">Company Size</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterSmallBusiness" />
                <label className="form-check-label" htmlFor="filterSmallBusiness">
                  1-10 employees
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterMediumBusiness" />
                <label className="form-check-label" htmlFor="filterMediumBusiness">
                  11-50 employees
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterLargeBusiness" />
                <label className="form-check-label" htmlFor="filterLargeBusiness">
                  51-200 employees
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filterEnterprise" />
                <label className="form-check-label" htmlFor="filterEnterprise">
                  201+ employees
                </label>
              </div>
            </div>
            
            <button className="btn btn-outline-primary w-100">Apply Filters</button>
          </div>
        </div>
        
        {/* Main content area - with offset for sidebar */}
        <div className="col-md-9 col-lg-10 offset-md-3 offset-lg-2">
          {/* Fixed search bar */}
          <div className="sticky-top bg-white p-3 border-bottom shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h1 className="h4 fw-bold mb-0">People Search</h1>
                <p className="text-secondary small mb-0">Connect with industry professionals</p>
              </div>
              <button className="btn btn-outline-secondary btn-sm d-none d-md-inline-block" onClick={() => refetch()}>
                <FiRefreshCw className="me-1" /> Refresh
              </button>
            </div>
            
            {/* Search bar */}
            <div className="row g-2">
              <div className="col-md-7">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <FiSearch className="text-secondary" />
                  </span>
                  <input 
                    type="text" 
                    className="form-control border-start-0 shadow-none" 
                    placeholder="Search by name, title, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setDebouncedQuery(searchQuery);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select shadow-none">
                  <option>All locations</option>
                  <option>San Francisco, CA</option>
                  <option>New York, NY</option>
                  <option>Austin, TX</option>
                  <option>Seattle, WA</option>
                  <option>Chicago, IL</option>
                </select>
              </div>
              <div className="col-md-2">
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  onClick={() => setDebouncedQuery(searchQuery)}
                >
                  Search
                </button>
              </div>
            </div>
            
            {/* Mobile filter button - shows on small screens */}
            <div className="d-md-none mt-2">
              <button className="btn btn-outline-secondary w-100" data-bs-toggle="offcanvas" data-bs-target="#mobileFilters">
                <FiFilter className="me-1" /> Show Filters
              </button>
            </div>
            
            {/* Results count and sort */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <p className="text-secondary small mb-0">{data?.pagination?.total || 0} professionals found</p>
              </div>
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <FiSliders className="me-1" /> Sort: Relevance
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="sortDropdown">
                  <li><a className="dropdown-item" href="#">Relevance</a></li>
                  <li><a className="dropdown-item" href="#">Name (A-Z)</a></li>
                  <li><a className="dropdown-item" href="#">Recently Added</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="p-3">
            {isLoading ? (
              <div className="card shadow-sm border-0 p-5 text-center">
                <div className="spinner-border text-primary mx-auto" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-secondary">Loading people data...</p>
              </div>
            ) : error ? (
              <div className="card shadow-sm border-0 p-4">
                <div className="alert alert-danger m-0">
                  <FiX className="me-2" /> An error occurred while loading people data. Please try again.
                </div>
              </div>
            ) : (
              <>
                {/* People list */}
                {data?.data.length === 0 ? (
                  <div className="card shadow-sm border-0 p-5 text-center">
                    <FiUser size={48} className="text-muted mx-auto mb-3" />
                    <h5>No people found</h5>
                    <p className="text-muted">Try adjusting your search or filters</p>
                  </div>
                ) : (
                  <div className="list-group mb-4">
                    {data?.data.map((person: Person) => (
                      <div key={person.id} className="list-group-item border-0 shadow-sm rounded mb-3 p-0">
                        <div className="p-3">
                          <div className="row align-items-center">
                            {/* Avatar and basic info */}
                            <div className="col-md-5">
                              <div className="d-flex align-items-center">
                                <div className="position-relative me-3">
                                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" style={{width: "48px", height: "48px", fontSize: "16px"}}>
                                    {person.firstName.charAt(0)}{person.lastName.charAt(0)}
                                  </div>
                                  {person.isNew && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill" style={{fontSize: "0.6rem"}}>
                                      New
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <div className="d-flex align-items-center">
                                    <h5 className="h6 fw-bold mb-0">{person.firstName} {person.lastName}</h5>
                                    {person.connectStatus === 'connected' && (
                                      <span className="badge bg-success rounded-pill ms-2 px-2 py-1">
                                        <FiCheck className="me-1" size={10} /> Connected
                                      </span>
                                    )}
                                    {person.connectStatus === 'pending' && (
                                      <span className="badge bg-warning rounded-pill ms-2 px-2 py-1">
                                        <FiClock className="me-1" size={10} /> Pending
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-muted small mb-0">{person.title || 'Professional'}</p>
                                  <p className="small mb-0">
                                    <span className="text-primary">{person.company?.name || 'Company'}</span>
                                    {person.city && <span className="text-muted ms-2"><FiMapPin className="me-1" size={12} />{person.city}</span>}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Contact info */}
                            <div className="col-md-4">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="d-flex align-items-center mb-1">
                                    <FiMail className={`me-2 ${person.isUnlocked ? 'text-primary' : 'text-muted'}`} size={14} />
                                    <span className="small">
                                      {person.isUnlocked ? person.email : maskEmail(person.email)}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="d-flex align-items-center">
                                    <FiPhone className={`me-2 ${person.isUnlocked ? 'text-primary' : 'text-muted'}`} size={14} />
                                    <span className="small">
                                      {person.isUnlocked ? person.phone : maskPhone(person.phone)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Action buttons */}
                            <div className="col-md-3 text-end">
                              <div className="d-flex gap-2">
                                {person.connectStatus === 'connected' ? (
                                  <button className="btn btn-outline-primary btn-sm flex-grow-1">
                                    <FiMessageSquare className="me-1" size={14} /> Message
                                  </button>
                                ) : person.connectStatus === 'pending' ? (
                                  <button className="btn btn-outline-secondary btn-sm flex-grow-1" disabled>
                                    <FiClock className="me-1" size={14} /> Request Sent
                                  </button>
                                ) : (
                                  <button 
                                    className="btn btn-outline-primary btn-sm flex-grow-1"
                                    onClick={() => handleConnect(person.id)}
                                  >
                                    <FiPlus className="me-1" size={14} /> Connect
                                  </button>
                                )}
                                
                                {!person.isUnlocked ? (
                                  <button 
                                    className="btn btn-primary btn-sm flex-grow-1"
                                    onClick={() => handleUnlockContact(person.id)}
                                  >
                                    <FiUnlock className="me-1" size={14} /> Unlock
                                  </button>
                                ) : (
                                  <button className="btn btn-outline-secondary btn-sm flex-grow-1">
                                    <FiGlobe className="me-1" size={14} /> Profile
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                {data?.pagination && data.pagination.total > 0 && (
                  <div className="d-flex justify-content-center mt-4">
                    <nav aria-label="People pagination">
                      <ul className="pagination">
                        <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                          <a 
                            className="page-link" 
                            href="#" 
                            aria-label="Previous"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePrevPage();
                            }}
                          >
                            <FiChevronLeft size={18} />
                          </a>
                        </li>
                        
                        {Array.from({ length: Math.min(5, data.pagination.totalPages) }, (_, i) => {
                          const pageNum = i + 1;
                          return (
                            <li key={i} className={`page-item ${pageNum === page ? 'active' : ''}`}>
                              <a 
                                className="page-link" 
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(pageNum);
                                }}
                              >
                                {pageNum}
                              </a>
                            </li>
                          );
                        })}
                        
                        <li className={`page-item ${!data.pagination.hasNextPage ? 'disabled' : ''}`}>
                          <a 
                            className="page-link" 
                            href="#" 
                            aria-label="Next"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNextPage();
                            }}
                          >
                            <FiChevronRight size={18} />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile filter off-canvas sidebar */}
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileFilters" aria-labelledby="mobileFiltersLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileFiltersLabel">Filters</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Copy of the filter contents for mobile */}
          <div className="mb-4">
            <h6 className="fw-semibold small text-uppercase mb-2">Connection</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterConnections" />
              <label className="form-check-label" htmlFor="mFilterConnections">
                1st connections
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterNetworkConnections" />
              <label className="form-check-label" htmlFor="mFilterNetworkConnections">
                2nd connections
              </label>
            </div>
          </div>
          
          {/* Industry filter */}
          <div className="mb-4">
            <h6 className="fw-semibold small text-uppercase mb-2">Industry</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterTechnology" />
              <label className="form-check-label" htmlFor="mFilterTechnology">
                Technology
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterFinance" />
              <label className="form-check-label" htmlFor="mFilterFinance">
                Finance
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterHealthcare" />
              <label className="form-check-label" htmlFor="mFilterHealthcare">
                Healthcare
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterEducation" />
              <label className="form-check-label" htmlFor="mFilterEducation">
                Education
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterMarketing" />
              <label className="form-check-label" htmlFor="mFilterMarketing">
                Marketing
              </label>
            </div>
          </div>
          
          {/* Company Size filter */}
          <div className="mb-4">
            <h6 className="fw-semibold small text-uppercase mb-2">Company Size</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterSmallBusiness" />
              <label className="form-check-label" htmlFor="mFilterSmallBusiness">
                1-10 employees
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterMediumBusiness" />
              <label className="form-check-label" htmlFor="mFilterMediumBusiness">
                11-50 employees
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterLargeBusiness" />
              <label className="form-check-label" htmlFor="mFilterLargeBusiness">
                51-200 employees
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mFilterEnterprise" />
              <label className="form-check-label" htmlFor="mFilterEnterprise">
                201+ employees
              </label>
            </div>
          </div>
          
          <button className="btn btn-primary w-100" data-bs-dismiss="offcanvas">Apply Filters</button>
        </div>
      </div>
    </div>
  );
}