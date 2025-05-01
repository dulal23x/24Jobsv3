import React, { useState } from 'react';
import { Link } from 'wouter';

export default function Registration() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [workStatus, setWorkStatus] = useState<'experienced' | 'fresher' | ''>('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, password, mobile, workStatus });
    // Submit logic here
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="mb-4">
                  <h2 className="text-center text-[27px] fw-bold">Create your 24Jobs profile</h2>
                  <p className="text-center text-muted">Search & apply to jobs from Bangladesh's No.1 Job Site</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Full name field */}
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label fw-medium">
                      Full name<span className="text-danger">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-control form-control-lg"
                      placeholder="What is your name?"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email ID<span className="text-danger">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                      placeholder="Tell us your Email ID"
                      required
                    />
                    <div className="form-text">We'll send relevant jobs and updates to this email</div>
                  </div>

                  {/* Password field */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-medium">
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Minimum 6 characters"
                        minLength={6}
                        required
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y text-primary border-0 pe-3"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <div className="form-text">This helps your account stay protected</div>
                  </div>

                  {/* Mobile number field */}
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label fw-medium">
                      Mobile number<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">+880</span>
                      <input
                        id="mobile"
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                    <div className="form-text">Recruiters will contact you on this number</div>
                  </div>

                  {/* Work status section */}
                  <div className="mb-3">
                    <label className="form-label fw-medium">
                      Work status<span className="text-danger">*</span>
                    </label>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div 
                          className={`card h-100 ${workStatus === 'experienced' ? 'border-primary bg-light' : ''}`}
                          style={{ cursor: 'pointer' }}
                          onClick={() => setWorkStatus('experienced')}
                        >
                          <div className="card-body">
                            <h5 className="card-title">I'm experienced</h5>
                            <p className="card-text text-muted small">I have work experience (excluding internships)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div 
                          className={`card h-100 ${workStatus === 'fresher' ? 'border-primary bg-light' : ''}`}
                          style={{ cursor: 'pointer' }}
                          onClick={() => setWorkStatus('fresher')}
                        >
                          <div className="card-body">
                            <h5 className="card-title">I'm a fresher</h5>
                            <p className="card-text text-muted small">I am a student/ Haven't worked after graduation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="mb-3 form-check">
                    <input
                      id="notifications"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="notifications" className="form-check-label small text-muted">
                      Send me important updates & promotions via SMS, email, and <span className="text-success fw-medium">WhatsApp</span>
                    </label>
                  </div>

                  {/* Terms and Register button */}
                  <div className="mb-3">
                    <p className="small text-muted mb-3">
                      By clicking Register, you agree to the <Link href="/terms"><span className="text-primary">Terms and Conditions</span></Link> & <Link href="/privacy"><span className="text-primary">Privacy Policy</span></Link> of 24Jobs
                    </p>
                    <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-medium">
                      Register now
                    </button>
                  </div>

                  {/* Or continue with Google */}
                  <div className="text-center mb-3 position-relative">
                    <hr className="my-3" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                      Or
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 py-3 mb-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  {/* Already have an account */}
                  <div className="text-center mt-4 pt-3 border-top">
                    <p className="mb-0">
                      Already registered? <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-primary fw-medium">Sign In</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 