import React from 'react';
import { Link } from 'wouter';

// Update JobDescription to accept props which include 'params'
interface JobDescriptionProps {
  params: {
    id: string;
  };
}

export default function JobDescription({ params }: JobDescriptionProps) {
  const jobId = params.id;
  
  return (
    <div className="container my-5">
      <h1>Job Description</h1>
      <p>Job ID: {jobId}</p>
      <p>This is a dummy job description page for the job with ID {jobId}. Here you can show detailed information about the job.</p>
      <Link href="/">Back to Jobs</Link>
    </div>
  );
} 