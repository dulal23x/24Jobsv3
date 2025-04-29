import React, { useState } from 'react';
import { Link } from 'wouter';

export default function RegistrationFormLegacy() {
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
    <div className="w-full md:w-2/3 p-6">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Create your 24Jobs profile</h1>
        <p className="text-sm text-gray-500">Search & apply to jobs from Bangladesh's No.1 Job Site</p>
      </div>

      <div className="space-y-4">
        {/* Full name field */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="text-sm font-medium flex items-center">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="What is your name?"
          />
        </div>

        {/* Email field */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium flex items-center">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Tell us your Email ID"
          />
          <p className="text-xs text-gray-500">We'll send relevant jobs and updates to this email</p>
        </div>

        {/* Password field */}
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium flex items-center">
            Password<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
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
        <div className="space-y-1">
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
              className="w-full p-2 border border-l-0 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>
          <p className="text-xs text-gray-500">Recruiters will contact you on this number</p>
        </div>

        {/* Work status section */}
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center">
            Work status<span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              className={`border rounded-md p-3 cursor-pointer flex items-center ${workStatus === 'experienced' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setWorkStatus('experienced')}
            >
              <div className="flex-1">
                <h4 className="font-medium">I'm experienced</h4>
                <p className="text-xs text-gray-500">I have work experience (excluding internships)</p>
              </div>
            </div>
            <div
              className={`border rounded-md p-3 cursor-pointer flex items-center ${workStatus === 'fresher' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setWorkStatus('fresher')}
            >
              <div className="flex-1">
                <h4 className="font-medium">I'm a fresher</h4>
                <p className="text-xs text-gray-500">I am a student/ Haven't worked after graduation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Consent checkbox */}
        <div className="flex items-start mt-4">
          <input
            id="notifications"
            type="checkbox"
            className="mt-1 mr-2"
          />
          <label htmlFor="notifications" className="text-xs text-gray-600">
            Send me important updates & promotions via SMS, email, and <span className="text-green-600 font-medium">WhatsApp</span>
          </label>
        </div>

        {/* Terms and Register button */}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-3">
            By clicking Register, you agree to the <Link href="/terms"><span className="text-blue-600">Terms and Conditions</span></Link> & <Link href="/privacy"><span className="text-blue-600">Privacy Policy</span></Link> of Naukri.com
          </p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
            Register now
          </button>
        </div>

        {/* Or continue with Google */}
        <div className="text-center mt-4">
          <p className="text-sm">Or</p>
          <button className="w-full mt-2 border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9fd59eb9.svg" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-4 pt-2 border-t">
          <p className="text-sm">
            Already registered? <Link href="/login"><span className="text-blue-600 font-medium">Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
} 