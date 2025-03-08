import React from "react";
import "./index.css";
const ForgotPassword = () => {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Send Mail</button>
      <p>
        <a href="/login">Back to Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
