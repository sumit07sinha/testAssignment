// export default BodyRowTeamMember;
import React, { useState, useEffect } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
import BodyRowTeamMemberAdmin from "./BodyRowTeamMemberAdmin";
import BodyRowAddNewMember from "./BodyRowAddNewMember";

const BodyRowTeamMember = (React.FunctionComponent = () => {
  // Data used in the childelement are defined in this
  const teamData = {
    commonMeta: {
      imageURL: [
        "images/mastercard-logo.svg",
        "images/apple-icon.svg",
        "images/mountain-dew-logo.svg",
      ],
      numberOfClients: "+5 clients",
      dropDownOptions: ["Snooze", "Skip", "Delete"],
    },
    teamMembers: [
      {
        name: "Medina Trudoo",
        emailId: "jmedina@trudoo.name",
        isAdmin: true,
        imageURL: "images/profile-pic1.png",
        meta: [
          {
            tagName: "EMAIL",
            value: "3K",
          },
          {
            tagName: "MEETINGS",
            value: 160,
          },
          {
            tagName: "REPLYRATE",
            value: "12%",
          },
          {
            tagName: "SEQUENCES",
            value: "4",
          },
        ],
      },
      {
        name: "Medina Trudoo",
        emailId: "jmedina@trudoo.name",
        isAdmin: true,
        imageURL: "images/profile-pic2.png",
        meta: [
          {
            tagName: "EMAIL",
            value: "3K",
          },
          {
            tagName: "MEETINGS",
            value: 160,
          },
          {
            tagName: "REPLYRATE",
            value: "12%",
          },
          {
            tagName: "SEQUENCES",
            value: "4",
          },
        ],
      },
      {
        name: "Rami Moore",
        emailId: "rmoore@livez.gov",
        isAdmin: false,
        imageURL: "images/profile-pic3.png",
        meta: [
          {
            tagName: "EMAIL",
            value: "3K",
          },
          {
            tagName: "MEETINGS",
            value: 160,
          },
          {
            tagName: "REPLYRATE",
            value: "12%",
          },
          {
            tagName: "SEQUENCES",
            value: "4",
          },
        ],
      },
      {
        name: "Irina Ryan",
        emailId: "iryan@shuffletag.biz",
        isAdmin: false,
        imageURL: "images/profile-pic4.png",
        meta: [
          {
            tagName: "EMAIL",
            value: "3K",
          },
          {
            tagName: "MEETINGS",
            value: 160,
          },
          {
            tagName: "REPLYRATE",
            value: "12%",
          },
          {
            tagName: "SEQUENCES",
            value: "4",
          },
        ],
      },
      {
        name: "Michael Collins",
        emailId: "mcollins@snaptags.info",
        isAdmin: false,
        imageURL: "images/profile-pic5.png",
        meta: [
          {
            tagName: "EMAIL",
            value: "3K",
          },
          {
            tagName: "MEETINGS",
            value: 160,
          },
          {
            tagName: "REPLYRATE",
            value: "12%",
          },
          {
            tagName: "SEQUENCES",
            value: "4",
          },
        ],
      },
    ],
  };
  const [data, setData] = useState(teamData);
  //using hard coded data, which can be also changed to API call later if needed.
  useEffect(() => {
    setData(teamData);
  }, [setData]);
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table team-list">
              <tbody>
                {data.teamMembers.map((eachMember, index) => {
                  return (
                    <BodyRowTeamMemberAdmin
                      eachMember={eachMember}
                      commonMeta={data.commonMeta}
                      key={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <BodyRowAddNewMember />
    </>
  );
});

export default BodyRowTeamMember;
