import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { getJobs, PaginatedResponse } from '../lib/api';
import { 
  FiSearch, FiMapPin, FiDollarSign, FiBriefcase, 
  FiClock, FiFilter, FiChevronDown, FiX, FiStar,
  FiCalendar, FiChevronRight, FiExternalLink, FiMoreVertical,
  FiBookmark, FiShare2, FiPrinter, FiCheck, FiArrowRight,
  FiFlag
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

export default function Jobs() {
  // Search state
  const [keyword, setKeyword] = useState('SEO'); // Example default
  const [location, setLocation] = useState('Remote');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [page, setPage] = useState(1);
  
  // Job data fetch
  const { data, isLoading, error } = useQuery<PaginatedResponse<Job>, Error>({
    queryKey: ['jobs', keyword, location, page],
    queryFn: () => getJobs({ 
      keyword: keyword || undefined, 
      location: location || undefined, 
      page,
      pageSize: 20,
    }),
  });
  
  // Dummy jobs based on image
  const dummyJobs: Job[] = [
    { id: 1, title: 'Digital Technology Lead - US REMOTE', company: 'Connections', location: 'Remote', type: '3-4 ★', salary: '$100,000 - $118,000/yr', days: 1, experience: '5+ years', jobType: 'Full-time', description: `shopping experience, including BOPIS (Buy Online, Pick Up In Store) and in-store digital solutions.
• Optimize customer experience by leveraging data insights, personalization strategies, and emerging digital trends.
• Monitor website and mobile app performance, user behavior, and conversion rates to drive enhancements.
• Change Management & Cross-Team Collaboration
• Act as a bridge between IT, Marketing, and Operations, ensuring digital initiatives align with business objectives.
• Manage digital transformation projects, driving adoption of new technologies and best practices across teams.
• Train teams on digital systems and workflows.
• Manage external vendors and tech partners to ensure quality execution.
• Data Governance & Digital Insights
• Maintain data integrity across all digital platforms, ensuring accuracy in customer, product, and sales data.
• Implement best practices for data governance, privacy compliance, and cybersecurity across digital systems.
• Work with business intelligence teams to analyze digital performance, generating actionable insights for growth.

Min USD $100,000.00/Yr Max USD $118,000.00/Yr Qualifications:
• Bachelor\'s degree in IT, Digital Marketing, Business, or a related field preferred.
• 5+ years\' experience in digital technology, e-commerce operations, or martech.
• Strong background in system integrations and digital tools like HR/Horizon, Adobe Commerce, AWS S3, HubSpot, GA4, DotDigital, etc.
• Skilled in CMS platforms, API integrations, and marketing automation.
• Strategic thinker with hands-on experience in SEO, paid media, omnichannel retail, and analytics.
• Excellent project management and communication skills.
• Collaborative, adaptable, and excited to make a real impact.` },
    { id: 2, title: 'SEO Outreach Specialist - Remote Work', company: 'ReefCat', location: 'Remote in Los Angeles, CA', type: 'Flexible schedule', salary: '$80,000+', days: 2, experience: '2+ years', jobType: 'Full-time', description: 'Detailed description for SEO Outreach Specialist...' },
    { id: 3, title: 'eCommerce Marketing Lead', company: 'GHFS', location: 'Remote in Ashland, VA 23005', type: 'Full-time', salary: '$90,000+', days: 5, experience: '3+ years', jobType: 'Full-time', description: 'Detailed description for eCommerce Marketing Lead...' },
    { id: 4, title: 'Affiliate Manager 2', company: 'HighLevel', location: 'Remote', type: 'Full-time', salary: '$85,000+', days: 3, experience: '4+ years', jobType: 'Full-time', description: 'Detailed description for Affiliate Manager 2...' },
    { id: 5, title: 'BIGCOMMERCE DEVELOPER', company: 'Coalition Technologies', location: 'Remote in Los Angeles, CA', type: 'Full-time', salary: '$110,000+', days: 1, experience: '3+ years', jobType: 'Full-time', description: 'Detailed description for BIGCOMMERCE DEVELOPER...' },
    { id: 6, title: 'Staff Writer', company: 'PWN?', location: 'Remote in New York, NY', type: 'Full-time', salary: '$75,000+', days: 7, experience: '2+ years', jobType: 'Full-time', description: 'Detailed description for Staff Writer...' },
    { id: 7, title: 'Project Manager - Paid Media', company: 'Humanix | Human Up', location: 'Remote in Pompano Beach, FL 33064', type: 'Full-time', salary: '$95,000+', days: 2, experience: '5+ years', jobType: 'Full-time', description: 'Detailed description for Project Manager - Paid Media...' },
    { id: 8, title: 'Client Development Strategist', company: 'Holdrief | Russellking', location: 'Remote in Granville, OH 43023', type: 'Full-time', salary: '$85,000+', days: 3, experience: '4+ years', jobType: 'Full-time', description: 'Detailed description for Client Development Strategist...' },
    { id: 9, title: 'Conversion Copywriter - Remote Work', company: 'LiaretSolv', location: 'Remote in San Jose, CA', type: 'Full-time', salary: '$88,000+', days: 1, experience: '3+ years', jobType: 'Full-time', description: 'Detailed description for Conversion Copywriter...' },
    { id: 10, title: 'Search Engine Optimization Manager - Remote', company: 'SeoTunis', location: 'Remote', type: 'Full-time', salary: '$105,000+', days: 4, experience: '5+ years', jobType: 'Full-time', description: 'Detailed description for Search Engine Optimization Manager...' },
  ];
  
  const dummyResponse: PaginatedResponse<Job> = {
    data: dummyJobs,
    pagination: { totalPages: 6, total: dummyJobs.length * 6, page: 1, pageSize: 10, hasPrevPage: false, hasNextPage: true }
  };
  
  const displayData = (data && data.data.length > 0) ? data : dummyResponse;
  
  // Set first job as selected by default if none selected
  useEffect(() => {
    if (displayData.data.length > 0 && !selectedJob) {
      setSelectedJob(displayData.data[0]);
    }
  }, [displayData, selectedJob]);
  
  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };
  
  return (
    <div className="container bg-light py-3 px-3 px-lg-5" style={{ minHeight: '100vh' }}>
      {/* Search Bar */}
      <div className="row mb-4 justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="bg-white rounded shadow-sm p-3 d-flex align-items-center">
            <div className="input-group me-2" style={{ maxWidth: '40%' }}>
              <span className="input-group-text bg-white border-end-0 ps-3 text-muted">
                <FiSearch />
              </span>
              <input 
                type="text"
                className="form-control border-start-0 py-2"
                placeholder="Job title, keywords, or company"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{ boxShadow: 'none', fontSize: '14px' }}
              />
            </div>
            
            <div className="input-group me-2" style={{ maxWidth: '40%' }}>
              <span className="input-group-text bg-white border-end-0 ps-3 text-muted">
                <FiMapPin />
              </span>
              <input 
                type="text"
                className="form-control border-start-0 py-2"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ boxShadow: 'none', fontSize: '14px' }}
              />
            </div>
            
            <button className="btn btn-primary px-4 py-2">
              <span className="fw-bold">Search</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Filter Row */}
      <div className="row mb-3 justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Pay</span> <FiChevronDown size={12} />
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Remote</span> <FiChevronDown size={12} />
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Company</span> <FiChevronDown size={12} />
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Job type</span> <FiChevronDown size={12} />
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Experience level</span> <FiChevronDown size={12} />
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center px-3 py-1" style={{ fontSize: '13px', borderRadius: '4px' }}>
                <span className="me-1">Date posted</span> <FiChevronDown size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Stats */}
      <div className="row mb-3 justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 text-primary text-black" style={{ fontSize: '14px' }}>
              <span className="fw-bold ">Upload your resume</span> - Let employers find you
            </p>
            <div style={{ fontSize: '13px' }}>
              <span className="me-3 text-muted">SEO jobs in Remote</span>
              <span className="me-3 text-muted">Sort by: <strong>relevance</strong> - date</span>
              <span className="text-muted">1,000+ jobs</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content - Job listings and Job details */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="row g-3">
            {/* Job Listings Column */}
            <div className="col-md-5 col-lg-4">
              {isLoading ? (
                <div className="bg-white rounded shadow-sm p-5 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3 text-muted" style={{ fontSize: '14px' }}>Searching for jobs...</p>
                </div>
              ) : (
                <>
                  {displayData.data.map((job, index) => (
                    <div 
                      key={job.id || index} 
                      className={`card mb-2 border`}
                      onClick={() => handleJobSelect(job)}
                      style={{ 
                        cursor: 'pointer',
                        borderRadius: '8px',
                        border: selectedJob?.id === job.id ? '2px solid #000' : '1px solid #000',
                        boxShadow: selectedJob?.id === job.id ? '0 0 0 1px #000, 0 2px 8px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div className="card-body position-relative p-3">
                        <div className="position-absolute end-0 top-0 p-2">
                          <FiMoreVertical color="#777" />
                        </div>
                        
                        <h5 className="card-title text-primary mb-1" style={{ fontSize: '15px', fontWeight: '500' }}>
                          {job.title}
                        </h5>
                        <p className="mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {job.company}
                        </p>
                        <p className="text-muted mb-1" style={{ fontSize: '13px' }}>
                          {job.location}
                        </p>
                        
                        {job.type === 'Flexible schedule' && (
                          <p className="mb-2" style={{ fontSize: '13px' }}>
                            <span className="text-muted">Flexible schedule</span>
                          </p>
                        )}
                        
                        <div className="d-flex flex-wrap gap-1 mb-2">
                          {[ 
                            {label: 'Health insurance', show: index % 3 === 0 },
                            {label: '401(k) matching', show: index % 2 === 0 },
                            {label: 'Paid time off', show: index % 4 === 0 },
                            {label: 'Vision insurance', show: index % 5 === 0 },
                            {label: 'Dental insurance', show: true }
                          ].map(benefit => benefit.show && (
                            <span key={benefit.label} className="badge bg-light text-secondary border"
                              style={{ fontSize: '11px', fontWeight: 'normal', borderRadius: '4px', padding: '4px 8px' }}
                            >
                              {benefit.label}
                            </span>
                          ))}
                        </div>
                        
                        <div className="d-flex align-items-center mt-2">
                          <a href="#" className="text-primary text-decoration-none" style={{ fontSize: '13px' }}>
                            View similar jobs
                          </a>
                          <span className="ms-auto text-muted" style={{ fontSize: '12px' }}>
                            {job.days} {job.days === 1 ? 'day' : 'days'} ago
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Pagination */}
                  <nav className="mt-4 d-flex justify-content-center" aria-label="Page navigation">
                    <ul className="pagination pagination-sm">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  
                  {/* People also searched */}
                  <div className="mt-4 mb-4 bg-white rounded shadow-sm p-3">
                    <h6 className="mb-3 fw-bold" style={{ fontSize: '14px' }}>People also searched:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <a href="#" className="text-decoration-none">
                        <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 'normal', 
                            background: '#f0f7ff', 
                            color: '#0d6efd',
                            border: '1px solid #e1effe'
                          }}
                        >
                          seo specialist
                        </span>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 'normal', 
                            background: '#f0f7ff', 
                            color: '#0d6efd',
                            border: '1px solid #e1effe'
                          }}
                        >
                          seo remote
                        </span>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 'normal', 
                            background: '#f0f7ff', 
                            color: '#0d6efd',
                            border: '1px solid #e1effe'
                          }}
                        >
                          digital marketing
                        </span>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 'normal', 
                            background: '#f0f7ff', 
                            color: '#0d6efd',
                            border: '1px solid #e1effe'
                          }}
                        >
                          marketing
                        </span>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 'normal', 
                            background: '#f0f7ff', 
                            color: '#0d6efd',
                            border: '1px solid #e1effe'
                          }}
                        >
                          remote work
                        </span>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Job Details Column */}
            <div className="col-md-7 col-lg-8">
              {selectedJob && (
                <div className="card border-0 rounded shadow position-sticky" style={{ top: '1rem' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-2">
                      <h3 className="mb-0 fw-bold" style={{ fontSize: '20px' }}>{selectedJob.title}</h3>
                      <div className="ms-auto d-flex">
                        <button className="btn btn-sm btn-outline-secondary me-2 d-flex align-items-center">
                          <FiShare2 size={14} className="me-1" /> Share
                        </button>
                        <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
                          <FiBookmark size={14} className="me-1" /> Save
                        </button>
                      </div>
                    </div>
                    
                    <p className="mb-2" style={{ fontSize: '15px' }}>
                      <a href="#" className="fw-bold text-decoration-none">{selectedJob.company}</a>
                      <span className="text-muted ms-1">•</span>
                      <span className="text-muted ms-1">{selectedJob.location}</span>
                    </p>
                    
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-primary-subtle text-primary me-2 px-2 py-1">
                        {selectedJob.jobType}
                      </span>
                      <span className="badge bg-success-subtle text-success px-2 py-1">
                        {selectedJob.salary}
                      </span>
                      <span className="ms-auto text-muted small">{selectedJob.days} {selectedJob.days === 1 ? 'day' : 'days'} ago</span>
                    </div>
                    
                    <button className="btn btn-primary w-100 mb-3 py-2">
                      Apply now
                    </button>
                    
                    <hr className="my-3" />
                    
                    <div className="job-details">
                      <div className="mb-4">
                        <h6 className="fw-bold mb-2" style={{ fontSize: '16px' }}>Job details</h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <FiDollarSign className="text-muted me-2" size={16} />
                              <div>
                                <div className="text-muted" style={{ fontSize: '12px' }}>Salary</div>
                                <div style={{ fontSize: '14px' }}>{selectedJob.salary}</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <FiBriefcase className="text-muted me-2" size={16} />
                              <div>
                                <div className="text-muted" style={{ fontSize: '12px' }}>Job type</div>
                                <div style={{ fontSize: '14px' }}>{selectedJob.jobType}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="job-description small" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                        <h6 className="fw-bold mb-3" style={{ fontSize: '16px' }}>Job description</h6>
                        <div className="job-description-content" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                          <pre className="text-wrap mb-0" style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', fontSize: 'inherit' }}>
                            {selectedJob.description}
                          </pre>
                        </div>
                      </div>
                      
                      <hr className="my-4" />
                      
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
                          <FiFlag className="me-1" size={14} /> Report job
                        </button>
                        
                        <button className="btn btn-primary btn-sm d-flex align-items-center">
                          Apply now <FiArrowRight className="ms-1" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}