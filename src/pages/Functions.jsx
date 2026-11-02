// import React from "react";
// import style from "../assets/css/function.module.css";
// const Functions = () => {
//   return (
//     <>
//       <main>
//         <div style={{ color: "darkgray" }}>features</div>
//         <h1 style={{ margin: "30px 0" }}>
//           esier your life with our remarkable website
//         </h1>
//         <h3>
//           this website offers a modern resume and cover letters for the job
//           seekers
//         </h3>
//         <div className={style.main}>
//           <div className={style.container1}>
//             <div className={style.section1}>
//               🤖✨<br></br>
//               <h2>AI-Powered Content Generator</h2>
//               <br></br>
//               <p>
//                 Effortlessly create tailored resumes and cover letters using AI.
//               </p>
//             </div>
//           </div>

//           <div className={style.container1}>
//             <div className={style.section1}>
//               🔍👁️<br></br>
//               <h2>Real-Time Preview</h2>
//               <br></br>
//               <p>See live updates as you customize your documents.</p>
//             </div>
//           </div>

//           <div className={style.container1}>
//             <div className={style.section1}>
//               📄⬇️<br></br>
//               <h2>Quick Export</h2>
//               <br></br>
//               <p>Download your resume or cover letter instantly as a PDF.</p>
//             </div>
//           </div>

//           <div className={style.container1}>
//             <div className={style.section1}>
//               📌📑<br></br>
//               <h2>Professional Templates</h2>
//               <br></br>
//               <p>Choose from modern designs to make your profile stand out.</p>
//             </div>
//           </div>

//           <div className={style.ready}>
//             <h2>Are you ready to work with us?</h2>
//             <button className={style.but}>Try without Signup</button>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Functions;



import React from "react";
import { Link } from "react-router-dom";

const Functions = () => {
  const brandOrange = "#ff6b00";

  const featureList = [
    {
      icon: "bi-cpu-fill",
      title: "AI-Powered Content Generator",
      description:
        "Effortlessly generate ATS-optimized summaries, tailored bullet points, and compelling cover letters in seconds.",
      badge: "Smart AI",
    },
    {
      icon: "bi-eye-fill",
      title: "Real-Time Live Preview",
      description:
        "Watch your resume update side-by-side as you tweak content, adjust layouts, and experiment with styling.",
      badge: "Instant",
    },
    {
      icon: "bi-file-earmark-pdf-fill",
      title: "One-Click Quick Export",
      description:
        "Export publication-ready PDFs formatted according to industry standards with pixel-perfect layouts.",
      badge: "PDF / Word",
    },
    {
      icon: "bi-palette-fill",
      title: "Professional Templates",
      description:
        "Choose from a collection of recruiter-vetted modern templates designed to make your profile stand out.",
      badge: "ATS Friendly",
    },
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <span
            className="badge px-3 py-2 rounded-pill fw-bold text-uppercase tracking-wider mb-2"
            style={{
              backgroundColor: "#fff0e6",
              color: brandOrange,
            }}
          >
            Core Capabilities
          </span>

          <h2 className="display-5 fw-bold text-dark mb-3">
            Easier Job Hunting with <span style={{ color: brandOrange }}>JobEase AI</span>
          </h2>

          <p className="lead text-muted">
            Craft modern, recruiter-approved resumes and tailored cover letters in minutes—giving you a competitive edge.
          </p>
        </div>

        {/* Features 2x2 Responsive Grid */}
        <div className="row g-4 mb-5">
          {featureList.map((feature, index) => (
            <div key={index} className="col-md-6">
              <div
                className="p-4 p-lg-5 rounded-4 bg-white border h-100 shadow-sm d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center text-white"
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: brandOrange,
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <span
                      className="badge rounded-pill fw-semibold border px-3 py-2"
                      style={{
                        backgroundColor: "#fff0e6",
                        color: brandOrange,
                        borderColor: "rgba(255,107,0,0.2)",
                      }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="h4 fw-bold text-dark mb-2">{feature.title}</h3>

                  <p className="text-secondary mb-0 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-top d-flex align-items-center gap-2 text-muted small fw-medium">
                  <span>Explore capability</span>
                  <i className="bi bi-arrow-right" style={{ color: brandOrange }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div
          className="p-5 rounded-4 text-white text-center text-lg-start position-relative overflow-hidden shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${brandOrange} 0%, #9d4201 100%)`,
          }}
        >
          <div className="row align-items-center position-relative z-1">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-2">Ready to Build Your Winning Resume?</h2>
              <p className="mb-0 text-white-50 fs-5">
                Test our builder immediately without signing up, or create an account to save your templates.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link
                to="/dashboard"
                className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-bold text-dark shadow-sm d-inline-flex align-items-center gap-2"
              >
                <span>Try Without Signup</span>
                <i className="bi bi-rocket-takeoff-fill" style={{ color: brandOrange }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functions;