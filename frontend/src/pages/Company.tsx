import React from 'react';
import { useRoute, Link } from 'wouter';

// Mock company data
const companies = [
  { id: 101, name: 'TechCorp Solutions', industry: 'Technology', size: '1000-5000 employees', location: 'San Francisco, CA', website: 'www.techcorp.com', logo: '' /*'https://via.placeholder.com/150?text=TechCorp'*/ },
  { id: 102, name: 'Global Media', industry: 'Media', size: '5000-10000 employees', location: 'New York, NY', website: 'www.globalmedia.com', logo: '' /*'https://via.placeholder.com/150?text=GlobalMedia'*/ },
  { id: 103, name: 'InnoTech', industry: 'Software', size: '500-1000 employees', location: 'Austin, TX', website: 'www.innotech.io', logo: '' /*'https://via.placeholder.com/150?text=InnoTech'*/ },
  { id: 104, name: 'NextGen Products', industry: 'Manufacturing', size: '1000-5000 employees', location: 'Seattle, WA', website: 'www.nextgen.com', logo: '' /*'https://via.placeholder.com/150?text=NextGen'*/ },
  { id: 105, name: 'Capital Investments', industry: 'Finance', size: '500-1000 employees', location: 'Chicago, IL', website: 'www.capitalinv.com', logo: '' /*'https://via.placeholder.com/150?text=Capital'*/ },
  { id: 106, name: 'Creative Solutions', industry: 'Design', size: '100-500 employees', location: 'Los Angeles, CA', website: 'www.creative.co', logo: '' /*'https://via.placeholder.com/150?text=Creative'*/ },
  { id: 107, name: 'Tech Innovations', industry: 'Technology', size: '100-500 employees', location: 'Boston, MA', website: 'www.techinnovations.com', logo: '' /*'https://via.placeholder.com/150?text=TechInno'*/ },
  { id: 108, name: 'Global Sales Inc', industry: 'Sales', size: '1000-5000 employees', location: 'Miami, FL', website: 'www.globalsales.com', logo: '' /*'https://via.placeholder.com/150?text=GlobalSales'*/ },
  { id: 109, name: 'People First', industry: 'Human Resources', size: '100-500 employees', location: 'Denver, CO', website: 'www.peoplefirst.org', logo: '' /*'https://via.placeholder.com/150?text=PeopleFirst'*/ },
  { id: 110, name: 'Efficient Systems', industry: 'Operations', size: '500-1000 employees', location: 'Portland, OR', website: 'www.efficient.co', logo: '' /*'https://via.placeholder.com/150?text=Efficient'*/ }
];

export default function Company() {
  // Extract the company ID from the URL
  const [match, params] = useRoute<{ id: string }>('/company/:id');
  
  if (!match) {
    return <NotFoundContent />;
  }
  
  const companyId = parseInt(params.id, 10);
  const company = companies.find(c => c.id === companyId);
  
  if (!company) {
    return <NotFoundContent />;
  }
  
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-2 text-center mb-3 mb-md-0">
              <img 
                src={company.logo || `/images/company-logo-fallback.png`} 
                alt={company.name} 
                className="img-fluid rounded"
                style={{ maxWidth: '120px' }}
              />
            </div>
            <div className="col-md-10">
              <h1 className="fs-2 fw-bold mb-2">{company.name}</h1>
              <p className="text-muted mb-2">
                <i className="bi bi-buildings me-2"></i>
                {company.industry} • {company.size}
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                {company.location}
              </p>
              <p className="text-muted mb-3">
                <i className="bi bi-globe me-2"></i>
                <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                  {company.website}
                </a>
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">
                  <i className="bi bi-people me-2"></i>
                  View Employees
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-star me-2"></i>
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          {/* Company Overview */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="fw-bold mb-3">About {company.name}</h4>
              <p className="mb-0">
                {company.name} is a leading company in the {company.industry} industry. 
                Based in {company.location}, we have {company.size.toLowerCase()} working 
                on innovative solutions for clients worldwide. Our mission is to deliver 
                exceptional products and services that transform businesses and enhance lives.
              </p>
            </div>
          </div>
          
          {/* Key People - Placeholder */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Key People</h4>
              <div className="row">
                {[1, 2, 3].map(index => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-3">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`}
                          alt={`Executive ${index}`}
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                        />
                        <h6 className="fw-bold mb-1">Executive Name</h6>
                        <p className="text-muted small mb-2">Chief Executive Officer</p>
                        <Link href="/people">
                          <button className="btn btn-sm btn-outline-primary w-100">View Profile</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          {/* Company Stats */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Company Stats</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Employees on 24Jobs</span>
                <span className="fw-bold">250+</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Active Job Postings</span>
                <span className="fw-bold">12</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Founded</span>
                <span className="fw-bold">2005</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Followers</span>
                <span className="fw-bold">5,200+</span>
              </div>
            </div>
          </div>
          
          {/* Similar Companies */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Similar Companies</h5>
              <div className="list-group list-group-flush">
                {companies
                  .filter(c => c.industry === company.industry && c.id !== company.id)
                  .slice(0, 3)
                  .map(similarCompany => (
                    <Link key={similarCompany.id} href={`/company/${similarCompany.id}`}>
                      <div className="list-group-item list-group-item-action d-flex align-items-center p-3">
                        <img 
                          src={similarCompany.logo || `/images/company-logo-fallback.png`}
                          alt={similarCompany.name}
                          className="rounded me-3"
                          width="40"
                          height="40"
                        />
                        <div>
                          <h6 className="mb-0">{similarCompany.name}</h6>
                          <p className="text-muted small mb-0">{similarCompany.location}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotFoundContent() {
  return (
    <div className="container py-5 text-center">
      <div className="alert alert-warning">
        <h3>Company Not Found</h3>
        <p>The company you're looking for doesn't exist or has been removed.</p>
        <Link href="/people">
          <button className="btn btn-primary mt-3">Back to People Search</button>
        </Link>
      </div>
    </div>
  );
}