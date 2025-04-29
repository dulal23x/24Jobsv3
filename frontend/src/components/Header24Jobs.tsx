import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';

export default function Header24Jobs() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [employersMenuOpen, setEmployersMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleEmployersMenu = () => {
    setEmployersMenuOpen(!employersMenuOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEmployersMenuOpen(false);
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
          
          {/* Navigation - Desktop */}
          <nav className="d-none d-md-flex align-items-center gap-5">
            <Link href="/people">
              <div className={`nav-link d-flex flex-column align-items-center cursor-pointer ${location === '/people' ? 'active' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"/>
                  <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"/>
                </svg>
                <span className="nav-text">People</span>
              </div>
            </Link>
            <Link href="/companies">
              <div className={`nav-link d-flex flex-column align-items-center cursor-pointer ${location === '/companies' ? 'active' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 22H3V2H15V4H5V20H19V10H21V22Z"/>
                  <path d="M21 8H17V4H19V6H21V8Z"/>
                  <path d="M8 9H7V7H8V9Z"/>
                  <path d="M11 9H10V7H11V9Z"/>
                  <path d="M14 9H13V7H14V9Z"/>
                  <path d="M8 12H7V10H8V12Z"/>
                  <path d="M11 12H10V10H11V12Z"/>
                  <path d="M14 12H13V10H14V12Z"/>
                  <path d="M8 15H7V13H8V15Z"/>
                  <path d="M11 15H10V13H11V15Z"/>
                  <path d="M14 15H13V13H14V15Z"/>
                  <path d="M8 18H7V16H8V18Z"/>
                  <path d="M11 18H10V16H11V18Z"/>
                  <path d="M14 18H13V16H14V18Z"/>
                </svg>
                <span className="nav-text">Companies</span>
              </div>
            </Link>
            <Link href="/jobs">
              <div className={`nav-link d-flex flex-column align-items-center cursor-pointer ${location === '/jobs' ? 'active' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.7 5.3H17V3.7C17 2.8 16.2 2 15.3 2H8.7C7.8 2 7 2.8 7 3.7V5.3H2.3C1.9 5.3 1.5 5.7 1.5 6.2V20.3C1.5 21.2 2.3 22 3.2 22H20.8C21.7 22 22.5 21.2 22.5 20.3V6.2C22.5 5.7 22.1 5.3 21.7 5.3ZM8.7 3.7H15.3V5.3H8.7V3.7ZM20.8 20.3H3.2V6.8H20.8V20.3Z"/>
                  <path d="M12 11.8C11.6 11.8 11.2 12.2 11.2 12.7V16.7C11.2 17.1 11.6 17.5 12 17.5C12.4 17.5 12.8 17.1 12.8 16.7V12.7C12.8 12.2 12.4 11.8 12 11.8Z"/>
                </svg>
                <span className="nav-text">Jobs</span>
              </div>
            </Link>
            <div className="position-relative" ref={dropdownRef}>
              <div 
                className={`nav-link d-flex flex-column align-items-center cursor-pointer ${employersMenuOpen || location.startsWith('/employer') ? 'active' : ''}`}
                onClick={toggleEmployersMenu}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"/>
                  <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"/>
                </svg>
                <span className="nav-text d-flex align-items-center">
                  Employers <i className={`bi ${employersMenuOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`} style={{ fontSize: "10px" }}></i>
                </span>
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
          </nav>
          
          {/* Auth Buttons */}
          <div className="d-none d-md-flex gap-2">
            <Link href="/signin">
              <button className="btn btn-outline-primary px-4">Sign In</button>
            </Link>
            <Link href="/join">
              <button className="btn btn-primary px-4">Join Now</button>
            </Link>
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
            <Link href="/jobs">
              <div className={`d-flex align-items-center ${location === '/jobs' ? 'text-primary' : ''}`}>
                <i className="bi bi-briefcase me-3"></i>
                Jobs
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
              <Link href="/signin">
                <button className="btn btn-outline-primary w-100">Sign In</button>
              </Link>
              <Link href="/join">
                <button className="btn btn-primary w-100">Join Now</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}