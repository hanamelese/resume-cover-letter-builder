import { useEffect, useRef, useState } from "react";
import { auth, googleProvider } from "../services/firebase";
import style from "../assets/css/auth.module.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function SignupModal({ onClose }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalRef = useRef(null);

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.modalWrapper}>
      <div
        className={`${style.card} ${isFlipped ? style.flipped : ""}`}
        ref={modalRef}
      >
        {/* Sign-Up Side */}
        <div className={style.front}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Create Account</button>
          <p onClick={() => setIsFlipped(true)} style={{ cursor: "pointer" }}>
            Already have an account?
          </p>
        </div>

        {/* Login Side */}
        <div className={style.back}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleGoogleLogin}>Login with Google</button>
          <p onClick={() => setIsFlipped(false)} style={{ cursor: "pointer" }}>
            Need an account? Go back
          </p>
        </div>
      </div>
    </div>
  );
}
