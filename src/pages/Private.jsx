import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import './Private.css'

const Private = () => {
  function handleSignout() {
    signOut(auth)
      .then(() => {
        alert("Sign out Successfully!");
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="private-container">
      <header className="private-header">
        <h1>Welcome to the Dashboard</h1>
      </header>

      <main className="private-content">
        <h2>Your Profile</h2>
        <p>
          Wealcome to the private Dashboard. Here you can manage your settings
          and preferance.
        </p>
      </main>

      <footer className="private-footer">
        <button onClick={handleSignout}>Signout</button>
      </footer>
    </div>
  );
};

export default Private;
