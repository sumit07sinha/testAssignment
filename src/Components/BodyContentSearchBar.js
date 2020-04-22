import React, { Component } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
const BodyContentSearchBar = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="filter-container team-filter-container">
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <span className="h-space"></span>
          <div className="filter-option">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="./images/sort-icon.svg" alt="" />
              </a>
              {/*dropdown menu will be created from the dropdown options
              provided in the parent element. */}
              <div className="dropdown-menu">
                {props.dropDown.map((eachData, index) => {
                  return (
                    <a className="dropdown-item" href="#" key={index}>
                      {eachData}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <span className="v-line"></span>
          <div className="filter-list-box">
            <ul className="filter-list no-border-right">
              <li>
                <a href="#" className="active">
                  all
                </a>
              </li>
              <li>
                <a href="#">admins</a>
              </li>
              <li>
                <a href="#">non-admins</a>
              </li>
            </ul>
          </div>
          <span className="h-space"></span>
          <div className="filter-btn-box ml-auto">
            <a href="#" className="btn btn-default">
              <i className="fas fa-plus"></i> Add team member
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContentSearchBar;
