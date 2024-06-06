import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assest/virtusa.png";
import "./topbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const TopBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="top-bar">
      <div className="logo">
        <img
          src={logo}
          alt="Company Logo"
        />
      </div>
      <div className="icons-container">
        <label className="backto-home" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i>
        </label>
        <label className="backto-home" onClick={() => navigate("/")}>
          <i className="fas fa-home"></i>
        </label>
      </div>
    </div>
  );
};

export default TopBar;
