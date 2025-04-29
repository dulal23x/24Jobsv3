import React from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="container text-center py-16 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div className="mb-4">
        <svg className="mx-auto" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0C17.9 0 0 17.9 0 40C0 62.1 17.9 80 40 80C62.1 80 80 62.1 80 40C80 17.9 62.1 0 40 0ZM40 72C22.3 72 8 57.7 8 40C8 22.3 22.3 8 40 8C57.7 8 72 22.3 72 40C72 57.7 57.7 72 40 72Z" fill="#E5E7EB"/>
          <path d="M44 40.8V24C44 21.8 42.2 20 40 20C37.8 20 36 21.8 36 24V40.8C36 42.1 36.5 43.3 37.4 44.2L49.4 56.2C50.8 57.6 53.2 57.6 54.6 56.2C56 54.8 56 52.4 54.6 51L44 40.8Z" fill="#0073B1"/>
        </svg>
      </div>
      <h1 className="fs-1 fw-bold mb-3 text-gray-900">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-5 fs-5 max-w-xl mx-auto">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <button className="btn btn-primary px-4 py-2">
          Go back home <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </Link>
    </div>
  );
}
