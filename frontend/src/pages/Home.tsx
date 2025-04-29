import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="mb-2">
                <span className="d-inline-flex align-items-center text-primary small mb-2">
                  <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#0073B1"/>
                  </svg>
                  Professional Networking
                </span>
              </div>
              <h1 className="display-5 fw-bold mb-2">
                Unlock Your <br />
                <span className="text-primary">Professional Potential</span> <br />
                with 24Jobs
              </h1>
              <p className="text-muted mb-4">
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
              
              <div className="navigation-shortcuts mb-4">
                <p className="small fw-medium mb-2">Navigation Shortcuts:</p>
                <div className="d-flex gap-2">
                  <Link href="/people">
                    <button className="btn btn-light btn-sm px-3 py-2 border">Go to People Page</button>
                  </Link>
                  <Link href="/people">
                    <button className="btn btn-light btn-sm px-3 py-2 border">People Search</button>
                  </Link>
                </div>
              </div>
              
              <div className="d-flex gap-2 mb-4">
                <Link href="/join">
                  <button className="btn btn-primary px-4 py-2">Join the community</button>
                </Link>
                <button className="btn btn-outline-primary px-4 py-2">Learn more</button>
              </div>
              
              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <img 
                    src="https://ui-avatars.com/api/?name=JD&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-2 border-white" 
                    style={{ width: '28px', height: '28px', marginRight: '-8px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://ui-avatars.com/api/?name=MS&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-2 border-white" 
                    style={{ width: '28px', height: '28px', marginRight: '-8px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://ui-avatars.com/api/?name=TK&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-2 border-white"
                    style={{ width: '28px', height: '28px', objectFit: 'cover' }}
                  />
                </div>
                <div className="ms-2">
                  <span className="small">Joined by <strong>10M+ professionals</strong></span>
                  <div className="d-flex align-items-center">
                    <div className="text-warning small">★★★★★</div>
                    <span className="small ms-1">4.9/5 from 25K+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7 position-relative">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional networking" 
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                
                {/* Featured testimonial */}
                <div className="position-absolute bg-white shadow-sm rounded-3 p-3" style={{ maxWidth: '320px', bottom: '30px', right: '-20px' }}>
                  <div className="mb-2">
                    <div className="badge text-bg-light border rounded-pill small mb-2">Connected with 250+ companies</div>
                  </div>
                  <div className="d-flex gap-2 mb-2">
                    <div className="badge rounded-circle text-bg-primary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>JJ</div>
                    <div className="overflow-hidden">
                      <div className="text-warning small">★★★★★</div>
                      <p className="small mb-1 fw-medium" style={{ fontSize: '12px' }}>
                        "24Jobs helped me connect with industry leaders and find opportunities that perfectly matched my career goals."
                      </p>
                      <p className="small mb-0 text-muted" style={{ fontSize: '11px' }}>
                        - Sarah Johnson, Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Job availability badge */}
                <div className="position-absolute badge bg-primary text-white px-3 py-2 rounded-pill" style={{ left: '30px', bottom: '-15px' }}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle bg-white" style={{ width: '8px', height: '8px' }}></div>
                    <span>10K+ Jobs Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Choose Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4">Why professionals choose 24Jobs</h2>
            <p className="text-muted text-center mx-auto" style={{ maxWidth: '650px' }}>
              Join the platform that's changing how professionals connect, grow, and advance their careers.
            </p>
          </div>
          
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="#0073B1"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h5 fw-bold text-center mb-3">Career Opportunities</h3>
                  <p className="text-muted text-center mb-0">Discover job opportunities tailored to your skills and experience, with insights from your professional network.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18H23V16.5C23 14.17 18.33 13 16 13Z" fill="#0073B1"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h5 fw-bold text-center mb-3">Meaningful Connections</h3>
                  <p className="text-muted text-center mb-0">Build genuine professional relationships with peers, mentors, and industry leaders who share your interests.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#0073B1"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h5 fw-bold text-center mb-3">Knowledge Sharing</h3>
                  <p className="text-muted text-center mb-0">Access industry insights, learn from thought leaders, and share your expertise with professionals worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-3">Ready to <span className="text-primary">advance your career</span>?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Join millions of professionals building connections, sharing insights, and growing their careers on 24Jobs. Take the next step toward your professional success.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-10">
              <div className="row g-4 text-center justify-content-center">
                <div className="col-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="fw-bold text-primary mb-1" style={{ fontSize: '24px' }}>10M+</div>
                    <div className="small text-muted">Active Users</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="fw-bold text-primary mb-1" style={{ fontSize: '24px' }}>25K+</div>
                    <div className="small text-muted">Companies</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="fw-bold text-primary mb-1" style={{ fontSize: '24px' }}>5K+</div>
                    <div className="small text-muted">Daily Jobs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/join">
            <button className="btn btn-primary px-4 py-2">Join 24Jobs today</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Simple navigation card component
function NavCard({ title, path, description }: { title: string, path: string, description: string }) {
  return (
    <Link href={path}>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h3 style={{ marginBottom: '8px', color: '#0066cc' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{description}</p>
      </div>
    </Link>
  );
}