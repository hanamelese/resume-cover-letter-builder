

import { useState } from "react";
import SignupModal from "../components/AuthForm";
import { Link } from "react-router-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Custom orange brand color constant
  const brandOrange = "#b84e03";

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center gap-2" to="/">
            <span 
              className="px-2 py-1 rounded-3 text-white fw-bold"
              style={{ backgroundColor: brandOrange }}
            >
              ⚡
            </span>
            <span>JobEase <span style={{ color: brandOrange }}>AI</span></span>
          </Link>
          
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 fw-medium">
              <li className="nav-item">
                <a className="nav-link text-dark px-3" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark px-3" href="#how-it-works">How It Works</a>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="btn px-4 rounded-pill fw-semibold"
                style={{ borderColor: brandOrange, color: brandOrange }}
              >
                Sign In
              </button>
              <Link
                to="/dashboard"
                className="btn px-4 rounded-pill fw-semibold text-white shadow-sm"
                style={{ backgroundColor: brandOrange }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 my-lg-4 bg-light">
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            {/* Left Content Column */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 badge bg-white border text-dark px-3 py-2 rounded-pill mb-4 shadow-sm">
                <span className="badge rounded-circle p-1 text-white" style={{ backgroundColor: brandOrange }}>✨</span>
                <span className="fw-medium">Next-Gen Resume & Cover Letter Generator</span>
              </div>

              <h1 className="display-4 fw-bold text-dark mb-3 lh-sm">
                Land 10x More Interviews with <span style={{ color: brandOrange }}>Smart AI</span>
              </h1>

              <p className="lead text-secondary mb-4 me-lg-4 fs-5">
                Generate ATS-friendly resumes, tailored cover letters, and optimized job applications in under 60 seconds. Built for modern job seekers.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                <Link
                  to="/dashboard"
                  className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-white shadow"
                  style={{ backgroundColor: brandOrange }}
                >
                  Create Free Resume <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                {/* <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-outline-dark btn-lg px-4 py-3 rounded-pill fw-semibold"
                >
                  <i className="bi bi-play-circle me-2"></i> Watch Demo
                </button> */}
              </div>

              {/* User Ratings Badges */}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 pt-2">
                <div className="d-flex me-2">
                  <img src="https://i.pravatar.cc/40?img=12" className="rounded-circle border border-2 border-white" width="36" height="36" alt="User" />
                  <img src="https://i.pravatar.cc/40?img=33" className="rounded-circle border border-2 border-white ms-n2" width="36" height="36" alt="User" />
                  <img src="https://i.pravatar.cc/40?img=47" className="rounded-circle border border-2 border-white ms-n2" width="36" height="36" alt="User" />
                </div>
                <div className="text-start">
                  <div className="text-warning small">★★★★★</div>
                  <small className="text-muted fw-semibold">Trusted by 25,000+ job seekers</small>
                </div>
              </div>
            </div>

            {/* Right Side - Clean Cartoon People & AI Graphic */}
            <div className="col-lg-6 position-relative text-center">
              <div className="position-relative d-inline-block w-100 max-width-md">
                
                {/* Background Decorative Glow */}
                <div 
                  className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-25"
                  style={{
                    width: "350px",
                    height: "350px",
                    backgroundColor: brandOrange,
                    filter: "blur(50px)",
                    zIndex: 0
                  }}
                ></div>

                {/* Self-Contained SVG Illustration */}
                <svg 
                  className="img-fluid position-relative" 
                  style={{ zIndex: 1, maxHeight: "380px" }}
                  viewBox="0 0 500 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Platform/Desk Base */}
                  <ellipse cx="250" cy="350" rx="200" ry="25" fill="#f0f0f0" />
                  
                  {/* Resume Document Graphic */}
                  <rect x="180" y="70" width="140" height="190" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" />
                  <rect x="200" y="100" width="60" height="10" rx="5" fill={brandOrange} />
                  <rect x="200" y="125" width="100" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="200" y="140" width="80" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="200" y="155" width="90" height="6" rx="3" fill="#CBD5E1" />
                  <circle cx="285" cy="105" r="15" fill="#10B981" />
                  <path d="M279 105L283 109L291 101" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Character 1 (Left - Person with AI Laptop) */}
                  <circle cx="120" cy="180" r="22" fill="#FFC107" />
                  <path d="M100 240 C100 200, 140 200, 140 240 Z" fill="#3B82F6" />
                  <rect x="90" y="235" width="60" height="10" rx="3" fill="#475569" />

                  {/* Character 2 (Right - Person Reviewing Resume) */}
                  <circle cx="380" cy="190" r="22" fill="#F43F5E" />
                  <path d="M360 250 C360 210, 400 210, 400 250 Z" fill={brandOrange} />
                  <rect x="330" y="220" width="45" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

                  {/* Sparkles / AI Magic */}
                  <path d="M150 110 L155 125 L170 130 L155 135 L150 150 L145 135 L130 130 L145 125 Z" fill={brandOrange} opacity="0.8" />
                  <path d="M350 100 L353 110 L363 113 L353 116 L350 126 L347 116 L337 113 L347 110 Z" fill="#3B82F6" opacity="0.7" />
                </svg>

                {/* Floating Badge 1: ATS Match */}
                <div 
                  className="position-absolute top-0 start-0 bg-white p-3 rounded-4 shadow border d-flex align-items-center gap-2"
                  style={{ zIndex: 2, transform: "translate(0px, 40px)" }}
                >
                  <div className="rounded-circle p-2 text-white" style={{ backgroundColor: brandOrange }}>
                    <i className="bi bi-check-circle-fill fs-5"></i>
                  </div>
                  <div className="text-start">
                    <strong className="d-block text-dark small">ATS Match Score</strong>
                    <span className="badge bg-success-subtle text-success fw-bold">98% Optimized</span>
                  </div>
                </div>

                {/* Floating Badge 2: AI Resume Ready */}
                <div 
                  className="position-absolute bottom-0 end-0 bg-white p-3 rounded-4 shadow border d-flex align-items-center gap-3"
                  style={{ zIndex: 2, transform: "translate(0px, -20px)" }}
                >
                  <div className="rounded-circle p-2 text-white bg-dark">
                    <i className="bi bi-file-earmark-pdf-fill fs-5"></i>
                  </div>
                  <div className="text-start">
                    <strong className="d-block text-dark small">AI Resume Built</strong>
                    <small className="text-muted">Exported in 30 seconds</small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5">
            <span className="fw-bold text-uppercase small" style={{ color: brandOrange }}>Supercharged Features</span>
            <h2 className="fw-bold fs-1 mt-2">Everything You Need to Get Hired</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light h-100 border">
                <div className="fs-3 mb-3" style={{ color: brandOrange }}>
                  <i className="bi bi-cpu-fill"></i>
                </div>
                <h5 className="fw-bold">Smart AI Writer</h5>
                <p className="text-muted small">Transforms basic bullet points into high-impact achievement statements automatically.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light h-100 border">
                <div className="fs-3 mb-3" style={{ color: brandOrange }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5 className="fw-bold">ATS Checker</h5>
                <p className="text-muted small">Ensures your resume passes Applicant Tracking Systems with accurate keyword matching.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light h-100 border">
                <div className="fs-3 mb-3" style={{ color: brandOrange }}>
                  <i className="bi bi-envelope-open-fill"></i>
                </div>
                <h5 className="fw-bold">Cover Letter Sync</h5>
                <p className="text-muted small">Generates custom cover letters aligned perfectly with targeted job descriptions instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-4 text-white text-center" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <p className="small mb-0 text-white-50">&copy; {new Date().getFullYear()} JobEase AI. All rights reserved.</p>
        </div>
      </footer> */}

      {/* {showModal && <SignupModal onClose={() => setShowModal(false)} />} */}
      {/* Modal Wrapper Layer */}
      {showModal && (
        <div 
          className="position-fixed w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center p-5"
          style={{ 
            backgroundColor: "rgba(143, 142, 142, 0.4)", // Light frosted glass background
            backdropFilter: "blur(2px)",                // Strong background blur
            WebkitBackdropFilter: "blur(2px)",          // Safari support
            zIndex: 1050 
          }}
        >
          <SignupModal onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
}