import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="homepage-container">
      {/* ================= Hero Section ================= */}
      <section className="hero-section py-md-5 py-4 bg-light">
        <div className="container px-5 px-md-7 mx-4 mx-md-5 ">
          <div className="row align-items-center gy-4 " >
            {/* বাম পাশে হেডলাইন, সাবহেড, বাটন, ইউজার এভাটার ও রেটিং */}
            <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
              <div className="mb-3">
                <span className="d-inline-flex align-items-center text-primary mb-2 fw-medium" style={{ fontSize: '1.1rem' }}>
                  <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#0073B1"/>
                  </svg>
                  Professional Networking
                </span>
              </div>
              <h1 className="display-3 font-[400] mb-3 lh-sm text-[56px]">
                Unlock Your<br/>
                <span className="d-block">Professional</span>
                <span className="text-primary d-block my-1">Potential</span>
                with 24Jobs
              </h1>
              <p className="lead text-muted mb-4 text-[22px] mx-auto mx-lg-0" style={{ maxWidth: '540px' }}>
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
              
              <div className="d-flex gap-3 mb-5 justify-content-center justify-content-lg-start flex-wrap">
                <Link href="/join">
                  <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill fs-5 shadow-sm transition-all" 
                    style={{ minWidth: '200px', transform: 'translateY(0)', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Join Now
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
                    src="https://randomuser.me/api/portraits/women/31.jpg" 
                    alt="User avatar" 
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{ width: '38px', height: '38px', marginRight: '-12px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User avatar" 
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{ width: '38px', height: '38px', marginRight: '-12px', objectFit: 'cover' }}
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
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

             {/* ডান পাশে হিরো ইমেজ, টেস্টিমোনিয়াল কার্ড ও ব্যাজ */}
            <div className="col-lg-6 position-relative">
              <div className="position-relative text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional networking" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                />

                {/* Testimonial Card */}
                <div className="position-absolute bg-white shadow-lg rounded-3 p-3 p-md-4" 
                     style={{ 
                       maxWidth: '320px', 
                       top: '229px',
                       right: '-18px',
                       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'scale(1.03)';
                       e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'none';
                       e.currentTarget.style.boxShadow = '';
                     }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <img src='https://randomuser.me/api/portraits/women/33.jpg' alt=''
                    className='img-fluid rounded-full shadow-lg'  style={{ width: '45px', height: '45px' , objectFit:"cover" }}/>
                    <div className="overflow-hidden">
                      <div className="text-warning small mb-1 fs-6">★★★★★</div>
                      <p className="mb-1 " style={{ fontSize: '0.95rem' }}>
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
                       left: '-16px', 
                       top: '145px',
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13A1.5 1.5 0 0 0 16 12.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a.5.5 0 0 0 .372 0z"/>
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                    </svg>
                    <span className='text-[12px]'>10K+ Jobs Available</span>
                  </div>
                </div>
                <div className="position-absolute badge bg-white text-success px-3 py-2 rounded-pill shadow-sm" 
                     style={{ 
                       left: '306px', 
                       top: '41px',
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13A1.5 1.5 0 0 0 16 12.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a.5.5 0 0 0 .372 0z"/>
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                    </svg>
                    <span className='text-[12px]'>Connected with 25K+ companies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= Why Professionals Choose Section ============= */}
      <section className="py-5 my-4" style={{ background: '#f6fbff' }}>
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <h2 className="fw-bold mb-3" style={{ fontSize: '48px', fontWeight: 800 }}>Why professionals choose 24Jobs</h2>
            <p className="lead text-muted text-center mx-auto" style={{ maxWidth: '700px', fontSize: '20px', fontWeight: 500 }}>
              Join the platform that's changing how professionals connect, grow, and advance their careers.
            </p>
          </div>
          <div className="row w-[1000px] g-4 justify-content-center mx-auto">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow-sm h-100 px-4 pt-4 pb-4 d-flex flex-column align-items-start" style={{ borderTop: '4px solid #1976f6', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.08)' }}>
                <div className="mb-3" style={{ background: '#f1f7fe', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" fill="#1976f6" viewBox="0 0 24 24">
                    <path d="M6 7V6a4 4 0 1 1 8 0v1h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3Zm2-1a2 2 0 1 1 4 0v1H8V6Zm-3 3v9h14V9H5Z"/>
                  </svg>
                </div>
                <h3 className="fw-bold mb-2" style={{ fontSize: '22px' }}>Career Opportunities</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '16px' }}>
                  Discover job opportunities tailored to your skills and experience, with insights from your professional network.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow-sm h-100 px-4 pt-4 pb-4 d-flex flex-column align-items-start" style={{ borderTop: '4px solid #22c55e', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.08)' }}>
                <div className="mb-3" style={{ background: '#eafaf2', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" fill="#22c55e" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/>
                  </svg>
                </div>
                <h3 className="fw-bold mb-2" style={{ fontSize: '22px' }}>Meaningful Connections</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '16px' }}>
                  Build genuine professional relationships with peers, mentors, and industry leaders who share your interests.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow-sm h-100 px-4 pt-4 pb-4 d-flex flex-column align-items-start" style={{ borderTop: '4px solid #a78bfa', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.08)' }}>
                <div className="mb-3" style={{ background: '#f5f3ff', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" fill="#a78bfa" viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 0 1 7 7c0 2.386-1.28 4.5-3.2 5.7V17a1.8 1.8 0 0 1-3.6 0v-2.3C6.28 13.5 5 11.386 5 9a7 7 0 0 1 7-7Zm0 18a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z"/>
                  </svg>
                </div>
                <h3 className="fw-bold mb-2" style={{ fontSize: '22px' }}>Knowledge Sharing</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '16px' }}>
                  Access industry insights, learn from thought leaders, and share your expertise with professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="cta-section-home py-5" style={{ background: 'linear-gradient(135deg, #f3fafd 0%, #f3fafd 100%)' }}>
        <div className="container text-center py-4">
          {/* CTA Top Button */}
          <div className="d-flex justify-content-center mb-4">
            <Link href="/join">
              <button
                className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold d-flex align-items-center gap-2"
                style={{
                  fontSize: '1.15rem',
                  boxShadow: '0 2px 8px 0 rgba(44, 62, 80, 0.08)',
                  border: 'none',
                  color: '#2563eb',
                }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  <path d="M12 8v4l2 2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Join Today
              </button>
            </Link>
          </div>
          <h2 className="fw-bold mb-3" style={{ fontWeight: 800, fontSize: '32px' }}>
            Ready to{' '}
            <span style={{
              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
            }}>
              advance your career
            </span>
            ?
          </h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px', color: '#5a6a7a', fontSize: '1.35rem', fontWeight: 500 }}>
            Join millions of professionals building connections, sharing insights, and growing their careers on 24Jobs. Take the next step toward your professional success.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
            {/* Card 1 */}
            <div style={{ minWidth: 120 }}>
              <div className="bg-white  d-flex flex-row gap-1 align-items-center py-4 px-4" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mb-2">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="#2563eb"/>
                </svg>
                <div>
                  <div className="fw-bold" style={{ fontSize: '2rem', color: '#2563eb' }}>10M+</div>
                  <div className="fw-semibold" style={{ color: '#222', fontSize: '1.1rem' }}>Active Users</div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ minWidth: 120 }}>
              <div className="bg-white  d-flex flex-row gap-1 align-items-center py-4 px-4" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mb-2">
                  <rect x="4" y="7" width="16" height="13" rx="2" fill="#22c55e"/>
                  <rect x="7" y="3" width="10" height="4" rx="2" fill="#22c55e"/>
                </svg>
                <div>
                  <div className="fw-bold" style={{ fontSize: '2rem', color: '#22c55e' }}>25K+</div>
                  <div className="fw-semibold" style={{ color: '#222', fontSize: '1.1rem' }}>Companies</div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ minWidth: 120 }}>
              <div className="bg-white  d-flex flex-row gap-1 align-items-center py-4 px-4" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mb-2">
                  <rect x="2" y="7" width="20" height="13" rx="2" fill="#8b5cf6"/>
                  <rect x="7" y="3" width="10" height="4" rx="2" fill="#8b5cf6"/>
                </svg>
                <div>
                  <div className="fw-bold" style={{ fontSize: '2rem', color: '#8b5cf6' }}>5K+</div>
                  <div className="fw-semibold" style={{ color: '#222', fontSize: '1.1rem' }}>Daily Jobs</div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link href="/join">
              <button
                className="btn btn-primary btn-lg px-5 py-3 rounded-4 fw-bold d-flex align-items-center gap-2 shadow"
                style={{ fontSize: '1.25rem', boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.10)' }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="#fff"/>
                </svg>
                Join 24Jobs today
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}