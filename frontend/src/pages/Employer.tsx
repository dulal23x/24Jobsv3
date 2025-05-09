import React, { useState } from 'react';
import { Link } from 'wouter';
import {
  FiBriefcase, FiUsers, FiBarChart2, FiSearch,
  FiCreditCard, FiCheckCircle, FiAward, FiTrendingUp,
  FiChevronRight, FiMessageCircle, FiClipboard, FiTool
} from 'react-icons/fi';

export default function Employer() {
  // State for the pricing toggle
  const [annualBilling, setAnnualBilling] = useState(false);
  
  // Pricing options
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'For small businesses looking to hire occasionally',
      monthlyPrice: 99,
      annualPrice: 79, // per month, billed annually
      features: [
        'Post up to 5 jobs per month',
        'Access to candidate database',
        'Basic applicant tracking',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      description: 'For growing teams with regular hiring needs',
      monthlyPrice: 199,
      annualPrice: 159, // per month, billed annually
      isPopular: true,
      features: [
        'Post up to 15 jobs per month',
        'Premium candidate matching',
        'Advanced applicant tracking',
        'Priority email support',
        'Job promotion to premium sites',
        'Customizable company profile'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with ongoing recruitment',
      monthlyPrice: 349,
      annualPrice: 279, // per month, billed annually
      features: [
        'Unlimited job postings',
        'AI-powered candidate matching',
        'Full recruitment suite',
        'Dedicated account manager',
        'Custom reporting & analytics',
        'API access',
        'Employer branding tools'
      ]
    }
  ];

  // Features list for the features section
  const employerFeatures = [
    {
      icon: <FiSearch className="text-primary" size={32} />,
      title: 'Smart Candidate Matching',
      description: 'Our AI-powered matching algorithm connects you with candidates that fit your exact requirements.'
    },
    {
      icon: <FiBriefcase className="text-primary" size={32} />,
      title: 'Job Promotion',
      description: 'Get your job postings in front of the right candidates with targeted promotion across our network.'
    },
    {
      icon: <FiUsers className="text-primary" size={32} />,
      title: 'Candidate Pipeline',
      description: 'Build and maintain a pipeline of talent for your current and future hiring needs.'
    },
    {
      icon: <FiBarChart2 className="text-primary" size={32} />,
      title: 'Advanced Analytics',
      description: 'Track your job performance, candidate engagement, and hiring metrics in real-time.'
    },
    {
      icon: <FiMessageCircle className="text-primary" size={32} />,
      title: 'Built-in Messaging',
      description: 'Communicate with candidates directly through our platform to streamline your hiring process.'
    },
    {
      icon: <FiTool className="text-primary" size={32} />,
      title: 'Customizable Workflow',
      description: 'Tailor the recruitment process to match your organization\'s unique hiring workflow.'
    }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Hire the Best Talent for Your Team</h1>
              <p className="lead mb-4">
                Connect with millions of qualified professionals, streamline your hiring process, and build your dream team with 24Jobs employer solutions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/post-job" className="btn btn-light btn-lg">
                  Post a Job <FiChevronRight className="ms-1" />
                </Link>
                <button className="btn btn-outline-light btn-lg">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              {/* <img 
                src="https://via.placeholder.com/600x400?text=Hiring+Made+Simple" 
                alt="Hiring Made Simple" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: '400px' }}
              /> */}
              <div style={{ width: '100%', height: '400px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.3rem' }} className="shadow-lg">
                <span className="text-muted">Hiring Made Simple (Placeholder)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">24M+</div>
              <p className="text-muted">Professionals</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">98%</div>
              <p className="text-muted">Fortune 500 Companies</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary mb-2">15M+</div>
              <p className="text-muted">Hires Made</p>
            </div>
            <div className="col-md-3">
              <div className="display-4 fw-bold text-primary mb-2">4.8/5</div>
              <p className="text-muted">Employer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Everything You Need to Hire</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Our comprehensive suite of employer tools makes finding and hiring the perfect candidate easier than ever.
            </p>
          </div>

          <div className="row g-4">
            {employerFeatures.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="fw-bold mb-2">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              A simple, three-step process to start finding your next team member
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card border-0 h-100 text-center">
                <div className="card-body">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                    <h2 className="mb-0">1</h2>
                  </div>
                  <h4 className="fw-bold mb-3">Create Your Profile</h4>
                  <p className="text-muted">
                    Set up your company profile, showcase your culture, and highlight what makes your company a great place to work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card border-0 h-100 text-center">
                <div className="card-body">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                    <h2 className="mb-0">2</h2>
                  </div>
                  <h4 className="fw-bold mb-3">Post Your Jobs</h4>
                  <p className="text-muted">
                    Create detailed job listings with all the information candidates need to determine if they're a good fit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 h-100 text-center">
                <div className="card-body">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                    <h2 className="mb-0">3</h2>
                  </div>
                  <h4 className="fw-bold mb-3">Connect with Candidates</h4>
                  <p className="text-muted">
                    Review applications, use our matching technology, and communicate directly with potential hires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Simple, Transparent Pricing</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Choose the plan that's right for your hiring needs
            </p>
            
            <div className="d-flex align-items-center justify-content-center mt-4">
              <span className={`me-3 ${!annualBilling ? 'fw-bold' : 'text-muted'}`}>Monthly</span>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="billingToggle" 
                  style={{ width: '3rem', height: '1.5rem' }}
                  checked={annualBilling}
                  onChange={() => setAnnualBilling(!annualBilling)}
                />
                <label className="form-check-label visually-hidden" htmlFor="billingToggle">
                  Toggle billing frequency
                </label>
              </div>
              <span className={`ms-3 ${annualBilling ? 'fw-bold' : 'text-muted'}`}>
                Annual <span className="badge bg-success ms-1">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="row g-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-md-4">
                <div className={`card h-100 border-0 ${plan.isPopular ? 'shadow' : 'shadow-sm'}`}>
                  {plan.isPopular && (
                    <div className="card-header border-0 bg-primary text-white text-center py-3">
                      <span className="fw-bold">MOST POPULAR</span>
                    </div>
                  )}
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-1">{plan.name}</h3>
                    <p className="text-muted mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="display-4 fw-bold">
                        ${annualBilling ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted">/month</span>
                      
                      {annualBilling && (
                        <p className="small text-success mt-1">
                          <FiCheckCircle className="me-1" /> Billed annually (${plan.annualPrice * 12}/year)
                        </p>
                      )}
                    </div>
                    
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <FiCheckCircle className="text-success me-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="d-grid">
                      <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline-primary'} btn-lg`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-muted">
              Need a custom solution for your enterprise? <Link href="/contact-sales" className="fw-bold">Contact our sales team</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Trusted by Leading Companies</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              See what our customers have to say about their hiring experience with 24Jobs
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {'★'.repeat(5)}
                  </div>
                  <p className="mb-4">
                    "24Jobs has transformed our hiring process. We've cut our time-to-hire by 40% and found exceptional talent that fits our culture perfectly."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Sarah Johnson</h5>
                      <p className="mb-0 text-muted small">HR Director, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {'★'.repeat(5)}
                  </div>
                  <p className="mb-4">
                    "The quality of candidates we've found through 24Jobs is consistently high. Their smart matching technology has saved us countless hours of screening."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Michael Chen</h5>
                      <p className="mb-0 text-muted small">Talent Acquisition Lead, InnovateCo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {'★'.repeat(5)}
                  </div>
                  <p className="mb-4">
                    "As a fast-growing startup, we needed a hiring solution that could scale with us. 24Jobs has delivered beyond our expectations in terms of both quality and quantity."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle" style={{ width: '50px', height: '50px' }}></div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Jessica Rodriguez</h5>
                      <p className="mb-0 text-muted small">CEO, GrowthMedia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">Ready to Find Your Next Great Hire?</h2>
              <p className="lead mb-0">
                Join thousands of companies that are finding top talent with 24Jobs.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/post-job" className="btn btn-light btn-lg me-2">
                Post a Job
              </Link>
              <Link href="/signup" className="btn btn-outline-light btn-lg">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Find answers to common questions about our employer solutions
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="employerFaq">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How long does it take for my job posting to go live?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#employerFaq">
                    <div className="accordion-body">
                      Most job postings go live within minutes after submission. However, all new jobs undergo a brief review to ensure quality, which can occasionally take up to 24 hours.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Can I post jobs for multiple locations?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#employerFaq">
                    <div className="accordion-body">
                      Yes, you can post jobs for multiple locations. You can either create separate job listings for each location or indicate multiple locations in a single posting if the role is identical.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How does the candidate matching work?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#employerFaq">
                    <div className="accordion-body">
                      Our AI-powered matching technology analyzes your job requirements and matches them with candidates' skills, experience, preferences, and career trajectory. This creates a more relevant pool of candidates for your open positions.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Can I upgrade or downgrade my plan?
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#employerFaq">
                    <div className="accordion-body">
                      Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately, and you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm">
                  <h3 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Do you offer services for high-volume recruiting?
                    </button>
                  </h3>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#employerFaq">
                    <div className="accordion-body">
                      Yes, we offer custom enterprise solutions for high-volume recruiting. Our enterprise plan includes custom features, dedicated account management, and special pricing for organizations with significant hiring needs. Please contact our sales team for more information.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}