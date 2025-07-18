import React from "react";
import style from "../assets/css/function.module.css";
const Functions = () => {
  return (
    <>
      <main>
        <div style={{ color: "darkgray" }}>features</div>
        <h1 style={{ margin: "30px 0" }}>
          esier your life with our remarkable website
        </h1>
        <h3>
          this website offers a modern resume and cover letters for the job
          seekers
        </h3>
        <div className={style.main}>
          <div className={style.container1}>
            <div className={style.section1}>
              🤖✨<br></br>
              <h2>AI-Powered Content Generator</h2>
              <br></br>
              <p>
                Effortlessly create tailored resumes and cover letters using AI.
              </p>
            </div>
          </div>

          <div className={style.container1}>
            <div className={style.section1}>
              🔍👁️<br></br>
              <h2>Real-Time Preview</h2>
              <br></br>
              <p>See live updates as you customize your documents.</p>
            </div>
          </div>

          <div className={style.container1}>
            <div className={style.section1}>
              📄⬇️<br></br>
              <h2>Quick Export</h2>
              <br></br>
              <p>Download your resume or cover letter instantly as a PDF.</p>
            </div>
          </div>

          <div className={style.container1}>
            <div className={style.section1}>
              📌📑<br></br>
              <h2>Professional Templates</h2>
              <br></br>
              <p>Choose from modern designs to make your profile stand out.</p>
            </div>
          </div>

          <div className={style.ready}>
            <h2>Are you ready to work with us?</h2>
            <button className={style.but}>Try without Signup</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Functions;
