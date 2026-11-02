


import { useState, useRef } from "react";
import { generateText } from "../services/gemini";

export default function ResumeForm({ onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const resumePreviewRef = useRef(null);

  const brandOrange = "#ff6b00";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const prompt = `
Create an executive ATS-friendly professional resume for:
Full Name: ${form.fullName}
Target Job Title: ${form.jobTitle}
Contact Details: Email: ${form.email}, Phone: ${form.phone}, Location: ${form.location}
Links: LinkedIn: ${form.linkedin || "N/A"}, GitHub: ${form.github || "N/A"}

Professional Summary / Objective: ${form.summary}
Key Skills (comma separated): ${form.skills}
Work Experience / Projects: ${form.experience}
Education & Certifications: ${form.education}

Structure the resume clearly using HTML tags for rich rendering:
Use <h2> for main section headers (SUMMARY, SKILLS, EXPERIENCE, EDUCATION).
Use <h3> for Job Titles / Roles.
Use <ul> and <li> for high-impact achievement bullet points.
Format cleanly without Markdown code blocks.
`;

      const generatedContent = await generateText(prompt);
      setResult(generatedContent);
    } catch (err) {
      console.error("Resume Generation Error:", err);
      setResult("<p class='text-danger'>Error generating resume. Please try again.</p>");
    } finally {
      setLoading(false);
    }
  };

  // Trigger browser print to save as PDF
  const handleDownloadPDF = () => {
    window.print();
  };

  // Copy raw text content to clipboard
  const handleCopyText = () => {
    if (resumePreviewRef.current) {
      const plainText = resumePreviewRef.current.innerText;
      navigator.clipboard.writeText(plainText);
      alert("Resume text copied to clipboard!");
    }
  };

  return (
    <div className="bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
      {/* Non-Printable UI Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom d-print-none">
        <div>
          <span className="badge bg-warning-subtle text-dark fw-bold px-3 py-2 rounded-pill mb-1">
            ⚡ AI Resume Studio
          </span>
          <h2 className="fw-bold text-dark mb-0">Build Modern ATS Resume</h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3"
          >
            <i className="bi bi-arrow-left me-1"></i> Back to Dashboard
          </button>
        )}
      </div>

      <div className="row g-4">
        {/* Form Controls Column (Hidden during printing) */}
        <div className="col-lg-5 d-print-none">
          <h5 className="fw-bold text-dark mb-3">1. Resume Details</h5>
          
          <form onSubmit={handleGenerate}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="form-control"
                  placeholder="e.g. Hana Melese"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Target Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  className="form-control"
                  placeholder="e.g. Software Engineer"
                  value={form.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Phone / Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Addis Ababa, Ethiopia"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Professional Summary</label>
                <textarea
                  name="summary"
                  rows="2"
                  className="form-control"
                  placeholder="Briefly describe your core strength & experience..."
                  value={form.summary}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Technical & Core Skills</label>
                <textarea
                  name="skills"
                  rows="2"
                  className="form-control"
                  placeholder="React, TypeScript, Node.js, Python, Firebase..."
                  value={form.skills}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Work Experience & Key Projects</label>
                <textarea
                  name="experience"
                  rows="3"
                  className="form-control"
                  placeholder="Highlight technical achievements, responsibilities, and impact..."
                  value={form.experience}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Education & Degree</label>
                <input
                  type="text"
                  name="education"
                  className="form-control"
                  placeholder="B.Sc. in Software Engineering - AAU"
                  value={form.education}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg w-100 text-white fw-bold mt-4 rounded-pill shadow-sm"
              style={{ backgroundColor: brandOrange }}
            >
              {loading ? (
                <span>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Building Modern Resume...
                </span>
              ) : (
                <span>
                  Generate AI Resume <i className="bi bi-magic ms-2"></i>
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Live Modern Resume Preview Column */}
        <div className="col-lg-7">
          <div className="bg-light p-3 p-md-4 rounded-4 border h-100 d-flex flex-column">
            {/* Toolbar (Hidden during print) */}
            <div className="d-flex justify-content-between align-items-center mb-3 d-print-none">
              <h5 className="fw-bold text-dark mb-0">2. Live Interactive Canvas</h5>
              {result && (
                <div className="d-flex gap-2">
                  <button
                    onClick={handleCopyText}
                    className="btn btn-sm btn-outline-dark rounded-pill"
                    title="Copy text to clipboard"
                  >
                    <i className="bi bi-clipboard me-1"></i> Copy Text
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="btn btn-sm text-white fw-semibold rounded-pill px-3"
                    style={{ backgroundColor: brandOrange }}
                    title="Export styled PDF document"
                  >
                    <i className="bi bi-file-earmark-pdf-fill me-1"></i> Download PDF
                  </button>
                </div>
              )}
            </div>

            {/* Editable Modern Paper Card */}
            <div
              className="flex-grow-1 bg-white p-4 p-md-5 rounded-3 border shadow-sm overflow-y-auto resume-canvas"
              style={{ minHeight: "600px", maxHeight: "750px" }}
            >
              {result ? (
                <div
                  ref={resumePreviewRef}
                  contentEditable
                  suppressContentEditableWarning
                  className="modern-resume-body outline-none"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              ) : (
                <div className="h-100 d-flex flex-column align-items-center justify-content-center text-muted py-5 text-center">
                  <i className="bi bi-file-earmark-person fs-1 mb-2 text-black-50"></i>
                  <h6 className="fw-bold text-dark">No Document Generated Yet</h6>
                  <p className="small mb-0 max-width-xs">
                    Fill in your details on the left and click generate. You will be able to directly click and edit any text inside this canvas!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Modern Styling & Print Media Query Rules */}
      <style>{`
        /* Modern Resume Typography & Structure */
        .modern-resume-body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          line-height: 1.6;
        }

        .modern-resume-body h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }

        .modern-resume-body h2 {
          font-size: 1.05rem;
          font-weight: 700;
          color: ${brandOrange};
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-bottom: 2px solid #f1f5f9;
          padding-bottom: 0.35rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .modern-resume-body h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .modern-resume-body p {
          font-size: 0.9rem;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .modern-resume-body ul {
          padding-left: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .modern-resume-body li {
          font-size: 0.875rem;
          color: #334155;
          margin-bottom: 0.35rem;
        }

        /* Focus state for inline live editing */
        .modern-resume-body:focus {
          outline: 2px dashed ${brandOrange};
          outline-offset: 6px;
          border-radius: 4px;
        }

        /* Optimized CSS for PDF Exporting via Print */
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-canvas, .resume-canvas * {
            visibility: visible;
          }
          .resume-canvas {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            max-height: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          .modern-resume-body:focus {
            outline: none !important;
          }
        }
      `}</style>
    </div>
  );
}