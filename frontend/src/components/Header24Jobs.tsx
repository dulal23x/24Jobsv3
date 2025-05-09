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
        // Check if the click target is the sign-in button itself
        const isSignInButton = (event.target as Element).closest('a[href="#"] > button');
        if (!isSignInButton) {
          setShowSignInPopup(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="bg-white border-bottom sticky-top" style={{ zIndex: 1030 }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-4">
          {/* Logo - Increased size slightly */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="d-flex align-items-center gap-2 text-decoration-none cursor-pointer">
                <img src="/24jobs-logo.png" alt="24Jobs Logo" style={{ height: "36px", width: "auto" }} />
              </div>
            </Link>
          </div>
          
          {/* Centered Navigation - Desktop - Adjusted for better alignment and icon size */}
          <nav className="d-none d-lg-flex align-items-center justify-content-end  flex-grow-1 gap-2 mx-4">
            <Link href="/jobs">
              <div className={`header-nav-item d-flex align-items-center ${location === '/jobs' ? 'active' : ''}`} style={{ padding: '8px 12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                </svg>
                <span className="nav-text fw-medium fs-6">Jobs</span>
                {location === '/jobs' && <div className="nav-indicator position-absolute bottom-0 start-0 end-0"></div>}
              </div>
            </Link>
            <Link href="/people">
              <div className={`header-nav-item d-flex align-items-center ${location === '/people' ? 'active' : ''}`} style={{ padding: '8px 12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span className="nav-text fw-medium fs-6">People</span>
                {location === '/people' && <div className="nav-indicator position-absolute bottom-0 start-0 end-0"></div>}
              </div>
            </Link>
            <Link href="/companies">
              <div className={`header-nav-item d-flex align-items-center ${location === '/companies' ? 'active' : ''}`} style={{ padding: '8px 12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                </svg>
                <span className="nav-text fw-medium fs-6">Companies</span>
                {location === '/companies' && <div className="nav-indicator position-absolute bottom-0 start-0 end-0"></div>}
              </div>
            </Link>
            <Link href="/blog">
              <div className={`header-nav-item d-flex align-items-center ${location === '/blog' ? 'active' : ''}`} style={{ padding: '8px 12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M.952 1.022a.5.5 0 0 0-.488.084c-.32.207-.466.61-.464.938v11.8c.002.327.147.72.464.938a.5.5 0 0 0 .488.084c.317-.208.46-.603.458-.923V2.028c.002-.32-.14-.715-.458-.923zM12.5 1.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm-2 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zm-2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7zm-2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zm-3.5-.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0V1z"/>
                </svg>
                <span className="nav-text fw-medium fs-6">Blog</span>
                {location === '/blog' && <div className="nav-indicator position-absolute bottom-0 start-0 end-0"></div>}
              </div>
            </Link>
            {/* Employers Dropdown */}
            <div className="position-relative" ref={dropdownRef}>
              <div 
                className={`header-nav-item d-flex align-items-center cursor-pointer ${location.startsWith('/employer') ? 'active' : ''}`}
                style={{ padding: '8px 12px' }}
                onClick={toggleEmployersMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <span className="nav-text fw-medium fs-6 d-flex align-items-center">
                  Employers <i className={`bi ${employersMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`} style={{ fontSize: "12px" }}></i>
                </span>
                {location.startsWith('/employer') && <div className="nav-indicator position-absolute bottom-0 start-0 end-0"></div>}
              </div>
              
              {employersMenuOpen && (
                <div className="position-absolute bg-white shadow rounded mt-1" style={{ width: '200px', zIndex: 1000, left: '50%', transform: 'translateX(-50%)' }}>
                  <div className="py-1">
                    <Link href="/employer">
                      <div className="dropdown-item px-3 py-2 text-decoration-none hover-bg-light cursor-pointer fs-6 text-black">
                        Employer Dashboard
                      </div>
                    </Link>
                    <Link href="/employer/post-job">
                      <div className="dropdown-item px-3 py-2 text-decoration-none hover-bg-light cursor-pointer fs-6 text-black">
                        Post a Job
                      </div>
                    </Link>
                    <Link href="/employer/pricing">
                      <div className="dropdown-item px-3 py-2 text-decoration-none hover-bg-light cursor-pointer fs-6 text-black">
                        Pricing
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
          
          {/* Right Aligned Auth Buttons & Mobile Toggle - Adjusted button sizes */}
          <div className="d-flex gap-3 align-items-center flex-shrink-0">
            {/* Desktop Auth Buttons */}
            <div className="d-none d-md-flex gap-2 position-relative">
              <Link href="/signin">
                <button className="btn btn-outline-primary btn-sm" style={{ padding: "6px 18px" }}>Sign In</button>
              </Link>
              <Link href="/registration">
                <button className="btn btn-primary btn-sm" style={{ padding: "6px 18px" }}>Join Now</button>
              </Link>
              
              {/* Sign In Popup - Positioned on the right side with full height */}
              {showSignInPopup && (
                <div 
                  ref={signInPopupRef}
                  className="position-fixed bg-white shadow-lg w-full max-w-sm sm:max-w-md md:w-[400px]"
                  style={{ 
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
                      style={{ fontSize: '28px', lineHeight: '1' }}
                    >
                      &times;
                    </button>
                  </div>
                  
                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <span className="text-muted me-2">New to 24Jobs?</span>
                    <Link href="/registration" className="text-primary text-decoration-none fw-medium">
                      Register for free
                    </Link>
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

            {/* Mobile Menu Toggle - Increased size */}
            <div className="d-lg-none">
              <button 
                className="btn btn-light p-2 d-flex align-items-center justify-content-center" 
                style={{ width: '40px', height: '40px' }}
                onClick={toggleMobileMenu}
              >
                <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`d-lg-none bg-white border-top shadow-sm ${mobileMenuOpen ? 'd-block' : 'd-none'}`}>
        <nav className="container py-3 d-flex flex-column gap-2">
          <Link href="/jobs">
            <a className={`mobile-nav-link ${location === '/jobs' ? 'active' : ''} text-black`} style={{color:'#000'}}>Jobs</a>
          </Link>
          <Link href="/people">
            <a className={`mobile-nav-link ${location === '/people' ? 'active' : ''} text-black`} style={{color:'#000'}}>People</a>
          </Link>
          <Link href="/companies">
            <a className={`mobile-nav-link ${location === '/companies' ? 'active' : ''} text-black`} style={{color:'#000'}}>Companies</a>
          </Link>
          <Link href="/employer">
            <a className={`mobile-nav-link ${location.startsWith('/employer') ? 'active' : ''} text-black`} style={{color:'#000'}}>For Employers</a>
          </Link>
          
          <div className="d-flex gap-2 mt-3 pt-3 border-top">
            <a href="#" onClick={toggleSignInPopup} className="btn btn-outline-primary flex-grow-1 py-2 fs-6">
              Sign In
            </a>
            <Link href="/registration" className="btn btn-primary flex-grow-1 py-2 fs-6">
              Join Now
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Add CSS directly in the component for simplicity, or move to a CSS file */}
      <style>{`
        .header-nav-item {
          display: flex;
          align-items: center;
          padding: 8px 0; /* Reduced vertical padding */
          color: #000; /* Default text color: black */
          text-decoration: none;
          position: relative; /* Needed for the indicator */
          transition: color 0.2s ease-in-out;
        }
        .header-nav-item:hover {
          color: #0073B1; /* Hover color */
        }
        .header-nav-item.active {
          color: #0073B1; /* Active color */
          font-weight: 600;
        }
        .header-nav-item .nav-indicator {
          position: absolute;
          bottom: -9px; /* Adjust to align with border-bottom */
          left: 0;
          right: 0;
          height: 3px;
          background-color: #0073B1;
          border-radius: 2px;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa;
        }
        .mobile-nav-link {
          display: block;
          padding: 10px 15px;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          border-radius: 6px;
          transition: background-color 0.2s ease;
        }
        .mobile-nav-link:hover {
          background-color: #f0f0f0;
        }
        .mobile-nav-link.active {
          background-color: #e7f3ff;
          color: #0073B1;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}