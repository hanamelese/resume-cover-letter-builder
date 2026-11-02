// import { useEffect, useRef, useState } from "react";
// import { auth, googleProvider } from "../services/firebase";
// import style from "../assets/css/auth.module.css";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";

// export default function SignupModal({ onClose }) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const modalRef = useRef(null);

//   const handleSignup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Signup successful!");
//       onClose();
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful!");
//       onClose();
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       alert("Google login successful!");
//       onClose();
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose(); 
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className={style.modalWrapper}>
//       <div
//         className={`${style.card} ${isFlipped ? style.flipped : ""}`}
//         ref={modalRef}
//       >
//         {/* Sign-Up Side */}
//         <div className={style.front}>
//           <h2>Sign Up</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleSignup}>Create Account</button>
//           <p onClick={() => setIsFlipped(true)} style={{ cursor: "pointer" }}>
//             Already have an account?
//           </p>
//         </div>

//         {/* Login Side */}
//         <div className={style.back}>
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//           <button onClick={handleGoogleLogin}>Login with Google</button>
//           <p onClick={() => setIsFlipped(false)} style={{ cursor: "pointer" }}>
//             Need an account? Go back
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { auth, googleProvider } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function SignupModal({ onClose }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  const brandOrange = "#ff6b00";

  const handleSignup = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
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
    <div 
      ref={modalRef} 
      className="bg-white rounded-4 shadow-lg border p-4 p-sm-5 position-relative mx-auto my-auto"
      style={{ maxWidth: "420px", width: "100%" }}
    >
      {/* Close Button */}
      <button 
        type="button" 
        className="btn-close position-absolute top-0 end-0 m-3" 
        onClick={onClose}
        aria-label="Close"
      ></button>

      {!isFlipped ? (
        /* SIGN UP FORM */
        <div>
          <div className="text-center mb-4">
            <div 
              className="d-inline-flex align-items-center justify-content-center text-white rounded-circle mb-2 shadow-sm"
              style={{ width: "48px", height: "48px", backgroundColor: brandOrange }}
            >
              <i className="bi bi-person-plus-fill fs-5"></i>
            </div>
            <h3 className="fw-bold text-dark mb-1 fs-4">Create Account</h3>
            <p className="text-muted small mb-0">Join JobEase AI to build ATS-friendly resumes</p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="mb-3 text-start">
              <label className="form-label small fw-semibold text-secondary mb-1">Email Address</label>
              <input
                type="email"
                required
                className="form-control form-control-lg rounded-pill fs-6 px-3"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label small fw-semibold text-secondary mb-1">Password</label>
              <input
                type="password"
                required
                className="form-control form-control-lg rounded-pill fs-6 px-3"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg w-100 text-white fw-bold rounded-pill shadow-sm mb-3 py-2 fs-6"
              style={{ backgroundColor: brandOrange }}
            >
              {loading ? (
                <span><span className="spinner-border spinner-border-sm me-2"></span>Creating...</span>
              ) : (
                "Create Free Account"
              )}
            </button>
          </form>

          <div className="text-center mt-2">
            <span className="text-muted small">
              Already have an account?{" "}
              <button 
                type="button"
                onClick={() => setIsFlipped(true)} 
                className="btn btn-link p-0 fw-bold border-0 align-baseline text-decoration-none"
                style={{ color: brandOrange }}
              >
                Sign In
              </button>
            </span>
          </div>
        </div>
      ) : (
        /* LOGIN FORM */
        <div>
          <div className="text-center mb-4">
            <div 
              className="d-inline-flex align-items-center justify-content-center text-white rounded-circle mb-2 shadow-sm"
              style={{ width: "48px", height: "48px", backgroundColor: brandOrange }}
            >
              <i className="bi bi-box-arrow-in-right fs-5"></i>
            </div>
            <h3 className="fw-bold text-dark mb-1 fs-4">Welcome Back</h3>
            <p className="text-muted small mb-0">Sign in to access your saved documents</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label className="form-label small fw-semibold text-secondary mb-1">Email Address</label>
              <input
                type="email"
                required
                className="form-control form-control-lg rounded-pill fs-6 px-3"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label small fw-semibold text-secondary mb-1">Password</label>
              <input
                type="password"
                required
                className="form-control form-control-lg rounded-pill fs-6 px-3"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg w-100 text-white fw-bold rounded-pill shadow-sm mb-2 py-2 fs-6"
              style={{ backgroundColor: brandOrange }}
            >
              {loading ? (
                <span><span className="spinner-border spinner-border-sm me-2"></span>Signing In...</span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="btn btn-lg w-100 btn-outline-dark fw-semibold rounded-pill shadow-sm mb-3 py-2 d-flex align-items-center justify-content-center gap-2 fs-6"
          >
            <i className="bi bi-google"></i> Continue with Google
          </button>

          <div className="text-center">
            <span className="text-muted small">
              Need an account?{" "}
              <button 
                type="button"
                onClick={() => setIsFlipped(false)} 
                className="btn btn-link p-0 fw-bold border-0 align-baseline text-decoration-none"
                style={{ color: brandOrange }}
              >
                Sign Up
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}