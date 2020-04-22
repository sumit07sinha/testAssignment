import React, { Component } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
const BodyRowAddNewMember = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="table-responsive">
          <table className="table team-list">
            <tbody>
              <tr>
                <td>
                  <div className="team-list-head">
                    <div className="team-member-pic">JD</div>
                    <div className="team-member-info">
                      <div className="team-member-name">John Doe</div>
                      <div className="team-member-email">
                        john.doe@hmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-end">
                    <span className="v-line"></span>
                    <div className="team-member-options">
                      <div className="admin-toggle-box">
                        <em>IS ADMIN</em>
                        <div className="radio-group">
                          <label>
                            <input type="radio" name="toggle2" value="yes" />
                            <span>Yes</span>
                          </label>
                          <label>
                            <input type="radio" name="toggle2" value="no" />
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <span className="v-line"></span>
                    <a href="#" className="btn btn-default">
                      Save
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BodyRowAddNewMember;
