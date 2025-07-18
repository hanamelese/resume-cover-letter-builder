import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import CoverLetterForm from "../components/CoverLetterForm";
import style from "../assets/css/dashboard.module.css";

export default function Dashboard() {
  const [activeForm, setActiveForm] = useState(null);

  const handleOpenResumeForm = () => {
    setActiveForm("resume");
  };

  const handleOpenCoverLetterForm = () => {
    setActiveForm("coverLetter");
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <div className={style.body2}>
      <h2> Dashboard</h2>
      <br></br>
      <h3>
        Create your own resume and cover letter tailored to your career path and
        professional background.
      </h3>
      <br></br>
      <h4>your first choice</h4>
      <div className={style.main1}>
        <div className={style.main2}>
          <div className={style.container1} onClick={handleOpenCoverLetterForm}>
            <div className={style.section1}>
              📄✍️
              <h2>Create a Tailored Cover Letter</h2>
              <p>
                Craft a professional cover letter to impress recruiters and
                highlight your strengths.
              </p>
            </div>
          </div>

          <div className={style.container1} onClick={handleOpenResumeForm}>
            <div className={style.section1}>
              📌📝
              <h2>Build Your Resume</h2>
              <p>
                Design a clean, modern resume to showcase your skills and
                experience.
              </p>
            </div>
          </div>
        </div>

        {activeForm === "resume" && <ResumeForm onClose={handleCloseForm} />}
        {activeForm === "coverLetter" && (
          <CoverLetterForm onClose={handleCloseForm} />
        )}
      </div>
    </div>
  );
}
