// import { useState } from "react";
// import ResumeForm from "../components/ResumeForm";
// import CoverLetterForm from "../components/CoverLetterForm";
// import style from "../assets/css/dashboard.module.css";

// export default function Dashboard() {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleOpenResumeForm = () => {
//     setActiveForm("resume");
//   };

//   const handleOpenCoverLetterForm = () => {
//     setActiveForm("coverLetter");
//   };

//   const handleCloseForm = () => {
//     setActiveForm(null);
//   };

//   return (
//     <div className={style.body2}>
//       <h2> Dashboard</h2>
//       <br></br>
//       <h3>
//         Create your own resume and cover letter tailored to your career path and
//         professional background.
//       </h3>
//       <br></br>
//       <h4>your first choice</h4>
//       <div className={style.main1}>
//         <div className={style.main2}>
//           <div className={style.container1} onClick={handleOpenCoverLetterForm}>
//             <div className={style.section1}>
//               📄✍️
//               <h2>Create a Tailored Cover Letter</h2>
//               <p>
//                 Craft a professional cover letter to impress recruiters and
//                 highlight your strengths.
//               </p>
//             </div>
//           </div>

//           <div className={style.container1} onClick={handleOpenResumeForm}>
//             <div className={style.section1}>
//               📌📝
//               <h2>Build Your Resume</h2>
//               <p>
//                 Design a clean, modern resume to showcase your skills and
//                 experience.
//               </p>
//             </div>
//           </div>
//         </div>

//         {activeForm === "resume" && <ResumeForm onClose={handleCloseForm} />}
//         {activeForm === "coverLetter" && (
//           <CoverLetterForm onClose={handleCloseForm} />
//         )}
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import CoverLetterForm from "../components/CoverLetterForm";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "resume" | "coverLetter"
  const brandOrange = "#ff6b00";

  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      {/* Top Header Bar */}
      <nav className="navbar navbar-expand bg-white border-bottom px-4 py-3 shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-4 text-dark">
            JobEase <span style={{ color: brandOrange }}>Dashboard</span>
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-medium">
              ⚡ Free AI Credits 
            </span>
            <img
  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Hana"
  alt="Profile Avatar"
  className="rounded-circle"
  style={{
    width: "38px",
    height: "38px",
    objectFit: "cover",
    backgroundColor: "#b6b3b3",
  }}
/>
          </div>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="container-fluid flex-grow-1 d-flex p-0">
        <div className="row g-0 flex-grow-1 w-100">
          
          {/* Sidebar Navigation */}
          <div className="col-lg-3 col-xl-2 bg-white border-end p-4 d-none d-lg-block">
            <h6 className="text-uppercase text-muted small fw-bold mb-3 tracking-wider">Menu</h6>
            <div className="list-group list-group-flush gap-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`list-group-item list-group-item-action rounded-3 border-0 py-3 fw-semibold d-flex align-items-center gap-3 ${
                  activeTab === "overview" ? "text-white shadow-sm" : "text-secondary bg-transparent"
                }`}
                style={{ backgroundColor: activeTab === "overview" ? brandOrange : "transparent" }}
              >
                <i className="bi bi-grid-1x2-fill fs-5"></i> Overview
              </button>

              <button
                onClick={() => setActiveTab("resume")}
                className={`list-group-item list-group-item-action rounded-3 border-0 py-3 fw-semibold d-flex align-items-center gap-3 ${
                  activeTab === "resume" ? "text-white shadow-sm" : "text-secondary bg-transparent"
                }`}
                style={{ backgroundColor: activeTab === "resume" ? brandOrange : "transparent" }}
              >
                <i className="bi bi-file-earmark-person-fill fs-5"></i> Resume Builder
              </button>

              <button
                onClick={() => setActiveTab("coverLetter")}
                className={`list-group-item list-group-item-action rounded-3 border-0 py-3 fw-semibold d-flex align-items-center gap-3 ${
                  activeTab === "coverLetter" ? "text-white shadow-sm" : "text-secondary bg-transparent"
                }`}
                style={{ backgroundColor: activeTab === "coverLetter" ? brandOrange : "transparent" }}
              >
                <i className="bi bi-envelope-paper-fill fs-5"></i> Cover Letter AI
              </button>
            </div>

            <div className="mt-5 p-3 rounded-4 bg-light border text-center">
              <i className="bi bi-lightbulb fs-4" style={{ color: brandOrange }}></i>
              <h6 className="fw-bold mt-2 text-dark small">Pro Tip</h6>
              <p className="text-muted small mb-0">Tailor your resume keywords to match the specific job description for a 98% ATS score.</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-lg-9 col-xl-10 p-4 p-lg-5">
            
            {/* Mobile Tab Switcher */}
            <div className="d-flex d-lg-none gap-2 mb-4 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveTab("overview")} 
                className={`btn rounded-pill px-4 fw-semibold ${activeTab === "overview" ? "btn-dark" : "btn-outline-dark"}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab("resume")} 
                className={`btn rounded-pill px-4 fw-semibold ${activeTab === "resume" ? "btn-dark" : "btn-outline-dark"}`}
              >
                Resume Builder
              </button>
              <button 
                onClick={() => setActiveTab("coverLetter")} 
                className={`btn rounded-pill px-4 fw-semibold ${activeTab === "coverLetter" ? "btn-dark" : "btn-outline-dark"}`}
              >
                Cover Letter
              </button>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div>
                <div className="mb-4">
                  <h1 className="fw-bold text-dark display-6">Welcome Back! 👋</h1>
                  <p className="text-secondary lead fs-6">Choose a tool below to generate recruiter-approved application materials instantly.</p>
                </div>

                {/* Quick Action Cards Grid */}
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div 
                      onClick={() => setActiveTab("resume")}
                      className="p-4 rounded-4 bg-white border h-100 shadow-sm position-relative overflow-hidden cursor-pointer transition-hover"
                      style={{ cursor: "pointer", borderLeft: `6px solid ${brandOrange}` }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="rounded-3 p-3 text-white" style={{ backgroundColor: brandOrange }}>
                          <i className="bi bi-file-earmark-text fs-4"></i>
                        </div>
                        <span className="badge bg-light text-dark border">ATS Optimized</span>
                      </div>
                      <h3 className="h4 fw-bold text-dark">Build Professional Resume</h3>
                      <p className="text-muted small mb-4">Generate structured, clean markdown resumes complete with objectives, skills, and experience sections.</p>
                      <span className="fw-bold small d-flex align-items-center gap-2" style={{ color: brandOrange }}>
                        Get Started <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div 
                      onClick={() => setActiveTab("coverLetter")}
                      className="p-4 rounded-4 bg-white border h-100 shadow-sm position-relative overflow-hidden cursor-pointer transition-hover"
                      style={{ cursor: "pointer", borderLeft: "6px solid #10B981" }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="rounded-3 p-3 text-white bg-success">
                          <i className="bi bi-envelope-paper fs-4"></i>
                        </div>
                        <span className="badge bg-light text-dark border">High Conversion</span>
                      </div>
                      <h3 className="h4 fw-bold text-dark">Craft Tailored Cover Letter</h3>
                      <p className="text-muted small mb-4">Create formal, compelling letters referencing specific job postings, accomplishments, and company culture.</p>
                      <span className="fw-bold small text-success d-flex align-items-center gap-2">
                        Get Started <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats / Activity Banner */}
                <div className="p-4 rounded-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)" }}>
                  <div className="row align-items-center">
                    <div className="col-md-8 mb-3 mb-md-0">
                      <span className="badge bg-white text-dark px-3 py-1 rounded-pill fw-bold mb-2">Job Search Tip</span>
                      <h4 className="fw-bold mb-1">Customize for Every Position</h4>
                      <p className="text-white-50 small mb-0">Tailoring your skills and experience to match the job description increases your callback rate by 3.5x.</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <button 
                        onClick={() => setActiveTab("resume")}
                        className="btn btn-light px-4 rounded-pill fw-bold text-dark"
                      >
                        Create Document Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: RESUME BUILDER */}
            {activeTab === "resume" && <ResumeForm onClose={() => setActiveTab("overview")} />}

            {/* TAB 3: COVER LETTER */}
            {activeTab === "coverLetter" && <CoverLetterForm onClose={() => setActiveTab("overview")} />}

          </div>
        </div>
      </div>
    </div>
  );
}