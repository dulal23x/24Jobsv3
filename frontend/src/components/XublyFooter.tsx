import React from 'react';
import { Link } from 'wouter';

export default function XublyFooter() {
  return (
    <footer className="py-0">
      {/* Top section with newsletter */}
      <div className="bg-[#f0f7ff] py-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h4 className="fw-bold mb-2 text-gray-900">Stay connected with Xubly</h4>
              <p className="text-gray-600">Get the latest jobs, insights, and networking opportunities.</p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column flex-md-row gap-2">
                <input type="email" className="form-control dashboard-search py-2 px-3" placeholder="Enter your email address"/>
                <button className="btn-primary-linkedin">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-white py-8 border-top border-bottom border-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="fw-bold text-[#0a66c2] fs-3 d-flex align-items-center mb-4 xs-center justify-content-md-start justify-content-center">
                <i className="bi bi-briefcase-fill me-2 fs-3"></i>
                <span className="letter-spacing-1">Xubly</span>
              </div>
              <p className="text-gray-600 mb-4 xs-center text-md-left">The professional networking platform for your career growth.</p>
              <div className="d-flex gap-3 mb-3 justify-content-md-start justify-content-center">
                <a href="#" className="social-footer-link"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-footer-link"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="social-footer-link"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-footer-link"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">Company</h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">Solutions</h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#">Talent Search</a></li>
                    <li><a href="#">Job Postings</a></li>
                    <li><a href="#">Premium Services</a></li>
                    <li><a href="#">Business Solutions</a></li>
                    <li><a href="#">Enterprise Plans</a></li>
                  </ul>
                </div>
                
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">Resources</h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Guides</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Developer API</a></li>
                  </ul>
                </div>
                
                <div className="col-md-3 col-6 mb-4">
                  <h6 className="fw-bold mb-3 text-gray-900 footer-heading xs-center">Legal</h6>
                  <ul className="list-unstyled footer-links xs-center">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Security</a></li>
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
            <p className="mb-md-0 mb-3 text-gray-600 small">© 2025 Xubly Inc. All rights reserved.</p>
            <div className="d-flex gap-4">
              <a href="#" className="text-gray-500 small">Sitemap</a>
              <a href="#" className="text-gray-500 small">Accessibility</a>
              <a href="#" className="text-gray-500 small">Do Not Sell My Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}