import React from 'react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="homepage-container bg-yellow-300 w-full overflow-x-hidden">

      {/* ================= Hero Section ================= */}
      <section className="hero-section py-5 md:py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* hero section left side */}
            <div className="text-left ">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 text-left tracking-wide leading-[1.3] lg:leading-[1.0] sm:w-[600px]">
                Unlock Your
                <span className=" ml-2">
                  Professional <span className="text-blue-600">Potential </span>
                </span>
                with 24Jobs
              </h1>
              <p className="text-[18px] sm:text-[19px] text-gray-600 lg:mb-2 mb-3 max-w-xl text-left">
                Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-left">
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
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-start">
                <Link href="/registration">
                  <button className="btn btn-primary btn-lg px-10 py-3 rounded-lg shadow-md transition-transform hover:translate-y-[-3px] text-2xl font-bold w-full sm:w-auto">
                    Join Now
                  </button>
                </Link>
                <Link href='/Jobs'>
                <button className="btn btn-outline-primary btn-lg px-5 py-3 rounded-lg transition-colors hover:bg-blue-500 text-xl font-semibold w-full sm:w-auto">
                  Find Jobs
                </button>
                </Link>
              </div>

              <div className="flex items-center justify-start mb-4">
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
                <div className="text-sm sm:text-base text-left">
                  <div className="font-medium text-gray-800">Joined by <strong>10M+ professionals</strong></div>
                  <div className="flex items-center text-gray-600 justify-start">
                    <div className="text-yellow-500 mr-1">★★★★★</div>
                    <span>4.9/5 from 25K+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
{/* hero section right side */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative text-center max-w-[700px] mx-auto lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional networking" 
                  className="rounded-lg shadow-lg w-full h-auto max-h-[400px] md:max-h-[500px] max-w-full object-cover mx-auto"
                />

                <div className="absolute bg-white shadow-lg rounded-lg p-3 md:p-4 max-w-[280px] sm:max-w-[320px] bottom-[190px] -right-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:-right-8 xl:-right-12 transition-transform hover:scale-103">
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
      <section className='w-full py-8 md:py-10' style={{ background: 'linear-gradient(135deg, #415896 0%, #3b4e8c 100%)' }}>
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

      {/* ============= elevate Start (Refactored for Responsiveness) ============= */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
            {/* Left Side: Headline, Subheadline, Buttons */}
            <div className="flex-1 w-full lg:w-1/2 ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4 sm:w-[500px]">
                Elevate Your Sales and Recruiting
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 lg:mb-8 max-w-lg">
                Grow your business and team with 24Jobs, the world's most accurate lead intelligence and easy-to-use sales acceleration solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-start ">
                <button className="btn btn-primary btn-lg px-6 py-3 font-semibold shadow-md text-sm sm:text-base w-full sm:w-auto">
                  Try It For Free
                </button>
                <button className="btn btn-outline-primary btn-lg px-6 py-3 font-semibold text-sm sm:text-base w-full sm:w-auto">
                  Get a Demo
                </button>
              </div>
            </div>

            {/* Right Side: Graphics - Rebuilt with relative positioning and flex/grid */}
            <div className="flex-1 w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center  ">
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

     

      {/* ================= Trusted By Section Start ================= */}
      {/*
      <section className="trusted-by-section bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              'logo-placeholder-1.svg',
              'logo-placeholder-2.svg',
              'logo-placeholder-3.svg',
              'logo-placeholder-4.svg',
              'logo-placeholder-5.svg',
              'logo-placeholder-6.svg',
            ].map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  // For demonstration, using a generic placeholder. Replace with actual logo paths.
                  src={`https://via.placeholder.com/150x60.png?text=Logo+${index + 1}`} 
                  alt={`Company Logo ${index + 1}`} 
                  className="h-10 md:h-12 object-contain grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
                    </div>
                  ))}
          </div>
        </div>
      </section>
      */}
      {/* ================= Trusted By Section End ================= */}

      {/* ================= Engage Prospects Section ================= */}
      <section className="engage-prospects-section py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Engage Prospects with Unmatched Precision
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Leverage our advanced search and filtering capabilities to find and connect with the right people, faster than ever. Our data accuracy ensures you reach decision-makers directly.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: '🎯', text: 'Targeted outreach with 95% data accuracy.' },
                  { icon: '⚡️', text: 'Real-time updates on contact information.' },
                  { icon: '📈', text: 'Seamless integration with your existing CRM.' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-gray-700 text-lg">{item.text}</span>
              </li>
                ))}
            </ul>
              <Link href="/people">
                <button className="btn btn-primary btn-lg px-8 py-3 text-lg font-semibold shadow-md transition-transform hover:translate-y-[-3px] w-full sm:w-auto">
                  Find Contacts
                </button>
              </Link>
            </div>
                  <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Engaging prospects"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Compatible Workflow Section ================= */}
      <section className="compatible-workflow-section bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Compatible workflow"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Workflow That Works For You
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                24Jobs integrates smoothly into your existing sales and recruiting processes. Enhance your productivity without disrupting your current setup.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Easy Setup', description: 'Get started in minutes with our intuitive onboarding process.' },
                  { title: 'Powerful Integrations', description: 'Connect with popular tools like Salesforce, HubSpot, and more.' },
                  { title: 'Customizable Solutions', description: 'Tailor our platform to fit your specific business needs.' },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Data Quality Section ================= */}
      <section className="data-quality-section py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Uncompromising Data Quality
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Our commitment to data accuracy is unparalleled. We employ rigorous verification processes to ensure you get the most reliable and up-to-date information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✅', title: 'Verified Contacts', description: 'Millions of profiles checked and updated regularly.' },
              { icon: '🔄', title: 'Real-Time Sync', description: 'Data is continuously refreshed for optimal accuracy.' },
              { icon: '🛡️', title: 'Compliance Focused', description: 'Adherence to data privacy and security standards.' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
                </div>
              </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="stats-section py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              { value: '10M+', label: 'Active Professionals' },
              { value: '25K+', label: 'Companies Hiring' },
              { value: '5K+', label: 'New Jobs Daily' },
              { value: '95%', label: 'Data Accuracy' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-md shadow-lg">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



       {/* ================= CTA Section ================= */}
       <section className="cta-section bg-blue-600 text-white py-16 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join millions of professionals who are already leveraging 24Jobs to achieve their career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/registration">
              <button className="btn btn-light btn-lg px-8 py-3 rounded-lg font-semibold text-blue-600 shadow-md transition-transform hover:translate-y-[-3px] text-lg w-full sm:w-auto">
                Get Started Free
              </button>
            </Link>
            <Link href="/people">
              <button className="btn btn-outline-light btn-lg px-8 py-3 rounded-lg font-semibold text-white border-2 border-white transition-color  text-lg w-full sm:w-auto">
                Explore Talent
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}