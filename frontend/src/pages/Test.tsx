import React from "react";

export default function Test() {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between gap-8 px-20">
          {/* Left Side: Headline, Subheadline, Buttons */}
          <div className="flex-1 min-w-[420px]">
            <h1 className="text-[64px] leading-[1.05] font-extrabold text-[#3b4e8c] mb-8">
              Elevate Your<br />Sales and<br />Recruiting
            </h1>
            <p className="text-[22px] text-[#222b3a] mb-10 max-w-[540px]">
              Grow your business and team with RocketReach, the world's most accurate lead intelligence and easy-to-use sales acceleration solution.
            </p>
            <div className="flex gap-6">
              <button className="bg-[#3b4e8c] text-white font-bold text-[20px] rounded-lg px-10 py-4 shadow-md hover:bg-[#2c3e50] transition">
                Try It For Free
              </button>
              <button className="bg-white text-[#3b4e8c] font-bold text-[20px] border-2 border-[#3b4e8c] rounded-lg px-10 py-4 shadow-md hover:bg-[#f1f7fe] transition">
                Get a Demo
              </button>
            </div>
          </div>
          {/* Right Side: Graphics */}
          <div className="flex-1.2 min-w-[480px] relative flex items-center justify-center h-[520px]">
            {/* Main Card */}
            <div className="absolute left-[120px] top-[120px] z-20 bg-white rounded-2xl shadow-2xl p-8 w-[340px] flex flex-col items-center border border-[#e5e7eb]">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Janice Smith" className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow" />
              <div className="font-extrabold text-[26px] text-[#3b4e8c]">Janice Smith</div>
              <div className="font-semibold text-[16px] text-[#3b82f6] mb-0.5">Marketing Manager</div>
              <div className="font-semibold text-[16px] text-[#3b82f6] mb-2">@ Elevate.co</div>
              <div className="text-[#222b3a] text-[15px] mb-0.5">j.smith@elevate.co</div>
              <div className="text-[#222b3a] text-[15px] mb-4">📞 841-440-5251</div>
              <div className="flex gap-4 mb-2">
                <span className="bg-[#f1f7fe] rounded-full w-10 h-10 flex items-center justify-center text-[#3b4e8c] text-xl">
                  <i className="bi bi-envelope"></i>
                </span>
                <span className="bg-[#f1f7fe] rounded-full w-10 h-10 flex items-center justify-center text-[#3b4e8c] text-xl">
                  <i className="bi bi-telephone"></i>
                </span>
                <span className="bg-[#f1f7fe] rounded-full w-10 h-10 flex items-center justify-center text-[#3b4e8c] text-xl">
                  <i className="bi bi-gear"></i>
                </span>
                <span className="bg-[#eafaf2] rounded-full w-10 h-10 flex items-center justify-center text-[#22c55e] text-xl">
                  <i className="bi bi-people"></i>
                </span>
                <span className="bg-[#f5f3ff] rounded-full w-10 h-10 flex items-center justify-center text-[#a78bfa] text-xl">
                  <i className="bi bi-cloud"></i>
                </span>
              </div>
            </div>
            {/* Schedule Messages Card */}
            <div className="absolute left-0 top-0 z-10 bg-[#f5f3ff] rounded-xl shadow-lg p-5 w-[220px] border border-[#c7d2fe]">
              <div className="font-bold text-[#3b4e8c] mb-3">Schedule Messages</div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(21)].map((_, i) => (
                  <div key={i} className={`w-5 h-5 rounded-md flex items-center justify-center ${i % 5 === 0 ? 'bg-[#d1d5fa]' : 'bg-white'}`}>
                    {i % 5 === 0 && <i className="bi bi-envelope text-[#3b4e8c] text-xs"></i>}
                  </div>
                ))}
              </div>
            </div>
            {/* Expand with AI Card */}
            <div className="absolute right-0 top-0 z-10 bg-[#eafaf2] rounded-lg shadow-lg p-4 w-[220px] flex items-center gap-3 border border-[#bbf7d0]">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Mina Kim" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-bold text-[#3b4e8c] text-[16px]">Mina Kim</div>
                <div className="text-[#22c55e] font-semibold text-[14px] leading-tight">CMO & Founder<br />Julep Agency</div>
              </div>
            </div>
            {/* Target Better Card */}
            <div className="absolute right-0 bottom-0 z-10 bg-[#f1f7fe] rounded-lg shadow-lg p-4 w-[260px] border border-[#c7d2fe]">
              <div className="font-bold text-[#3b4e8c] text-[16px] mb-2">Target better</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#ede9fe] text-[#7c3aed] font-bold rounded px-3 py-1 text-[14px]">Intent Data</span>
                <span className="bg-[#eafaf2] text-[#22c55e] font-bold rounded px-3 py-1 text-[14px]">Technographics</span>
                <span className="bg-[#fee2e2] text-[#ef4444] font-bold rounded px-3 py-1 text-[14px]">NPI</span>
                <span className="bg-[#e0e7ef] text-[#3b4e8c] font-bold rounded px-3 py-1 text-[14px]">NAICS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trusted by Section (now outside the flex container) */}
      <div className="w-full flex flex-col items-center mt-20 mb-8">
        <div className="text-center text-gray-500 font-semibold text-lg mb-6 tracking-wide">Trusted by leading companies</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="Apple" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-10 grayscale hover:grayscale-0 transition" />
        </div>
      </div>
      {/* Data Quality Section */}
      <section className="w-full bg-[#f8f9fb] py-20 flex justify-center items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left: Circle & Card */}
          <div className="relative flex-1 flex justify-center items-center min-w-[340px]">
            {/* Big Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#3b4e8c] to-[#4f6cbf] rounded-full z-0 opacity-90"></div>
            {/* Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl flex w-[380px] min-h-[220px] overflow-hidden">
              {/* Sidebar */}
              <div className="bg-[#f5f6fa] w-36 py-6 px-4 flex flex-col gap-2 border-r">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#3b4e8c] p-1.5 rounded-full"><svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg></span>
                  <span className="font-semibold text-gray-600">Lists</span>
                  <button className="ml-auto bg-white border rounded-full w-6 h-6 flex items-center justify-center text-[#3b4e8c]">+</button>
                </div>
                <div className="bg-[#3b4e8c] text-white rounded px-2 py-1 font-medium">Marketing in LA</div>
                <div className="text-gray-600 px-2 py-1">Sales in NY</div>
                <div className="text-gray-600 px-2 py-1">Designers in Boston</div>
                <div className="text-gray-600 px-2 py-1">HR in Dallas</div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-6 flex flex-col gap-3">
                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg> Los Angeles</span>
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Marketing</span>
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg> HubSpot</span>
                </div>
                {/* Profile Card */}
                <div className="bg-[#f8fafc] rounded-lg shadow p-3 flex items-center gap-3 w-full">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice Betancourt" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800">Alice Betancourt</div>
                    <div className="text-xs text-gray-500">Sr. Marketing Manager <span className="text-[#3b4e8c] font-semibold">@ RIV Brokers</span></div>
                    <div className="text-xs text-gray-400">Los Angeles, CA, USA</div>
                  </div>
                </div>
                {/* Placeholder for more profiles */}
                <div className="bg-gray-100 rounded-lg h-8 w-full my-1 opacity-60"></div>
                <div className="bg-gray-100 rounded-lg h-8 w-full opacity-40"></div>
              </div>
            </div>
          </div>
          {/* Right: Features */}
          <div className="flex-1 min-w-[320px] flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b4e8c] mb-6">Discover exceptional data quality</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">Broadest Global Coverage</div>
                  <div className="text-gray-600 text-sm">700M profiles and 60M companies captured worldwide with unique coverage in healthcare, legal, founders, technology, and more</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">Highest data accuracy</div>
                  <div className="text-gray-600 text-sm">Global phone and email coverage and best email finder with 90-98% deliverability on verified emails</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-600"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41z"/></svg></span>
                <div>
                  <div className="font-bold text-[#222b3a]">Target better with Intent Data</div>
                  <div className="text-gray-600 text-sm">Finding potential buyers who are actively exploring solutions in your space with B2B intent data</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Engage Prospects Section */}
      <section className="w-full bg-white py-20 flex justify-center items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left: Features */}
          <div className="flex-1 min-w-[320px] flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b4e8c] mb-6">Engage prospects and automate</h2>
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
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#3b4e8c] to-[#4f6cbf] rounded-full z-0 opacity-90"></div>
            {/* Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl flex w-[380px] min-h-[120px] overflow-hidden mb-8">
              {/* Sidebar */}
              <div className="bg-[#f5f6fa] w-36 py-6 px-4 flex flex-col gap-2 border-r">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#3b4e8c] p-1.5 rounded-full"><svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg></span>
                  <span className="font-semibold text-gray-600">Lists</span>
                </div>
                <div className="bg-[#3b4e8c] text-white rounded px-2 py-1 font-medium">Los Angeles</div>
                <div className="text-gray-600 px-2 py-1">Operations</div>
                <div className="text-gray-600 px-2 py-1">C-Level</div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-6 flex flex-col gap-3">
                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg> Los Angeles</span>
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Operations</span>
                  <span className="bg-[#eaf1fb] text-[#3b4e8c] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><svg width="16" height="16" fill="#3b4e8c" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg> C-Level</span>
                </div>
                {/* Profile Card */}
                <div className="bg-[#f8fafc] rounded-lg shadow p-3 flex items-center gap-3 w-full">
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Andrew Ballard" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800">Andrew Ballard</div>
                    <div className="text-xs text-gray-500">Chief Operating Officer <span className="text-[#3b4e8c] font-semibold">@ Firestarter</span></div>
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
              <span className="bg-[#4f6cbf] text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
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
                    <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${i % 5 === 1 ? 'bg-[#3b4e8c]' : 'bg-[#f3f4f6]'}`}>
                      {i % 5 === 1 && <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 