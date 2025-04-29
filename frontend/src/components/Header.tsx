import React from 'react';
import { useState } from "react";
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [employersMenuOpen, setEmployersMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (mobileSearchOpen) setMobileSearchOpen(false);
  };
  
  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleEmployersMenu = () => {
    setEmployersMenuOpen(!employersMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <Link href="/">
          <div className="d-flex align-items-center cursor-pointer">
            <div className="fw-bold text-blue-600 fs-4 d-flex align-items-center">
              <svg className="me-2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#2563EB" />
                <path d="M11 15 L19 15" stroke="white" strokeWidth="2" />
                <path d="M11 11 L19 11" stroke="white" strokeWidth="2" />
                <path d="M11 19 L19 19" stroke="white" strokeWidth="2" />
                <path d="M8 8 L8 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 8 L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              24Jobs
            </div>
          </div>
        </Link>
        
        {/* Search - Desktop */}
        <div className="search-container mx-4 d-none d-md-block flex-grow-1" style={{ maxWidth: '420px' }}>
          <div className="position-relative w-100">
            <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control bg-light border-0 ps-5 py-2 w-100" 
              placeholder="Search professionals or companies..." 
              style={{ borderRadius: '4px', minWidth: '100%', fontSize: '0.9rem' }}
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-4 text-sm text-gray-600">
          <Link href="/jobs">
            <a className={`hover:text-blue-600 transition-colors font-medium ${location === '/jobs' ? 'text-blue-600 font-semibold' : ''}`}>Find Jobs</a>
          </Link>
          <Link href="/company">
            <a className={`hover:text-blue-600 transition-colors font-medium ${location === '/company' ? 'text-blue-600 font-semibold' : ''}`}>Company Reviews</a>
          </Link>
          <Link href="/salaries">
            <a className={`hover:text-blue-600 transition-colors font-medium ${location === '/salaries' ? 'text-blue-600 font-semibold' : ''}`}>Find Salaries</a>
          </Link>
          <Link href="/people">
            <a className={`hover:text-blue-600 transition-colors font-medium ${location === '/people' ? 'text-blue-600 font-semibold' : ''}`}>People</a>
          </Link>
        </nav>
        
        <div className="d-flex gap-3 align-items-center">
          <Link href="/signin">
            <a className="text-blue-600 border border-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition-colors d-none d-md-inline-block">Login</a>
          </Link>
          <Link href="/signup">
            <a className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded font-medium transition-colors d-none d-md-inline-block">Register</a>
          </Link>
          
          {/* Mobile Buttons */}
          <div className="d-md-none d-flex align-items-center">
            {/* Search Button */}
            <button 
              className={`btn btn-sm ${mobileSearchOpen ? 'btn-primary' : 'btn-light'} me-2`}
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <i className="bi bi-search fs-5"></i>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="d-md-none text-gray-700" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} fs-4`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className={`container py-3 border-top d-md-none ${mobileSearchOpen ? 'd-block' : 'd-none'}`}>
        <div className="position-relative w-100">
          <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary">
            <i className="bi bi-search"></i>
          </span>
          <input 
            type="text" 
            className="form-control bg-light border-0 ps-5 py-2 w-100" 
            placeholder="Search professionals or companies..." 
            style={{ borderRadius: '4px', minWidth: '100%', fontSize: '0.9rem' }}
          />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`d-md-none bg-white w-100 border-t border-gray-100 py-3 ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}>
        <nav className="container d-flex flex-column gap-3 text-gray-600">
          <Link href="/jobs">
            <a className={`hover:text-blue-600 transition-colors py-2 font-medium ${location === '/jobs' ? 'text-blue-600 font-semibold' : ''}`}>Find Jobs</a>
          </Link>
          <Link href="/company">
            <a className={`hover:text-blue-600 transition-colors py-2 font-medium ${location === '/company' ? 'text-blue-600 font-semibold' : ''}`}>Company Reviews</a>
          </Link>
          <Link href="/salaries">
            <a className={`hover:text-blue-600 transition-colors py-2 font-medium ${location === '/salaries' ? 'text-blue-600 font-semibold' : ''}`}>Find Salaries</a>
          </Link>
          <Link href="/people">
            <a className={`hover:text-blue-600 transition-colors py-2 font-medium ${location === '/people' ? 'text-blue-600 font-semibold' : ''}`}>People</a>
          </Link>
          
          <div className="d-flex flex-column gap-2 mt-3">
            <Link href="/signin">
              <a className="btn btn-outline-primary w-100 py-2 d-flex align-items-center justify-content-center">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a className="btn btn-orange w-100 py-2 d-flex align-items-center justify-content-center" style={{backgroundColor: '#f97316', color: 'white'}}>
                <i className="bi bi-person-plus me-2"></i>
                Register
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
