import React from 'react';
import { Link } from 'wouter';
import { SignInComponent } from './SignInComponent'; // Updated path

export default function SignInHeaderExample() {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="4" fill="#0073B1"/>
                  <path d="M7 7H21V11H19V9H9V19H19V17H21V21H7V7Z" fill="white"/>
                </svg>
                <span className="font-bold text-xl text-[#0073B1]">24Jobs</span>
              </div>
            </Link>
          </div>
          
          {/* Right side - Sign In & Sign Up Buttons */}
          <div className="flex items-center gap-3">
            <SignInComponent />
            
            <Link href="/registration-v2">
              <button className="btn btn-primary px-3 py-2 flex items-center">
                <i className="bi bi-person-plus me-2"></i>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 