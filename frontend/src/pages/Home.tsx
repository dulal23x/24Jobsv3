import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section py-md-5 py-4 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
              <div className="mb-3">
                <span className="d-inline-flex align-items-center text-primary mb-2 fw-medium" style={{ fontSize: '1.1rem' }}>
                  <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#0073B1"/>
                  </svg>
                  Professional Networking
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-3 lh-sm">
                Unlock Your
                <span className="text-primary d-block my-1">Professional Potential</span>
                with 24Jobs
              </h1>
              <p className="lead text-muted mb-4 fs-4 mx-auto mx-lg-0" style={{ maxWidth: '540px' }}>
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
              
              <div className="d-flex gap-3 mb-5 justify-content-center justify-content-lg-start flex-wrap">
                <Link href="/join">
                  <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill fs-5 shadow-sm transition-all" 
                    style={{ minWidth: '200px', transform: 'translateY(0)', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Join the community
                  </button>
                </Link>
                <button className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill fs-5 transition-all"
                  style={{ minWidth: '200px', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 115, 177, 0.1)';
                    e.currentTarget.style.borderColor = '#0073B1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  Learn more
                </button>
              </div>
              
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                <div className="d-flex me-3">
                  <img 
                    src="https://ui-avatars.com/api/?name=JD&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{ width: '38px', height: '38px', marginRight: '-12px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://ui-avatars.com/api/?name=MS&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{ width: '38px', height: '38px', marginRight: '-12px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://ui-avatars.com/api/?name=TK&background=random" 
                    alt="User avatar" 
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="fw-medium fs-6">Joined by <strong>10M+ professionals</strong></div>
                  <div className="d-flex align-items-center fs-6">
                    <div className="text-warning me-1">★★★★★</div>
                    <span>4.9/5 from 25K+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 position-relative">
              <div className="position-relative text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional networking" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                />
                
                <div className="position-absolute bg-white shadow-lg rounded-3 p-3 p-md-4 start-0 end-0 mx-auto" 
                     style={{ 
                       maxWidth: '340px', 
                       bottom: '20px',
                       transform: 'translateX(10%)',
                       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateX(10%) translateY(-5px)';
                       e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateX(10%)';
                       e.currentTarget.style.boxShadow = '';
                     }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div className="badge rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '45px', height: '45px', fontSize: '16px' }}>JJ</div>
                    <div className="overflow-hidden">
                      <div className="text-warning small mb-1 fs-6">★★★★★</div>
                      <p className="mb-1 fw-medium" style={{ fontSize: '0.95rem' }}>
                        "24Jobs helped me connect with industry leaders and find opportunities that perfectly matched my career goals."
                      </p>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                        - Sarah Johnson, Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="position-absolute badge bg-success text-white px-3 py-2 rounded-pill shadow-sm" 
                     style={{ 
                       left: '20px', 
                       top: '20px',
                       transition: 'transform 0.3s ease'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'scale(1.05)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'scale(1)';
                     }}
                >
                  <div className="d-flex align-items-center gap-2 fs-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13A1.5 1.5 0 0 0 16 12.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a.5.5 0 0 0 .372 0z"/>
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                    </svg>
                    <span>10K+ Jobs Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Choose Section */}
      <section className="py-5 my-4">
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <h2 className="fw-bold mb-3 display-5">Why professionals choose 24Jobs</h2>
            <p className="lead text-muted text-center mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
              Join the platform that's changing how professionals connect, grow, and advance their careers.
            </p>
          </div>
          
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 transition-shadow"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-10px)';
                     e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-center mb-4 mt-2">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary" style={{ width: '70px', height: '70px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13A1.5 1.5 0 0 0 16 12.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a.5.5 0 0 0 .372 0z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-center mb-3">Career Opportunities</h3>
                  <p className="text-muted text-center mb-0 fs-6 flex-grow-1">
                    Discover job opportunities tailored to your skills and experience, with insights from your professional network.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 transition-shadow"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-10px)';
                     e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-center mb-4 mt-2">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary" style={{ width: '70px', height: '70px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 10.5C3.163 11.07 2.5 11.739 2 12.5v.5c.007.163.024.316.049.457l.002.001c.018.06.045.12.078.18.033.06.074.122.12.188.047.064.104.126.168.186.064.06.136.118.216.174.08.055.168.107.26.156.093.05.192.094.297.132.105.038.217.07.335.096.118.026.242.045.37.058.127.013.258.02.393.02h.193c.135 0 .266-.007.393-.02.128-.013.252-.032.37-.058.118-.026.23-.058.335-.096.105-.038.204-.082.297-.132.092-.049.18-.101.26-.156.08-.056.152-.114.216-.174.064-.062.121-.124.168-.186.046-.066.087-.128.12-.188.033-.06.06-.12.078-.18.002-.002.025-.1.049-.457v-.5c-.5-1.062-1.5-1.96-3.08-1.96zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-1.5-2a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-center mb-3">Meaningful Connections</h3>
                  <p className="text-muted text-center mb-0 fs-6 flex-grow-1">
                    Build genuine professional relationships with peers, mentors, and industry leaders who share your interests.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 transition-shadow"
                   style={{ transition: 'all 0.3s ease' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-10px)';
                     e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-center mb-4 mt-2">
                    <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary" style={{ width: '70px', height: '70px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6 8.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1h-.5a.5.5 0 0 0-.5.5zM8 1a4 4 0 0 0-3.465 6.036 1.986 1.986 0 0 0-.708 1.585l.364.853A.5.5 0 0 0 4.5 10h7a.5.5 0 0 0 .309-.126l.364-.853a1.986 1.986 0 0 0-.708-1.585A4 4 0 0 0 8 1z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-center mb-3">Knowledge Sharing</h3>
                  <p className="text-muted text-center mb-0 fs-6 flex-grow-1">
                    Access industry insights, learn from thought leaders, and share your expertise with professionals worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-primary-light">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-3 display-5">Ready to <span className="text-primary">advance your career</span>?</h2>
          <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
            Join millions of professionals building connections, sharing insights, and growing their careers on 24Jobs. Take the next step toward your professional success.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 col-lg-8">
              <div className="row g-4 text-center justify-content-center">
                <div className="col-6 col-sm-4">
                  <div className="py-3">
                    <div className="display-6 fw-bold text-primary mb-1">10M+</div>
                    <div className="text-muted fs-5">Active Users</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="py-3">
                    <div className="display-6 fw-bold text-primary mb-1">25K+</div>
                    <div className="text-muted fs-5">Companies</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mt-3 mt-sm-0">
                  <div className="py-3">
                    <div className="display-6 fw-bold text-primary mb-1">5K+</div>
                    <div className="text-muted fs-5">Daily Jobs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/join">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fs-5 transition-all shadow"
                    style={{ 
                      minWidth: '250px', 
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '';
                    }}
            >
              Join 24Jobs today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}