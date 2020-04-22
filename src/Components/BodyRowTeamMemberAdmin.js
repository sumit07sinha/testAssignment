import React, { Component } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
// component will receive props from parent element
const BodyRowTeamMemberAdmin = (props) => {
  return (
    <tr>
      <td style={{ width: "30%" }}>
        <div className="team-list-head">
          <div className="team-member-pic">
            <img src={props.eachMember.imageURL} alt="" />
          </div>
          <div className="team-member-info">
            <div className="team-member-name">{props.eachMember.name}</div>
            <div className="team-member-email">{props.eachMember.emailId}</div>
          </div>
        </div>
      </td>
      <td>
        {props.eachMember.isAdmin && (
          <div className="team-member-role">ADMIN</div>
        )}
      </td>
      <td>
        <div className="team-stat-box">
          <ul className="team-list-stats">
            {props.eachMember.meta.map((eachMeta, index) => {
              return (
                <li key={index}>
                  <h6>{eachMeta.value}</h6>
                  <span>{eachMeta.tagName}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </td>
      <td>
        <div className="team-total-box">
          <ul className="logo-group-list">
            {props.commonMeta.imageURL.map((eachImage, index) => {
              return (
                <div className="logo-group-box" key={index}>
                  <img src={eachImage} alt="" />
                </div>
              );
            })}
          </ul>
          <div className="team-total-number">+5 clients</div>
        </div>
      </td>
      <td style={{ width: "90px", textAlign: "center" }}>
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h"></i>
          </a>
          {/* map function is used for replicating same tag */}
          <div className="dropdown-menu">
            {props.commonMeta.dropDownOptions.map((eachData, index) => {
              return (
                <a className="dropdown-item" href="#" key={index}>
                  {eachData}
                </a>
              );
            })}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BodyRowTeamMemberAdmin;
