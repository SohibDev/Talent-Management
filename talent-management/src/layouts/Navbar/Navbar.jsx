import React, { useState } from "react";
import Logo from "../../images/Logo1.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <button class="toggle-btn" onClick={toggleDropdown}>
        &#9776;
      </button>

      <ul className={`nav-menu ${isDropdownOpen ? "open" : ""}`}>
        <li>
          <div class="dropdown">
            <button class="dropdown-button nav-menu-link">About</button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Workers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a className="nav-menu-link" href="">
            For Companies
          </a>
        </li>
        <li>
          <a className="nav-menu-link" href="">
            For Individuals
          </a>
        </li>
        <li>
          <a className="nav-menu-link nav-menu-link-login" href="">
            Login
          </a>
        </li>
        <li>
          <button className="nav-button nav-button1">Sign Up</button>
        </li>
        <li>
          <select
            className="nav-button nav-button2"
            id=""
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="en">En</option>
            <option value="uz">Uz</option>
            <option value="kg">Kg</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
