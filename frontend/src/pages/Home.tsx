import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="homepage-container">
      {/* ================= Hero Section ================= */}
      <section className="hero-section py-5 md:py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-medium mb-4 text-gray-900 text-center lg:text-left">
                Unlock Your
                <span className="block">Professional</span>
                <span className="text-blue-600 block my-1">Potential</span>
                with 24Jobs
              </h1>
              <p className="text-[18px] sm:text-[19px] text-gray-600 mb-2 max-w-xl mx-auto lg:mx-0">
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center lg:text-left">
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
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
                <Link href="/registration">
                  <button className="btn btn-primary btn-lg px-5 py-3 rounded-lg shadow-md transition-transform hover:translate-y-[-3px] text-2xl font-bold w-full sm:w-auto">
                    Join Now
                  </button>
                </Link>
                <button className="btn btn-outline-primary btn-lg px-5 py-3 rounded-lg transition-colors hover:bg-blue-50 text-xl font-semibold w-full sm:w-auto">
                  Learn more
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex -space-x-3 mr-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/31.jpg" 
                    alt="User avatar" 
                    className="rounded-full border-2 border-white shadow-sm w-10 h-10 object-cover"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User avatar" 
                    className="rounded-full border-2 border-white shadow-sm w-10 h-10 object-cover"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
                    alt="User avatar" 
                    className="rounded-full border-2 border-white shadow-sm w-10 h-10 object-cover"
                  />
                </div>
                <div className="text-sm sm:text-base text-center lg:text-left">
                  <div className="font-medium text-gray-800">Joined by <strong>10M+ professionals</strong></div>
                  <div className="flex items-center text-gray-600 justify-center lg:justify-start">
                    <div className="text-yellow-500 mr-1">★★★★★</div>
                    <span>4.9/5 from 25K+ reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative text-center max-w-xl mx-auto lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional networking" 
                  className="rounded-lg shadow-lg w-full h-auto max-h-[400px] md:max-h-[500px] object-cover mx-auto"
                />

                <div className="absolute bg-white shadow-lg rounded-lg p-3 md:p-4 max-w-[280px] sm:max-w-[320px] bottom-4 -right-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:-right-8 xl:-right-12 transition-transform hover:scale-103">
                  <div className="flex items-start gap-3">
                    <img src='https://randomuser.me/api/portraits/women/33.jpg' alt=''
                    className='w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md object-cover'/>
                    <div className="overflow-hidden text-center sm:text-left">
                      <div className="text-yellow-500 text-sm mb-1">★★★★★</div>
                      <p className="mb-1 text-gray-800 text-xs md:text-sm leading-snug">
                        "24Jobs helped me connect with industry leaders and find opportunities that perfectly matched my career goals."
                      </p>
                      <p className="mb-0 text-gray-500 text-xs md:text-sm">
                        - Sarah Johnson, Software Engineer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <div className="bg-white flex items-center gap-2 py-3 px-4 rounded-lg shadow-md min-w-[160px]">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-blue-600 flex-shrink-0">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="currentColor"/>
                </svg>
                    <div className="text-center sm:text-left">
                      <div className="font-bold text-xl sm:text-2xl text-blue-600">10M+</div>
                      <div className="font-semibold text-gray-700 text-sm sm:text-base">Active Users</div>
                </div>
                  </div>
                  <div className="bg-white flex items-center gap-2 py-3 px-4 rounded-lg shadow-md min-w-[160px]">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-green-500 flex-shrink-0">
                      <rect x="4" y="7" width="16" height="13" rx="2" fill="currentColor"/>
                      <rect x="7" y="3" width="10" height="4" rx="2" fill="currentColor"/>
                </svg>
                <div className="text-center sm:text-left">
                      <div className="font-bold text-xl sm:text-2xl text-green-500">25K+</div>
                      <div className="font-semibold text-gray-700 text-sm sm:text-base">Companies</div>
                </div>
              </div>
                  <div className="bg-white flex items-center gap-2 py-3 px-4 rounded-lg shadow-md min-w-[160px]">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-600 flex-shrink-0">
                      <rect x="2" y="7" width="20" height="13" rx="2" fill="currentColor"/>
                      <rect x="7" y="3" width="10" height="4" rx="2" fill="currentColor"/>
                </svg>
                <div className="text-center sm:text-left">
                      <div className="font-bold text-xl sm:text-2xl text-purple-600">5K+</div>
                      <div className="font-semibold text-gray-700 text-sm sm:text-base">Daily Jobs</div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employer section start */}
      <section className='w-full py-10 md:py-16' style={{ background: 'linear-gradient(135deg, #415896 0%, #3b4e8c 100%)' }}>
        <div className="text-center lg:text-left text-white px-4 sm:px-6 lg:px-8">
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Are You An Employer?</h2>
          <p className="text-lg md:text-xl mb-6 mx-auto lg:mx-0 max-w-xl">
            Find the perfect candidates for your company. Post jobs and manage applications seamlessly.
          </p>
          <div className="flex justify-center lg:justify-center">
          <Link href="/people">
            <button 
                className="btn btn-light btn-lg px-6 py-3 rounded-full font-semibold text-blue-700 shadow-md transition-transform hover:translate-y-[-3px]"
            >
              Find Talent & Contact Info
            </button>
          </Link>
          </div>
        </div>
      </section>  
      {/* Employer section end */}

      {/* ============= Test.tsx Content Start (Refactored for Responsiveness) ============= */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
            {/* Left Side: Headline, Subheadline, Buttons */}
            <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
                Elevate Your<br />Sales and<br />Recruiting
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 lg:mb-8 max-w-lg">
                Grow your business and team with 24Jobs, the world's most accurate lead intelligence and easy-to-use sales acceleration solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="btn btn-primary btn-lg px-6 py-3 font-semibold shadow-md text-sm sm:text-base w-full sm:w-auto">
                  Try It For Free
                </button>
                <button className="btn btn-outline-primary btn-lg px-6 py-3 font-semibold text-sm sm:text-base w-full sm:w-auto">
                  Get a Demo
                </button>
              </div>
            </div>

            {/* Right Side: Graphics - Rebuilt with relative positioning and flex/grid */}
            <div className="flex-1 w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-lg h-[500px] flex items-center justify-center">
                {/* Base container with relative positioning */} 

                {/* Main Card (Centered) */}
                <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-200 w-full max-w-xs sm:max-w-sm">
                  <div className="flex flex-col items-center lg:items-start">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Janice Smith" className="rounded-full object-cover mb-3 border-4 border-white shadow-md w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0"/>
                    <div className="font-bold text-blue-700 text-lg sm:text-xl text-center lg:text-left">Janice Smith</div>
                    <div className="font-semibold text-blue-900 mb-1 text-sm sm:text-base text-center lg:text-left">Marketing Manager</div>
                    <div className="font-semibold text-blue-900 mb-2 text-sm sm:text-base text-center lg:text-left">@ Elevate.co</div>
                    <div className="text-gray-700 mb-1 text-xs sm:text-sm text-center lg:text-left">j.smith@elevate.co</div>
                    <div className="text-gray-700 mb-4 text-xs sm:text-sm text-center lg:text-left">📞 841-440-5251</div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2">
                      {/* Icons row */}
                      <span className="bg-blue-100 rounded-full flex items-center justify-center text-blue-600 w-8 h-8 sm:w-10 sm:h-10">
                      <i className="bi bi-envelope"></i>
                    </span>
                      <span className="bg-blue-100 rounded-full flex items-center justify-center text-blue-600 w-8 h-8 sm:w-10 sm:h-10">
                      <i className="bi bi-telephone"></i>
                    </span>
                      <span className="bg-blue-100 rounded-full flex items-center justify-center text-blue-600 w-8 h-8 sm:w-10 sm:h-10">
                      <i className="bi bi-gear"></i>
                    </span>
                      <span className="bg-green-100 rounded-full flex items-center justify-center text-green-600 w-8 h-8 sm:w-10 sm:h-10">
                      <i className="bi bi-people"></i>
                    </span>
                      <span className="bg-purple-100 rounded-full flex items-center justify-center text-purple-600 w-8 h-8 sm:w-10 sm:h-10">
                      <i className="bi bi-cloud"></i>
                    </span>
                  </div>
                </div>
              </div>

                {/* Smaller Cards Positioned Relatively */} 
                {/* Schedule Messages Card (Top Left) */}
                <div className="absolute z-0 top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 rounded-lg shadow-md p-3 border bg-purple-50 w-40 sm:w-48 text-center lg:text-left">
                  <div className="font-bold text-blue-700 mb-2 text-sm sm:text-base">Schedule Messages</div>
                  <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                  {[...Array(21)].map((_, i) => (
                      <div key={i} className={`rounded flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 ${i % 5 === 1 ? 'bg-blue-100' : 'bg-white'}`}>
                        {i % 5 === 1 && <i className="bi bi-envelope text-blue-600 text-xs"></i>}
                    </div>
                  ))}
                </div>
              </div>

                {/* Expand with AI Card (Top Right) */}
                <div className="absolute z-0 top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-lg shadow-md p-3 flex items-center gap-2 border bg-green-50 w-44 sm:w-52 text-center lg:text-left">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Mina Kim" className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mx-auto lg:mx-0"/>
                  <div className="min-w-0">
                    <div className="font-bold text-blue-700 text-sm sm:text-base truncate">Mina Kim</div>
                    <div className="text-green-700 font-semibold text-xs sm:text-sm leading-tight truncate">CMO & Founder Julep Agency</div>
                  </div>
                </div>

                {/* Target Better Card (Bottom Right) */}
                <div className="absolute z-0 bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rounded-lg shadow-md p-3 border bg-blue-50 w-48 sm:w-56 text-center lg:text-left">
                  <div className="font-bold text-blue-700 mb-2 text-sm sm:text-base">Target better</div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                    <span className="badge rounded-full bg-purple-100 text-purple-700 text-xs px-2 py-0.5">Intent Data</span>
                    <span className="badge rounded-full bg-green-100 text-green-700 text-xs px-2 py-0.5">Technographics</span>
                    <span className="badge rounded-full bg-red-100 text-red-700 text-xs px-2 py-0.5">NPI</span>
                    <span className="badge rounded-full bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5">NAICS</span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= Test.tsx Content End ============= */}

      {/* Trusted by Section */}
      <section className="py-8 md:py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center lg:text-left text-gray-600 font-semibold mb-6 md:mb-8 text-sm sm:text-base">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 sm:h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="Apple" className="h-8 sm:h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8 sm:h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 sm:h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8 sm:h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* ======= Engage Prospects Section start ========= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Features */}
            <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center lg:text-left">
                Engage prospects and automate
              </h2>
              <ul className="space-y-6">
              <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg>
                  </span>
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">
                      Simplest Sales Engagement solution
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      With <b>Autopilot</b>, create automated workflows to discover and engage with prospects in just a few clicks
                    </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg>
                  </span>
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">Email contacts from 24Jobs</div>
                    <div className="text-gray-600 text-sm md:text-base">
                      With <b>Messages</b>, customize your messaging, create templates, and monitor performance all in one place
                    </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg>
                  </span>
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">AI sales intelligence</div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Leverage AI to uncover contacts you've never thought of and expand your market with our AI-powered recommendations
                    </div>
                </div>
              </li>
            </ul>
          </div>
            {/* Right: Circle, Card, Calendar - Needs careful responsive adjustments */}
            <div className="relative flex-1 flex justify-center items-center w-full mt-10 lg:mt-0" style={{ minHeight: '400px' }}>
              {/* Added min-height */}
              {/* Big Circle - Maybe hide on smaller screens or reduce size */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] md:h-[350px] md:w-[350px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-full z-0 opacity-80">
                 {/* Adjusted size and color */}
              </div>
              {/* Card - Centered and responsive width */}
              <div className="relative z-10 bg-white rounded-xl shadow-2xl flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[120px] overflow-hidden mb-8 mx-auto">
                {/* Responsive max-width and added mx-auto */}
                {/* Sidebar - Consider hiding or stacking on small screens */}
                <div className="bg-gray-50 w-full sm:w-36 py-4 px-4 flex flex-row sm:flex-col gap-2 border-b sm:border-b-0 sm:border-r">
                   {/* Responsive direction and border */}
                  <div className="flex items-center gap-2 mb-0 sm:mb-4 flex-shrink-0">
                     {/* Responsive margin and flex-shrink */}
                    <span className="bg-blue-600 p-1.5 rounded-full"><svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg></span>
                    <span className="font-semibold text-gray-600 text-sm">Lists</span>
                </div>
                  <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {/* Responsive direction and overflow for small screens */}
                    <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs sm:text-sm font-medium whitespace-nowrap">Los Angeles</div> {/* Added whitespace-nowrap */}
                    <div className="text-gray-600 px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Operations</div>
                    <div className="text-gray-600 px-2 py-1 text-xs sm:text-sm whitespace-nowrap">C-Level</div>
              </div>
              </div>
              {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6 flex flex-col gap-3">
                   {/* Adjusted padding */}
                  <div className="flex gap-1 sm:gap-2 mb-2 flex-wrap">
                    {/* Adjusted gap */}
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg> Los Angeles</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Operations</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg> C-Level</span>
                </div>
                {/* Profile Card */}
                  <div className="bg-gray-100 rounded-lg shadow-sm p-3 flex items-center gap-3 w-full">
                     {/* Adjusted background and shadow */}
                    <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Andrew Ballard" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" /> {/* Responsive size */}
                    <div className="min-w-0"> {/* Added min-w-0 for text truncation */}
                      <div className="font-semibold text-gray-800 truncate">Andrew Ballard</div> {/* Added truncate */}
                      <div className="text-xs text-gray-500 truncate">Chief Operating Officer <span className="text-blue-600 font-semibold">@ Firestarter</span></div>
                      <div className="text-xs text-gray-400 truncate">Los Angeles, CA, USA</div>
                  </div>
                </div>
                {/* Placeholder for more profiles */}
                <div className="bg-gray-100 rounded-lg h-8 w-full my-1 opacity-60"></div>
                <div className="bg-gray-100 rounded-lg h-8 w-full opacity-40"></div>
              </div>
            </div>
              {/* Calendar & Clock - Consider simplifying or hiding on small screens */}
              <div className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 flex items-end gap-2 sm:gap-4 scale-75 sm:scale-100">
                {/* Scaled down */}
                <span className="bg-blue-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                  {/* Responsive size */}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="#fff" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </span>
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col items-center w-32 sm:w-40">
                  {/* Responsive size */}
                <div className="flex items-center justify-between w-full mb-2">
                    <span className="bg-purple-100 rounded p-1 text-purple-600 font-bold text-xs">&lt;</span>
                    <span className="w-6 h-1.5 sm:w-8 sm:h-2 bg-gray-200 rounded"></span>
                    <span className="bg-purple-100 rounded p-1 text-purple-600 font-bold text-xs">&gt;</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(15)].map((_, i) => (
                      <div key={i} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center ${i % 5 === 1 ? 'bg-blue-600' : 'bg-gray-100'}`}>
                        {/* Responsive size */}
                        {i % 5 === 1 && <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="#fff" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>}
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Engage Prospects Section end ========= */}

      {/* ======= Compatible Workflow Section start ========= */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Graphic Representation - Reversed order for mobile-first layout */}
            <div className="flex-1 w-full lg:order-last text-center lg:text-left">
              {/* Order changed for large screens */}
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center lg:text-left">
                Compatible with any workflow
              </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600 flex-shrink-0">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                  </svg>
                </span>
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">Integrations</div>
                    <div className="text-gray-600 text-sm md:text-base">
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
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">API</div>
                    <div className="text-gray-600 text-sm md:text-base">
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
                <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">Browser Extension</div>
                    <div className="text-gray-600 text-sm md:text-base">
                    Save time when you prospect on popular social media sites and discover company connections from any website.
                  </div>
                </div>
              </li>
            </ul>
            </div>

            {/* Left: Graphic Representation - Making it responsive */}
            <div className="relative flex-1 flex justify-center items-center w-full lg:order-first" style={{ minHeight: '400px' }}>
               {/* Order changed for large screens */}
              {/* Big Background Circle - Scaled down */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full z-0 opacity-80">
                 {/* Adjusted size and color */}
              </div>

              {/* Central White Card - Scaled down */}
              <div className="relative z-10 bg-white rounded-xl shadow-2xl p-4 md:p-6 flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Responsive max-width and padding */}
                {/* Top: Logo */}
                <div className="mb-4 md:mb-6 text-center">
                   {/* Adjusted margin */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-xs text-gray-500">
                    {/* Responsive size */}
                    Logo
                  </div>
                  <div className="font-bold text-base sm:text-lg text-blue-700">24Jobs</div> {/* Updated name */}
                </div>

                {/* Center: Connecting Lines - Simplified or hidden on small screens? Maybe just keep simple */}
                <div className="relative w-full h-8 md:h-10 mb-4 md:mb-6"> {/* Adjusted height/margin */}
                   <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300"></div>
                   <div className="absolute bottom-0 left-[15%] w-[70%] h-px bg-gray-300"></div>
                </div>

                {/* Bottom: Integration Logos - Using flex-wrap */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 w-full">
                  {/* Added flex-wrap and adjusted gap */}
                  {/* Salesforce Placeholder */}
                  <div className="bg-white p-2 md:p-3 rounded-lg border border-gray-200 text-center flex flex-col items-center w-16 sm:w-20">
                    {/* Adjusted padding and width */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded mb-1 text-xs flex items-center justify-center text-blue-600">SF</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Salesforce</div>
                  </div>
                  {/* HubSpot Placeholder */}
                  <div className="bg-white p-2 md:p-3 rounded-lg border border-gray-200 text-center flex flex-col items-center w-16 sm:w-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded mb-1 text-xs flex items-center justify-center text-orange-600">HS</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">HubSpot</div>
                  </div>
                  {/* Salesloft Placeholder */}
                  <div className="bg-white p-2 md:p-3 rounded-lg border border-gray-200 text-center flex flex-col items-center w-16 sm:w-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded mb-1 text-xs flex items-center justify-center text-green-600">SL</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Salesloft</div>
                  </div>
                  {/* Outreach Placeholder */}
                  <div className="bg-white p-2 md:p-3 rounded-lg border border-gray-200 text-center flex flex-col items-center w-16 sm:w-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded mb-1 text-xs flex items-center justify-center text-purple-600">O</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Outreach</div>
                  </div>
                  {/* Bullhorn Placeholder */}
                  <div className="bg-white p-2 md:p-3 rounded-lg border border-gray-200 text-center flex flex-col items-center w-16 sm:w-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded mb-1 text-xs flex items-center justify-center text-red-600">BH</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Bullhorn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Compatible Workflow Section end ========= */}

   {/* Data Quality Section */}
      <section className="py-16 md:py-20 bg-white">
         {/* Adjusted padding and background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Circle & Card */}
            <div className="relative flex-1 flex justify-center items-center w-full lg:w-1/2" style={{ minHeight: '450px' }}>
               {/* Added w-full lg:w-1/2 and adjusted min-height */}
              {/* Big Circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-blue-600 rounded-full z-0 opacity-80">
                {/* Adjusted size */}
              </div>
              {/* Card */}
              <div className="relative z-10 bg-white rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Adjusted max-width and structure */}
                {/* Sidebar */}
                <div className="bg-gray-50 w-full sm:w-40 p-4 border-b sm:border-b-0 sm:border-r flex flex-col gap-2">
                   {/* Adjusted width, padding, direction */}
                  <div className="flex items-center gap-2 mb-3">
                     {/* Responsive margin and flex-shrink */}
                    <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                      <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg></span>
                    <span className="font-semibold text-gray-600 text-sm">Lists</span>
                  </div>
                  <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs font-medium">Marketing in LA</div>
                  <div className="text-gray-500 px-2 py-1 text-xs">Sales in NY</div>
                  <div className="text-gray-500 px-2 py-1 text-xs">Designers in Boston</div>
                  <div className="text-gray-500 px-2 py-1 text-xs">HR in Dallas</div>
                </div>
                {/* Main Content */}
                <div className="flex-grow p-4 flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                    {/* Adjusted gap */}
                    <span className="badge rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1 px-2 py-0.5">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <circle cx="12" cy="12" r="5"/>
                      </svg> Los Angeles
                    </span>
                    <span className="badge rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1 px-2 py-0.5">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg> Marketing
                    </span>
                    <span className="badge rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1 px-2 py-0.5">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                      </svg> HubSpot
                    </span>
                  </div>
                  {/* Profile Card */}
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3 w-full shadow-sm">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice Betancourt" className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
                    {/* Responsive size */}
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate">Alice Betancourt</div>
                      <div className="text-xs text-gray-600 truncate">Sr. Marketing Manager <span className="text-blue-600 font-semibold">@ RIV Brokers</span></div>
                      <div className="text-xs text-gray-500 truncate">Los Angeles, CA, USA</div>
                    </div>
                  </div>
                  {/* Placeholder for more profiles */}
                  <div className="bg-gray-100 rounded h-6 sm:h-8 opacity-60 my-1"></div>
                  <div className="bg-gray-100 rounded h-6 sm:h-8 opacity-40"></div>
                </div>
              </div>
            </div>
            {/* Right: Features */}
            <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
               {/* Added w-full lg:w-1/2 */}
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center lg:text-left">
                 {/* Adjusted color */}
                Discover exceptional data quality
              </h2>
              <ul className="list-none p-0 m-0 space-y-6">
                 {/* Adjusted spacing */}
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div className="text-center lg:text-left">
                    <h4 className="font-semibold text-base md:text-lg text-gray-900">Broadest Global Coverage</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      700M profiles and 60M companies captured worldwide with unique coverage in healthcare, legal, founders, technology, and more
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div className="text-center lg:text-left">
                    <h4 className="font-semibold text-base md:text-lg text-gray-900">Highest data accuracy</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Global phone and email coverage and best email finder with 90-98% deliverability on verified emails
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1 flex-shrink-0">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/>
                    </svg>
                  </span>
                  <div className="text-center lg:text-left">
                    <h4 className="font-semibold text-base md:text-lg text-gray-900">Target better with Intent Data</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Finding potential buyers who are actively exploring solutions in your space with B2B intent data
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */} 
      <section className="w-full bg-blue-700 py-12 md:py-16 text-white">
        <div className="text-center lg:text-left px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg mb-8 md:mb-12 opacity-90">
            24Jobs, connecting made simple
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-8 md:gap-12 lg:gap-16">
            {/* Stat 1: Million Profiles */}
            <div className="text-center relative md:pr-8 lg:pr-16 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-px after:bg-white/30">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">700M+</div>
              <div className="text-xs sm:text-sm opacity-80">Profiles</div>
            </div>
            {/* Stat 2: Million Companies */}
            <div className="text-center relative md:pr-8 lg:pr-16 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-px after:bg-white/30">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">60M+</div>
              <div className="text-xs sm:text-sm opacity-80">Companies</div>
            </div>
            {/* Stat 3: Email Verifications */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">180M</div>
              <div className="text-xs sm:text-sm opacity-80">Email Verifications Monthly</div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Stats Section End ====== */}
     
    
     
    </div>
  );
}