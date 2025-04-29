import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';

export default function Header24Jobs() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [employersMenuOpen, setEmployersMenuOpen] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const signInPopupRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleEmployersMenu = () => {
    setEmployersMenuOpen(!employersMenuOpen);
  };
  
  const toggleSignInPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignInPopup(!showSignInPopup);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEmployersMenuOpen(false);
      }
      
      if (signInPopupRef.current && !signInPopupRef.current.contains(event.target as Node)) {
        setShowSignInPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="bg-white border-bottom">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-2">
          {/* Logo */}
          <Link href="/">
            <div className="d-flex align-items-center gap-2 text-decoration-none cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#0073B1"/>
                <path d="M8 8H24V12H22V10H10V22H22V20H24V24H8V8Z" fill="white"/>
              </svg>
              <span className="fw-bold fs-4" style={{ color: "#0073B1" }}>24Jobs</span>
            </div>
          </Link>
          
          {/* Navigation - Desktop - Updated to match the image */}
          <nav className="d-none d-md-flex align-items-center gap-4">
            <Link href="/jobs">
              <div className={`header-nav-item ${location === '/jobs' ? 'active' : ''}`}>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                  </svg>
                  <span className="nav-text fw-medium">Jobs</span>
                </div>
                {location === '/jobs' && <div className="nav-indicator"></div>}
              </div>
            </Link>
            <Link href="/people">
              <div className={`header-nav-item ${location === '/people' ? 'active' : ''}`}>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                  <span className="nav-text fw-medium">People</span>
                </div>
                {location === '/people' && <div className="nav-indicator"></div>}
              </div>
            </Link>
            <Link href="/companies">
              <div className={`header-nav-item ${location === '/companies' ? 'active' : ''}`}>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                  </svg>
                  <span className="nav-text fw-medium">Companies</span>
                </div>
                {location === '/companies' && <div className="nav-indicator"></div>}
              </div>
            </Link>
            
          </nav>
          
          {/* Auth Buttons */}
          <div className="d-none d-md-flex gap-2 position-relative">
            <a href="#" onClick={toggleSignInPopup}>
              <button className="btn btn-outline-primary" style={{ padding: "8px 24px" }}>Sign In</button>
            </a>
            <Link href="/join">
              <button className="btn btn-primary" style={{ padding: "8px 24px" }}>Join Now</button>
            </Link>
            
            {/* Sign In Popup - Positioned on the right side with full height */}
            {showSignInPopup && (
              <div 
                ref={signInPopupRef}
                className="position-fixed bg-white shadow-lg" 
                style={{ 
                  width: '400px',
                  top: '0',
                  right: '0',
                  bottom: '0',
                  zIndex: 1050,
                  height: '100vh',
                  overflowY: 'auto',
                  padding: '2rem'
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="m-0 fw-bold">Login</h4>
                  <button 
                    className="btn p-0 text-secondary border-0"
                    onClick={() => setShowSignInPopup(false)}
                    style={{ fontSize: '24px', lineHeight: '1' }}
                  >
                    ×
                  </button>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div></div> {/* Empty div for alignment */}
                  <a href="/register" className="text-primary text-decoration-none fw-medium">
                    Register for free
                  </a>
                </div>
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">Email ID / Username</label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      id="email" 
                      placeholder="Enter your active Email ID / Username" 
                      style={{ borderRadius: '4px', padding: '12px 16px' }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-medium">Password</label>
                    <div className="position-relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control form-control-lg" 
                        id="password" 
                        placeholder="Enter your password"
                        style={{ borderRadius: '4px', padding: '12px 16px' }}
                      />
                      <button 
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y text-primary border-0 pe-3"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-end mb-4">
                    <a href="/forgot-password" className="text-primary text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-3 mb-3 rounded-pill"
                    style={{ fontSize: '16px', fontWeight: '500' }}
                  >
                    Login
                  </button>
                  
                  <div className="text-center mb-3 position-relative">
                    <hr className="my-3" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                      Or
                    </span>
                  </div>
                  
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                    Sign in with Google
                  </button>
                  
                  <div className="mt-4 text-center">
                    <a href="#" className="text-primary text-decoration-none fw-medium">
                      Use OTP to Login
                    </a>
                  </div>
                </form>
              </div>
            )}
            
            {/* Overlay for background when popup is shown */}
            {showSignInPopup && (
              <div 
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                style={{ zIndex: 1040 }}
                onClick={() => setShowSignInPopup(false)}
              ></div>
            )}
          </div>
          
          <div className="position-relative" ref={dropdownRef}>
            <div 
              className={`header-nav-item cursor-pointer ${location.startsWith('/employer') ? 'active' : ''}`}
              onClick={toggleEmployersMenu}
            >
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <span className="nav-text fw-medium d-flex align-items-center">
                  Employers <i className={`bi ${employersMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`} style={{ fontSize: "10px" }}></i>
                </span>
              </div>
              {location.startsWith('/employer') && <div className="nav-indicator"></div>}
            </div>
            
            {employersMenuOpen && (
              <div className="position-absolute bg-white shadow rounded mt-1" style={{ width: '200px', zIndex: 1000, right: '-50px' }}>
                <div className="py-1">
                  <Link href="/employer">
                    <div className="px-4 py-2 text-decoration-none hover-bg-light cursor-pointer">
                      Employer Dashboard
                    </div>
                  </Link>
                  <Link href="/post-job">
                    <div className="px-4 py-2 text-decoration-none hover-bg-light cursor-pointer">
                      Post Job
                    </div>
                  </Link>
                  <Link href="/search-candidates">
                    <div className="px-4 py-2 text-decoration-none hover-bg-light cursor-pointer">
                      Search Candidates
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="d-md-none btn"
            onClick={toggleMobileMenu}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'} fs-4`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container border-top py-3 d-md-none">
          <nav className="d-flex flex-column gap-3">
            <Link href="/jobs">
              <div className={`d-flex align-items-center ${location === '/jobs' ? 'text-primary' : ''}`}>
                <i className="bi bi-briefcase me-3"></i>
                Jobs
              </div>
            </Link>
            <Link href="/people">
              <div className={`d-flex align-items-center ${location === '/people' ? 'text-primary' : ''}`}>
                <i className="bi bi-people me-3"></i>
                People
              </div>
            </Link>
            <Link href="/companies">
              <div className={`d-flex align-items-center ${location === '/companies' ? 'text-primary' : ''}`}>
                <i className="bi bi-building me-3"></i>
                Companies
              </div>
            </Link>
            <div 
              className={`d-flex align-items-center justify-content-between cursor-pointer ${location.startsWith('/employer') ? 'text-primary' : ''}`}
              onClick={() => setEmployersMenuOpen(!employersMenuOpen)}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-person me-3"></i>
                Employers
              </div>
              <i className={`bi ${employersMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </div>
            
            {employersMenuOpen && (
              <div className="ms-4 d-flex flex-column gap-2">
                <Link href="/employer">
                  <div className="text-dark">Employer Dashboard</div>
                </Link>
                <Link href="/post-job">
                  <div className="text-dark">Post Job</div>
                </Link>
                <Link href="/search-candidates">
                  <div className="text-dark">Search Candidates</div>
                </Link>
              </div>
            )}
            
            <div className="d-flex flex-column gap-2 mt-3">
              <a href="#" onClick={toggleSignInPopup}>
                <button className="btn btn-outline-primary w-100" style={{ padding: "8px 24px" }}>Sign In</button>
              </a>
              <Link href="/join">
                <button className="btn btn-primary w-100" style={{ padding: "8px 24px" }}>Join Now</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}