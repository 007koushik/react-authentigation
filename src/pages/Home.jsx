import React, { useState } from "react";
import "./Home.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  function handleEmailChange(e) {
    setEmail(e.target.value);
    // console.log(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    // console.log(e.target.value)
  }

  function handleMethodChange() {
    setIsSignInActive(!isSignInActive);
    setError("");
  }

  function handleSignin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please Enter You Email and Password!");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        // console.log(user);
        navigate("/private")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  function handkeSignup(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please Enter You Email and Password!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div className="form-container">
      <form className="form" action="">
        <h1>
          {isSignInActive ? (
            <span style={{ color: "green" }}>Signin</span>
          ) : (
            <span style={{ color: "#2196f3" }}>Signup</span>
          )}
        </h1>
        <label htmlFor="email">Email: </label>
        <input
          className="input-field"
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          className="input-field"
          onChange={handlePasswordChange}
          type="password"
          id="password"
          placeholder="Enter your password"
        />

        {error && <p className="error-message">{error}</p>}

        {isSignInActive ? (
          <button onClick={handleSignin} className="button sign-in-btn">
            Sign in
          </button>
        ) : (
          <button onClick={handkeSignup} className="button sign-up-btn">
            Sign up
          </button>
        )}

        <p className="form-switch">
          {isSignInActive
            ? "Don't have an account "
            : "Already have an Account? "}
          <span onClick={handleMethodChange} className="form-switch-link">
            {isSignInActive ? "Signup" : "Signin"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Home;
