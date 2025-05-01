import React from 'react';
import { Link } from 'wouter';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer24Jobs() {
  return (
    <footer className="py-0">
      {/* Main footer content */}
      <div className="bg-white py-8 border-top border-bottom border-gray-200">
        <div className="container">
          <div className="row">
            {/* Logo and Social Media Section */}
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="fw-bold  fs-3 d-flex align-items-center mb-4 xs-center justify-content-md-start justify-content-center">
                <i className="bi bi-briefcase-fill me-2 fs-3"></i>
                <span className="letter-spacing-1">24Jobs</span>
              </div>
              <p className="text-gray-600 mb-4 xs-center text-md-left">The professional networking platform for your career growth.</p>
              
              {/* Enhanced Social Media Links Section */}
              <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center text-md-left">Connect With Us</h6>
              <div className="social-media-section mb-4">
                <div className="d-flex gap-3 mb-3 justify-content-md-start justify-content-center">
                  <a href="https://www.facebook.com/24jobs.net/" className="social-footer-link" aria-label="Facebook" style={{color: '#1877f2', backgroundColor: 'white'}}>
                    <FaFacebook size={28} />
                  </a>
                  
                 
                  <a href="https://www.linkedin.com/company/24jobs" className="social-footer-link" aria-label="LinkedIn" style={{color: '#0a66c2', backgroundColor: 'white'}}>
                    <FaLinkedin size={28} />
                  </a>
                  
                </div>
                
                <div className="d-flex flex-column gap-2 xs-center text-md-left">
                  <a href="#" className="text-gray-600 d-flex align-items-center gap-2 justify-content-md-start justify-content-center">
                    <i className="bi bi-envelope-fill"></i>
                    <span>contact@24jobs.net</span>
                  </a>
                  <a href="#" className="text-gray-600 d-flex align-items-center gap-2 justify-content-md-start justify-content-center">
                    <i className="bi bi-telephone-fill"></i>
                    <span>+1(218)630-8568</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced Links Section */}
            <div className="col-lg-9">
              <div className="row">
                {/* Quick Links */}
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">
                    <i className="bi bi-building me-2 text-[#0a66c2]"></i>
                    Company
                  </h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-info-circle text-muted"></i> About us</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-briefcase text-muted"></i> Careers</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-newspaper text-muted"></i> Press</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-journal-text text-muted"></i> Blog</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-chat-dots text-muted"></i> Contact</a></li>
                  </ul>
                </div>
                
                {/* Solutions */}
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">
                    <i className="bi bi-gear me-2 text-[#0a66c2]"></i>
                    Solutions
                  </h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-search text-muted"></i> Talent Search</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-file-earmark-post text-muted"></i> Job Postings</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-star text-muted"></i> Premium Services</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-building-gear text-muted"></i> Business Solutions</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-building-up text-muted"></i> Enterprise Plans</a></li>
                  </ul>
                </div>
                
                {/* Resources */}
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">
                    <i className="bi bi-book me-2 text-[#0a66c2]"></i>
                    Resources
                  </h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-question-circle text-muted"></i> Help Center</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-award text-muted"></i> Success Stories</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-signpost-2 text-muted"></i> Guides</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-calendar-event text-muted"></i> Events</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-code-square text-muted"></i> Developer API</a></li>
                  </ul>
                </div>
                
                {/* Legal */}
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">
                    <i className="bi bi-shield-check me-2 text-[#0a66c2]"></i>
                    Legal
                  </h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-lock text-muted"></i> Privacy Policy</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-file-earmark-text text-muted"></i> Terms of Service</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-cookie text-muted"></i> Cookie Policy</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-universal-access text-muted"></i> Accessibility</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-1 justify-content-md-start justify-content-center"><i className="bi bi-shield-lock text-muted"></i> Security</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-gray-50 py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-md-0 mb-3 text-gray-600 small">© 2025 24Jobs Inc. All rights reserved.</p>
            <div className="d-flex gap-4">
              <a href="#" className="text-gray-500 small d-flex align-items-center"><i className="bi bi-diagram-3 me-2"></i> Sitemap</a>
              <a href="#" className="text-gray-500 small d-flex align-items-center"><i className="bi bi-universal-access me-2"></i> Accessibility</a>
              <a href="#" className="text-gray-500 small d-flex align-items-center"><i className="bi bi-shield-exclamation me-2"></i> Do Not Sell My Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}