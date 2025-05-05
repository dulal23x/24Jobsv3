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
                
              </div>
              <h1 className="display-3 font-[400] mb-3  text-[56px]">
                Unlock Your<br/>
                <span className="d-block">Professional</span>
                <span className="text-primary d-block my-1">Potential</span>
                with 24Jobs
              </h1>
              <p className="lead text-muted mb-2 text-[20px] mx-auto mx-lg-0" style={{ maxWidth: '520px' }}>
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
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
              
              <div className="d-flex gap-3 mb-4 justify-content-center justify-content-lg-start flex-wrap">
                <Link href="/join">
                  <button className="btn btn-primary btn-lg px-3 py-2 rounded-pill fs-5 shadow-sm transition-all" 
                    style={{ minWidth: '180px', transform: 'translateY(0)', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Join Now
                  </button>
                </Link>
                <button className="btn btn-outline-primary btn-lg px-3 py-2 rounded-pill fs-5 transition-all"
                  style={{ minWidth: '180px', transition: 'all 0.3s ease' }}
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
              {/* hero rightside image */}
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
              <div className="position-relative text-center" style={{ top: '-80px' }}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="me-1">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="me-1">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" x2="21" y1="9" y2="9"></line>
                  <line x1="9" x2="9" y1="21" y2="9"></line>
                </svg>
                    <span className='text-[12px]'>Connected with 25K+ companies
                    </span>
                  </div>
                </div>
    {/* user company jobs start */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 mt-[130px]">
            {/* Card 1 */}
            <div style={{ minWidth: 100 }}>
              <div className="bg-white d-flex flex-row gap-1 align-items-center py-3 px-3" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
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
            <div style={{ minWidth: 100 }}>
              <div className="bg-white d-flex flex-row gap-1 align-items-center py-3 px-3" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
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
            <div style={{ minWidth: 100 }}>
              <div className="bg-white d-flex flex-row gap-1 align-items-center py-3 px-3" style={{ boxShadow: '0 4px 24px 0 rgba(44, 62, 80, 0.08)' }}>
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
          {/* {user comppany job end} */}
              </div>
            </div>
          </div>
        </div>
      </section>

     

 

      {/* Employer section start */}
      <section className='w-full py-4 py-md-5' style={{ background: 'linear-gradient(135deg, #415896 0%, #3b4e8c 100%)' }}>
        <div className="container text-center text-white px-4">
          <h2 className='display-5 fw-bold mb-3'>Are You An Employer?</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Find the perfect candidates for your company. Post jobs and manage applications seamlessly.
          </p>
          <Link href="/people">
            <button 
              className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-semibold text-primary shadow-sm transition-all"
              style={{ transition: 'all 0.3s ease', transform: 'translateY(0)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Find Talent & Contact Info
            </button>
          </Link>
        </div>
      </section>  
      {/* Employer section end */}

      {/* ============= Test.tsx Content Start ============= */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Headline, Subheadline, Buttons */}
            <div className="col-lg-6 pe-lg-5">
              <h1 className="display-4 fw-bold text-primary mb-4">
                Elevate Your<br />Sales and<br />Recruiting
              </h1>
              <p className="lead text-dark mb-5" style={{ maxWidth: '540px' }}>
                Grow your business and team with 24Jobs, the world's most accurate lead intelligence and easy-to-use sales acceleration solution.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3 fw-bold shadow-sm">
                  Try It For Free
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold">
                  Get a Demo
                </button>
              </div>
            </div>
            {/* Right Side: Graphics */}
            <div className="col-lg-6 position-relative mt-5 mt-lg-0" style={{ minHeight: '520px' }}>
              {/* Main Card */}
              <div className="position-absolute bg-white rounded-4 shadow p-4 border" style={{ left: '120px', top: '120px', zIndex: 20, width: '340px' }}>
                <div className="d-flex flex-column align-items-center">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Janice Smith" className="rounded-circle object-fit-cover mb-3 border-4 border-white shadow" style={{ width: '80px', height: '80px' }} />
                  <div className="fw-bold text-primary fs-3">Janice Smith</div>
                  <div className="fw-semibold text-primary-emphasis mb-1">Marketing Manager</div>
                  <div className="fw-semibold text-primary-emphasis mb-2">@ Elevate.co</div>
                  <div className="text-dark mb-1">j.smith@elevate.co</div>
                  <div className="text-dark mb-4">📞 841-440-5251</div>
                  <div className="d-flex gap-2 mb-2">
                    <span className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center text-primary" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-envelope"></i>
                    </span>
                    <span className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center text-primary" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center text-primary" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-gear"></i>
                    </span>
                    <span className="bg-success-subtle rounded-circle d-flex align-items-center justify-content-center text-success" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-people"></i>
                    </span>
                    <span className="bg-purple rounded-circle d-flex align-items-center justify-content-center text-purple" style={{ width: '40px', height: '40px', background: '#f5f3ff' }}>
                      <i className="bi bi-cloud"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* Schedule Messages Card */}
              <div className="position-absolute rounded-4 shadow-sm p-3 border" style={{ left: '0', top: '0', zIndex: 10, width: '220px', background: '#f5f3ff' }}>
                <div className="fw-bold text-primary mb-3">Schedule Messages</div>
                <div className="d-flex flex-wrap gap-1">
                  {[...Array(21)].map((_, i) => (
                    <div key={i} className={`rounded d-flex align-items-center justify-content-center ${i % 5 === 0 ? 'bg-primary-subtle' : 'bg-white'}`} style={{ width: '20px', height: '20px' }}>
                      {i % 5 === 0 && <i className="bi bi-envelope text-primary small"></i>}
                    </div>
                  ))}
                </div>
              </div>
              {/* Expand with AI Card */}
              <div className="position-absolute rounded-4 shadow-sm p-3 d-flex align-items-center gap-3 border" style={{ right: '0', top: '0', zIndex: 10, width: '220px', background: '#eafaf2' }}>
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Mina Kim" className="rounded-circle object-fit-cover" style={{ width: '40px', height: '40px' }} />
                <div>
                  <div className="fw-bold text-primary">Mina Kim</div>
                  <div className="text-success fw-semibold small lh-sm">CMO & Founder<br />Julep Agency</div>
                </div>
              </div>
              {/* Target Better Card */}
              <div className="position-absolute rounded-4 shadow-sm p-3 border" style={{ right: '0', bottom: '0', zIndex: 10, width: '260px', background: '#f1f7fe' }}>
                <div className="fw-bold text-primary mb-2">Target better</div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill" style={{ background: '#ede9fe', color: '#7c3aed' }}>Intent Data</span>
                  <span className="badge rounded-pill" style={{ background: '#eafaf2', color: '#22c55e' }}>Technographics</span>
                  <span className="badge rounded-pill" style={{ background: '#fee2e2', color: '#ef4444' }}>NPI</span>
                  <span className="badge rounded-pill" style={{ background: '#e0e7ef', color: '#0073B1' }}>NAICS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <p className="text-center text-muted fw-semibold mb-4">Trusted by leading companies</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-10 opacity-75 transition-opacity" style={{ height: '40px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="Apple" className="h-10 opacity-75 transition-opacity" style={{ height: '40px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-10 opacity-75 transition-opacity" style={{ height: '40px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10 opacity-75 transition-opacity" style={{ height: '40px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-10 opacity-75 transition-opacity" style={{ height: '40px' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'} />
          </div>
        </div>
      </section>


{/* =======Engage Prospects Section start========= */}
       <section className="w-full bg-white py-20 flex justify-center items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left: Features */}
          <div className="flex-1 min-w-[320px] flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0073B1] mb-6">Engage prospects and automate</h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-700"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">Simplest Sales Engagement solution</div>
                  <div className="text-gray-600 text-sm">With <b>Autopilot</b>, create automated workflows to discover and engage with prospects in just a few clicks</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-700"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">Email contacts from RocketReach</div>
                  <div className="text-gray-600 text-sm">With <b>Messages</b>, customize your messaging, create templates, and monitor performance all in one place</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-700"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">AI sales intelligence</div>
                  <div className="text-gray-600 text-sm">Leverage AI to uncover contacts you've never thought of and expand your market with our AI-powered recommendations</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Circle, Card, Calendar */}
          <div className="relative flex-1 flex justify-center items-center min-w-[340px]">
            {/* Big Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] bg-gradient-to-br bg-[#0073B1]  rounded-full z-0 opacity-90"></div>
            {/* Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl flex w-[380px] min-h-[120px] overflow-hidden mb-8">
              {/* Sidebar */}
              <div className="bg-[#f5f6fa] w-36 py-6 px-4 flex flex-col gap-2 border-r">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#0073B1] p-1.5 rounded-full"><svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg></span>
                  <span className="font-semibold text-gray-600">Lists</span>
                </div>
                <div className="bg-[#0073B1] text-white rounded px-2 py-1 font-medium">Los Angeles</div>
                <div className="text-gray-600 px-2 py-1">Operations</div>
                <div className="text-gray-600 px-2 py-1">C-Level</div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-6 flex flex-col gap-3">
                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="bg-[#eaf1fb] text-[#0073B1] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#0073B1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg> Los Angeles</span>
                  <span className="bg-[#eaf1fb] text-[#0073B1] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#0073B1" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Operations</span>
                  <span className="bg-[#eaf1fb] text-[#0073B1] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#0073B1" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg> C-Level</span>
                </div>
                {/* Profile Card */}
                <div className="bg-[#f8fafc] rounded-lg shadow p-3 flex items-center gap-3 w-full">
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Andrew Ballard" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800">Andrew Ballard</div>
                    <div className="text-xs text-gray-500">Chief Operating Officer <span className="text-[#0073B1] font-semibold">@ Firestarter</span></div>
                    <div className="text-xs text-gray-400">Los Angeles, CA, USA</div>
                  </div>
                </div>
                {/* Placeholder for more profiles */}
                <div className="bg-gray-100 rounded-lg h-8 w-full my-1 opacity-60"></div>
                <div className="bg-gray-100 rounded-lg h-8 w-full opacity-40"></div>
              </div>
            </div>
            {/* Calendar & Clock */}
            <div className="absolute z-20 left-1/2 bottom-0 translate-x-[-60%] translate-y-1/2 flex items-end gap-4">
              <span className="bg-[#0073B1] text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </span>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-40">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="bg-[#ede9fe] rounded p-1 text-[#7c3aed] font-bold">&lt;</span>
                  <span className="w-8 h-2 bg-gray-200 rounded"></span>
                  <span className="bg-[#ede9fe] rounded p-1 text-[#7c3aed] font-bold">&gt;</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${i % 5 === 1 ? 'bg-[#0073B1]' : 'bg-[#f3f4f6]'}`}>
                      {i % 5 === 1 && <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======Engage Prospects Section end========= */}


{/* =======Compatible Workflow Section start========= */}
<section className="w-full bg-white py-20 flex justify-center items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:px-12">
          {/* Left: Graphic Representation (Styled like Image) */}
          <div className="relative flex-1 flex justify-center items-center min-w-[340px] min-h-[420px]">
            {/* Big Background Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br bg-[#0073B1] rounded-full z-0 opacity-90 md:h-[574px] md:w-[574px] lg:h-[538px] lg:w-[538px] xl:h-[645px] xl:w-[645px] 2xl:h-[868px] 2xl:w-[868px]"></div>

            {/* Central White Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl   p-4 flex flex-col items-center     h-[204px] w-[318px] md:h-[350px] md:w-[546px] lg:h-[264px] lg:w-[412px] xl:h-[299px] xl:w-[466px] 2xl:h-[417px] 2xl:w-[662px]"> 
              {/* Top: RocketReach Logo Placeholder */}  
              <div className="mb-6 text-center">
                 {/* Placeholder for RocketReach Logo Image */}
                 <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-xs text-gray-500">Logo</div> 
                 <div className="font-bold text-lg text-[#0073B1]">RocketReach</div>
              </div>

              {/* Center: Connecting Lines Placeholder */}  
              <div className="relative w-full h-10 mb-6"> {/* Container for lines */}
                 <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300"></div> {/* Vertical line */}
                 <div className="absolute bottom-0 left-[10%] w-[80%] h-px bg-gray-300"></div> {/* Horizontal line */}
                 {/* Add small vertical connectors from horizontal line if needed */}
              </div>

              {/* Bottom: Integration Logos in individual cards */}  
              <div className="flex justify-around items-center gap-2 w-full">
                 {/* Salesforce Placeholder */}
                 <div className="bg-white p-3 rounded-lg border border-gray-200 text-center w-1/5 flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded mb-1 text-xs flex items-center justify-center text-blue-600">SF</div> 
                    <div className="text-xs text-gray-600">Salesforce</div>
                 </div>
                 {/* HubSpot Placeholder */}
                 <div className="bg-white p-3 rounded-lg border border-gray-200 text-center w-1/5 flex flex-col items-center">
                    <div className="w-8 h-8 bg-orange-100 rounded mb-1 text-xs flex items-center justify-center text-orange-600">HS</div> 
                    <div className="text-xs text-gray-600">HubSpot</div>
                 </div>
                 {/* Salesloft Placeholder */}
                 <div className="bg-white p-3 rounded-lg border border-gray-200 text-center w-1/5 flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-100 rounded mb-1 text-xs flex items-center justify-center text-green-600">SL</div> 
                    <div className="text-xs text-gray-600">Salesloft</div>
                 </div>
                 {/* Outreach Placeholder */}
                 <div className="bg-white p-3 rounded-lg border border-gray-200 text-center w-1/5 flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded mb-1 text-xs flex items-center justify-center text-purple-600">O</div> 
                    <div className="text-xs text-gray-600">Outreach</div>
                 </div>
                 {/* Bullhorn Placeholder */}
                 <div className="bg-white p-3 rounded-lg border border-gray-200 text-center w-1/5 flex flex-col items-center">
                    <div className="w-8 h-8 bg-red-100 rounded mb-1 text-xs flex items-center justify-center text-red-600">BH</div> 
                    <div className="text-xs text-gray-600">Bullhorn</div>
                 </div>
              </div>

            </div>
          </div>

          {/* Right: Features (Remains the same) */}
          <div className="flex-1 min-w-[320px] flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0073B1] mb-6">Compatible with any workflow</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600 flex-shrink-0">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#222b3a]">Integrations</div>
                  <div className="text-gray-600 text-sm">
                    Seamlessly integrate with CRM or marketing automation platforms like Salesforce, HubSpot, and more.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600 flex-shrink-0">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#222b3a]">API</div>
                  <div className="text-gray-600 text-sm">
                    Enrich your data at scale or power your own applications with 4.5B records, speed, and an exceptional fill rate.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600 flex-shrink-0">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#222b3a]">Browser Extension</div>
                  <div className="text-gray-600 text-sm">
                    Save time when you prospect on popular social media sites and discover company connections from any website.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* =======Compatible Workflow Section end========= */}



   {/* Data Quality Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Left: Circle & Card */}
            <div className="col-lg-6 position-relative" style={{ minHeight: '480px' }}>
              {/* Big Circle */}
              <div className="position-absolute translate-middle" style={{ 
                left: '50%', top: '50%',
                width: '350px', height: '350px', 
                background: '#0073B1',
                borderRadius: '50%',
                zIndex: 0,
                opacity: 0.9
              }}></div>
              {/* Card */}
              <div className="position-relative bg-white rounded-4 shadow d-flex overflow-hidden" style={{ zIndex: 1, width: '380px', minHeight: '220px', margin: '0 auto' }}>
                {/* Sidebar */}
                <div className="bg-light py-4 px-3 d-flex flex-column gap-2 border-end" style={{ width: '140px' }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="bg-primary rounded-circle p-1 d-flex align-items-center justify-content-center">
                      <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/>
                      </svg>
                    </span>
                    <span className="fw-semibold text-secondary">Lists</span>
                  </div>
                  <div className="bg-primary text-white rounded px-2 py-1 fw-medium">Marketing in LA</div>
                  <div className="text-secondary px-2 py-1">Sales in NY</div>
                  <div className="text-secondary px-2 py-1">Designers in Boston</div>
                  <div className="text-secondary px-2 py-1">HR in Dallas</div>
                </div>
                {/* Main Content */}
                <div className="flex-grow-1 p-4 d-flex flex-column gap-2">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <span className="badge rounded-pill bg-primary-subtle text-primary d-flex align-items-center gap-1">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <circle cx="12" cy="12" r="5"/>
                      </svg> Los Angeles
                    </span>
                    <span className="badge rounded-pill bg-primary-subtle text-primary d-flex align-items-center gap-1">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg> Marketing
                    </span>
                    <span className="badge rounded-pill bg-primary-subtle text-primary d-flex align-items-center gap-1">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                      </svg> HubSpot
                    </span>
                  </div>
                  {/* Profile Card */}
                  <div className="bg-light rounded p-3 d-flex align-items-center gap-3 w-100">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice Betancourt" className="rounded-circle object-fit-cover" style={{ width: '48px', height: '48px' }} />
                    <div>
                      <div className="fw-semibold">Alice Betancourt</div>
                      <div className="small text-secondary">Sr. Marketing Manager <span className="text-primary fw-semibold">@ RIV Brokers</span></div>
                      <div className="small text-secondary">Los Angeles, CA, USA</div>
                    </div>
                  </div>
                  {/* Placeholder for more profiles */}
                  <div className="bg-light rounded py-2 opacity-60 my-1"></div>
                  <div className="bg-light rounded py-2 opacity-40"></div>
                </div>
              </div>
            </div>
            {/* Right: Features */}
            <div className="col-lg-6">
              <h2 className="fw-bold text-primary mb-4" style={{ fontSize: '32px' }}>Discover exceptional data quality</h2>
              <ul className="list-unstyled">
                <li className="d-flex gap-3 mb-4">
                  <span className="text-primary mt-1">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="fw-bold" style={{ fontSize: '20px' }}>Broadest Global Coverage</h4>
                    <p className="text-muted small">700M profiles and 60M companies captured worldwide with unique coverage in healthcare, legal, founders, technology, and more</p>
                  </div>
                </li>
                <li className="d-flex gap-3 mb-4">
                  <span className="text-primary mt-1">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="fw-bold" style={{ fontSize: '20px' }}>Highest data accuracy</h4>
                    <p className="text-muted small">Global phone and email coverage and best email finder with 90-98% deliverability on verified emails</p>
                  </div>
                </li>
                <li className="d-flex gap-3">
                  <span className="text-primary mt-1">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="fw-bold" style={{ fontSize: '20px' }}>Target better with Intent Data</h4>
                    <p className="text-muted small">Finding potential buyers who are actively exploring solutions in your space with B2B intent data</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



 {/* ====== Stats Section Start ====== */}
 <section className="w-full bg-[#0073B1] py-16 text-white mt-20"> {/* Added mt-20 for top margin */}
        <div className="w-full max-w-screen-lg mx-auto px-6 md:px-12 text-center">
          <p className="text-lg mb-12">RocketReach, connecting made simple</p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
            {/* Stat 1: Million Profiles */}
            <div className="text-center relative md:pr-16 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-white/30">
              <div className="text-6xl font-bold mb-2">700</div>
              <div className="text-sm opacity-80">Million Profiles</div>
            </div>
            {/* Stat 2: Million Companies */}
            <div className="text-center relative md:pr-16 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-white/30">
              <div className="text-6xl font-bold mb-2">60</div>
              <div className="text-sm opacity-80">Million Companies</div>
            </div>
            {/* Stat 3: Email Verifications */}
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">180M</div>
              <div className="text-sm opacity-80">Email Verifications Monthly</div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Stats Section End ====== */}
     
      {/* ============= Test.tsx Content End ============= */}

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