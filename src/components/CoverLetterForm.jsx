



import { useState, useRef } from "react";
import { generateText } from "../services/gemini";

export default function CoverLetterForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    companyAddress: "",
    hiringManagerName: "",
    hiringManagerTitle: "",
    jobPosition: "",
    platform: "",
    specificInterest: "",
    skills: "",
    accomplishments: "",
    contact: "",
    portfolio: "",
    github: "",
    linkedin: "",
    extraNote: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const coverLetterPreviewRef = useRef(null);

  const brandOrange = "#ff6b00";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const prompt = `
Write a formal, professional, executive-level cover letter structured in clean HTML format:

Applicant's Name: ${form.name}
Company: ${form.company}
Company Address: ${form.companyAddress || "Not provided"}
Hiring Manager: ${form.hiringManagerName || "Hiring Manager"}
Hiring Manager Title: ${form.hiringManagerTitle || "Not provided"}
Position Applied For: ${form.jobPosition}
Platform Where Job Was Found: ${form.platform}

Mention genuine interest in the company, specifically highlighting: ${form.specificInterest}
Highlight the following skills: ${form.skills}
Include key accomplishments related to the job: ${form.accomplishments}
Include contact info: ${form.contact}
Portfolio: ${form.portfolio || "N/A"}
GitHub: ${form.github || "N/A"}
LinkedIn: ${form.linkedin || "N/A"}
Additional note: ${form.extraNote || "None"}

Format requirements:
- Use clean HTML tags (e.g., <p>, <strong>) for paragraphs and spacing.
- Do not use Markdown code block backticks.
- Professional tone, structured with clear paragraphs: introduction, body fit, enthusiasm, and closing signature.
`;

      const text = await generateText(prompt);
      setResult(text);
    } catch (err) {
      console.error("Groq Generation Error:", err);
      setResult("<p class='text-danger'>Error generating cover letter. Please try again.</p>");
    } finally {
      setLoading(false);
    }
  };

  // Trigger browser print to save as PDF
  const handleDownloadPDF = () => {
    window.print();
  };

  // Copy plain text to clipboard
  const handleCopyText = () => {
    if (coverLetterPreviewRef.current) {
      const plainText = coverLetterPreviewRef.current.innerText;
      navigator.clipboard.writeText(plainText);
      alert("Cover letter text copied to clipboard!");
    }
  };

  return (
    <div className="bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
      {/* Header (Hidden during printing) */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom d-print-none">
        <div>
          <span className="badge bg-success-subtle text-success fw-bold px-3 py-2 rounded-pill mb-1">
            ⚡ AI Cover Letter Studio
          </span>
          <h2 className="fw-bold text-dark mb-0">Craft Tailored Cover Letter</h2>
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
        {/* Form Inputs Column (Hidden during printing) */}
        <div className="col-lg-5 d-print-none">
          <h5 className="fw-bold text-dark mb-3">1. Application Details</h5>

          <form onSubmit={handleGenerate}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Your Full Name</label>
                <input
                  className="form-control"
                  name="name"
                  required
                  placeholder="e.g. Hana Melese"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Company Name</label>
                <input
                  className="form-control"
                  name="company"
                  required
                  placeholder="e.g. Google"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Position Applied For</label>
                <input
                  className="form-control"
                  name="jobPosition"
                  required
                  placeholder="e.g. Software Engineer"
                  value={form.jobPosition}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Where Found</label>
                <input
                  className="form-control"
                  name="platform"
                  placeholder="e.g. LinkedIn"
                  value={form.platform}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">
                  Hiring Manager Name (Optional)
                </label>
                <input
                  className="form-control"
                  name="hiringManagerName"
                  placeholder="e.g. John Doe"
                  value={form.hiringManagerName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Contact Info</label>
                <input
                  className="form-control"
                  name="contact"
                  placeholder="Email / Phone"
                  value={form.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">
                  Relevant Skills (comma separated)
                </label>
                <textarea
                  className="form-control"
                  name="skills"
                  rows="2"
                  placeholder="React, Node.js, TypeScript..."
                  value={form.skills}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">
                  Key Accomplishments or Projects
                </label>
                <textarea
                  className="form-control"
                  name="accomplishments"
                  rows="2"
                  placeholder="Built a secure SaaS platform..."
                  value={form.accomplishments}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">
                  What interests you about this company?
                </label>
                <textarea
                  className="form-control"
                  name="specificInterest"
                  rows="2"
                  placeholder="Your innovative engineering culture..."
                  value={form.specificInterest}
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
                  Generating Letter with AI...
                </span>
              ) : (
                <span>
                  Generate Cover Letter <i className="bi bi-magic ms-2"></i>
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Live Modern Cover Letter Preview Column */}
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
              className="flex-grow-1 bg-white p-4 p-md-5 rounded-3 border shadow-sm overflow-y-auto cover-letter-canvas"
              style={{ minHeight: "600px", maxHeight: "750px" }}
            >
              {result ? (
                <div
                  ref={coverLetterPreviewRef}
                  contentEditable
                  suppressContentEditableWarning
                  className="modern-cover-letter-body outline-none"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              ) : (
                <div className="h-100 d-flex flex-column align-items-center justify-content-center text-muted py-5 text-center">
                  <i className="bi bi-envelope-paper fs-1 mb-2 text-black-50"></i>
                  <h6 className="fw-bold text-dark">No Cover Letter Generated Yet</h6>
                  <p className="small mb-0 max-width-xs">
                    Fill out the application details on the left and click generate. You can click directly into the canvas below to customize any line before exporting!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Modern Typography & Print Media Query Rules */}
      <style>{`
        .modern-cover-letter-body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #334155;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .modern-cover-letter-body p {
          margin-bottom: 1.2rem;
        }

        /* Focus state for inline live editing */
        .modern-cover-letter-body:focus {
          outline: 2px dashed ${brandOrange};
          outline-offset: 6px;
          border-radius: 4px;
        }

        /* Optimized CSS for PDF Exporting via Print */
        @media print {
          body * {
            visibility: hidden;
          }
          .cover-letter-canvas, .cover-letter-canvas * {
            visibility: visible;
          }
          .cover-letter-canvas {
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
          .modern-cover-letter-body:focus {
            outline: none !important;
          }
        }
      `}</style>
    </div>
  );
}