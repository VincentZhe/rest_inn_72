import React from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

const Login = () => {

  
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-wrapper">
          <h3 className="login-title">Log In</h3>
          <form className="login-form">
            <label for="email">Email</label>
            <input name="email" placeholder="Email" />
            <label for="password">Password</label>
            <input name="password" placeholder="Password" />

            <button className="login-btn">Log In</button>
            <p className="login-haveaccount">
              Don't have an account? <a href="/">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
