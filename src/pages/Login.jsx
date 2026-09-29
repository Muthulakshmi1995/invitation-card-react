import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-tabs">
          <button className="active" type="button">Login</button>
          <button type="button">Sign Up</button>
        </div>

        <div className="login-form-area">
          <h1>Login to my Account</h1>
          <label>Email</label>
          <input placeholder="Enter Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button className="login-submit" type="button">Login &amp; Continue</button>
          <button className="forgot" type="button">Forgot Password</button>
        </div>
      </section>
    </main>
  );
}

export default Login;
