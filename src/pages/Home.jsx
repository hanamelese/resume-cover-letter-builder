import { useState } from "react";
import SignupModal from "../components/AuthForm"; // Or AuthModal if both forms are in one
import style from "../assets/css/home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={style.container}>
      <div className={style.overlay}>
        <h1>Welcome to JobEase AI</h1>
        <p>
          Generate your resume and cover letter with AI. We are here to help
        </p>
        <button onClick={() => setShowModal(true)}>Login / Sign Up</button>
        <Link to="/dashboard">
          <button>Get Started</button>
        </Link>

        {showModal && <SignupModal onClose={() => setShowModal(false)} />}
      </div>
    </main>
  );
}
