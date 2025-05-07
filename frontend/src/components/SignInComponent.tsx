"use client"

import React, { useState } from 'react';
import { Link } from 'wouter';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

// SignIn বাটন এবং মডাল একসাথে
export function SignInComponent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  
  return (
    <div className="sign-in-component">
      <button 
        onClick={handleOpenLoginModal}
        className="btn btn-outline-primary px-3 py-2 d-flex align-items-center"
      >
        <i className="bi bi-box-arrow-in-right me-2"></i>
        Sign In
      </button>
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </div>
  );
}

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[425px] bg-white"
        style={{ 
          position: 'fixed',
          top: '0',
          right: '30px',
          bottom: '0',
          height: '100vh',
          transform: 'none',
          left: 'auto',
          borderRadius: '17px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          maxWidth: '480px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          zIndex: 9999
        }}
      >
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle className="text-xl font-bold">Login</DialogTitle>
          <Link href="/registration-v2">
            <span className="text-primary cursor-pointer hover:underline text-sm">Free Registration</span>
          </Link>
        </DialogHeader>
        
        <div className="space-y-4 mt-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email ID / Username
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your email ID or username"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link href="/forgot-password">
                <span className="text-primary text-sm cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <button
            type="button"
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Login
          </button>
          
          <div className="text-center">
            <button
              type="button"
              className="text-primary text-sm hover:underline"
            >
              Login using OTP
            </button>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="border-t w-full"></div>
            <span className="bg-white px-2 text-sm text-gray-500 absolute">OR</span>
          </div>
          
          <button
            type="button"
            className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </DialogContent>
    </Dialog>


  );
}

// এক্সপোর্ট ডিফল্ট কম্পোনেন্ট যা মূল SignInComponent কম্পোনেন্ট নিয়ে আসে
export default function SignIn() {
  return (
    <SignInComponent />
  );
} 