import React, { useState } from 'react';
import { Link } from 'wouter';

export default function RegistrationV2() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [workStatus, setWorkStatus] = useState<'experienced' | 'fresher' | ''>('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container py-6 md:py-10">
      <div className="max-w-[920px] mx-auto bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left section with illustration - visible on medium screens and up */}
          <div className="hidden md:flex md:w-1/3 bg-slate-50 p-6 flex-col justify-center items-center">
            <div className="mb-6">
              <img 
                src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c582b147.svg" 
                alt="Registration illustration" 
                className="w-full max-w-[180px]"
              />
            </div>
            <h3 className="font-bold text-xl mb-5 text-center">On registering, you can</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-base">Build your profile and let recruiters find you</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-base">Get job postings delivered right to your email</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-base">Find a job and grow your career</span>
              </li>
            </ul>
          </div>

          {/* Right section with form */}
          <div className="w-full md:w-2/3 p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Create your 24Jobs profile</h1>
              <p className="text-sm text-gray-500 mt-1">Search & apply to jobs from Bangladesh's No.1 Job Site</p>
            </div>

            <div className="space-y-5">
              {/* Full name field */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium flex items-center">
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="What is your name?"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center">
                  Email ID<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us your Email ID"
                />
                <p className="text-xs text-gray-500">We'll send relevant jobs and updates to this email</p>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium flex items-center">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Minimum 6 characters"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="text-xs text-gray-500">This helps your account stay protected</p>
              </div>

              {/* Mobile number field */}
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium flex items-center">
                  Mobile number<span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <div className="flex items-center justify-center border rounded-l-md px-3 bg-gray-50 text-gray-500">
                    +880
                  </div>
                  <input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full p-3 border border-l-0 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <p className="text-xs text-gray-500">Recruiters will contact you on this number</p>
              </div>

              {/* Work status section */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  Work status<span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    className={`border rounded-md p-4 cursor-pointer flex items-center transition-colors ${workStatus === 'experienced' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setWorkStatus('experienced')}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">I'm experienced</h4>
                      <p className="text-xs text-gray-500">I have work experience (excluding internships)</p>
                    </div>
                    <div className="ml-3">
                      <img src="https://static.naukimg.com/s/7/104/assets/images/briefcase.beebd655.svg" alt="Experienced" className="w-8 h-8" />
                    </div>
                  </div>
                  <div 
                    className={`border rounded-md p-4 cursor-pointer flex items-center transition-colors ${workStatus === 'fresher' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setWorkStatus('fresher')}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">I'm a fresher</h4>
                      <p className="text-xs text-gray-500">I am a student/ Haven't worked after graduation</p>
                    </div>
                    <div className="ml-3">
                      <img src="https://static.naukimg.com/s/7/104/assets/images/graduate.d64304b0.svg" alt="Fresher" className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start mt-6">
                <input
                  id="notifications"
                  type="checkbox"
                  className="mt-1 mr-2"
                />
                <label htmlFor="notifications" className="text-sm text-gray-600">
                  Send me important updates & promotions via SMS, email, and <span className="text-green-600 font-medium">WhatsApp</span>
                </label>
              </div>

              {/* Terms and Register button */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-3">
                  By clicking Register, you agree to the <Link href="/terms"><span className="text-blue-600">Terms and Conditions</span></Link> & <Link href="/privacy"><span className="text-blue-600">Privacy Policy</span></Link> of 24Jobs
                </p>
                <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors text-base font-medium">
                  Register now
                </button>
              </div>

              {/* Or continue with Google */}
              <div className="text-center mt-6">
                <div className="relative flex items-center justify-center mb-4">
                  <div className="border-t w-full"></div>
                  <span className="bg-white px-3 text-sm text-gray-500 absolute">OR</span>
                </div>
                <button className="w-full mt-2 border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                  <img src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9fd59eb9.svg" alt="Google" className="w-5 h-5" />
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Already have an account */}
              <div className="text-center mt-6 pt-2 border-t">
                <p className="text-sm">
                  Already registered? <Link href="/login"><span className="text-blue-600 font-medium">Login</span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 