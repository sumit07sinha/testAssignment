import React, { Component } from "react";

import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
const Header = () => {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <nav aria-label="breadcrumb" className="breadcrumb-container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">
                    <img src={"./images/breadcrumb-hero-logo.svg"} />
                    <span>Vector Agency</span>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Clients
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
