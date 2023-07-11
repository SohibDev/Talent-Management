import React from "react";
import "./login.css";
import Logo from "../../images/LogoLogin.png";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="login-form">
        <h3 className="form-title">Personal account sign in</h3>
        <form>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your email address"
          />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your password"
          />
          <button className="sign-in-button">Sign in</button>
        </form>
        <a href="/" className="profile-link">
          I don't have a profile
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
