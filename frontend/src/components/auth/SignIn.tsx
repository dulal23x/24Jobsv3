import React from 'react';
import { Link } from 'wouter';

// Assuming you have a Google icon component or library
// import GoogleIcon from 'path/to/GoogleIcon'; 

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-2">24Jobs</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
          Enter your credentials to access your account
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {/* Optional: Add 'Forgot Password?' link here */}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-300 text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex justify-center items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-md transition duration-300 text-sm sm:text-base"
        >
          {/* Replace with your Google icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-gray-500 mt-6 sm:mt-8 text-sm sm:text-base">
          Don't have an account?{' '}
          <Link href="/registration" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
} 