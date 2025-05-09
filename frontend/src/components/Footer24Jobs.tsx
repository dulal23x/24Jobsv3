import React from 'react';
import { Link } from 'wouter';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer24Jobs() {
  return (
    <footer className="py-0">
      {/* Main footer content */}
      <div className="bg-white pt-8 lg:pt-10 border-t border-gray-200">
        {/* Adjusted padding */}
        <div className="container   mx-auto  mt-[48px] px-4 sm:px-6 lg:px-8">
          {/* Centered container with padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Changed row to grid */}
            {/* Logo and Social Media Section */}
            <div className="mb-2 lg:mb-0">
              {/* Removed col classes */}
              <div className="font-bold text-4xl lg:text-3xl flex items-center justify-center md:justify-start mb-1 text-blue-700  mb-2 ">
                {/* Adjusted size, color, alignment */}
                <i className="bi bi-briefcase-fill mr-2"></i>
                <span className="tracking-wide">24Jobs</span>
              </div>
              <p className="text-gray-600 mb-4  md:text-start sm:text-center  text-md sm:text-[29px] md:text-sm ">
                {/* Adjusted text size and alignment */}
                The professional networking platform for your career growth.
              </p>

              {/* Enhanced Social Media Links Section */}
              <h6 className="font-semibold mb-3 text-gray-900  md:text-left text-base">
                {/* Adjusted size and alignment */}
                Connect With Us
              </h6>
              <div className="mb-4">
                <div className="flex gap-4 mb-3 justify-center md:justify-start">
                  {/* Adjusted gap */}
                  <a href="https://www.facebook.com/24jobs.net/" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                    {/* Simpler social link styling */}
                    <FaFacebook size={24} /> {/* Adjusted size */}
                  </a>
                  <a href="https://www.linkedin.com/company/24jobs" className="text-blue-700 hover:text-blue-900" aria-label="LinkedIn">
                    <FaLinkedin size={24} /> {/* Adjusted size */}
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-center md:text-left text-sm sm:text-base text-lg">
                  {/* Adjusted text size and alignment */}
                  <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-2">
                    <i className="bi bi-envelope-fill"></i>
                    <span>contact@24jobs.net</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-2">
                    <i className="bi bi-telephone-fill"></i>
                    <span>+1(218)630-8568</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Link Sections */} 
            {/* Quick Links */}
            <div className="mb-4 text-center md:text-left">
              {/* Removed col classes, added alignment */}
              <h6 className="font-semibold mb-3 text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <i className="bi bi-building text-blue-700"></i>
                Company
              </h6>
              <ul className="list-none p-0 m-0 space-y-2 text-sm sm:text-base text-lg">
                {/* Changed ul classes, added spacing */}
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-info-circle text-gray-500"></i> About us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-briefcase text-gray-500"></i> Careers</Link></li>
               
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-journal-text text-gray-500"></i> Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-chat-dots text-gray-500"></i> Contact</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-4 text-center md:text-left">
               {/* Removed col classes, added alignment */}
              <h6 className="font-semibold mb-3 text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <i className="bi bi-gear text-blue-700"></i>
                Solutions
              </h6>
              <ul className="list-none p-0 m-0 space-y-2 text-sm sm:text-base text-lg">
                 {/* Changed ul classes, added spacing */}
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-search text-gray-500"></i> Talent Search</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center justify-center md:justify-start gap-1"><i className="bi bi-file-earmark-post text-gray-500"></i> Job Postings</Link></li>
                
              </ul>
            </div>

            {/* Resources & Legal (Combined for better spacing on some screens) */}
            
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-100 py-4">
        {/* Adjusted background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Added responsive alignment */}
            <p className="mb-3 md:mb-0 text-gray-600 text-xs sm:text-sm md:text-base text-lg">
              {/* Adjusted text size */}
              © 2025 24Jobs Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm md:text-base text-lg">
              {/* Adjusted text size and wrap */}
              <Link href="#" className="text-gray-500 hover:text-gray-700 flex items-center gap-1"><i className="bi bi-diagram-3"></i> Sitemap</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 flex items-center gap-1"><i className="bi bi-universal-access"></i> Accessibility</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 flex items-center gap-1"><i className="bi bi-shield-exclamation"></i> Do Not Sell My Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}