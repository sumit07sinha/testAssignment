import React, { useState, useEffect } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
import BodyContentSearchBar from "./BodyContentSearchBar";
import BodyRowTeamMember from "./BodyRowTeamMember";
const MainBodyContent = (React.FunctionComponent = () => {
  const searchData = {
    dropDown: [
      " Added on - Asc",
      " Added on - Desc",
      " Name A - Z",
      " Name Z - A",
    ],
  };
  const [data, setData] = useState(searchData);
  //using hard coded data, which can be changed to API call later.
  useEffect(() => {
    setData(searchData);
  }, [setData]);

  return (
    <div className="main-container">
      <div className="main-content">
        <div className="container-fluid">
          <BodyContentSearchBar dropDown={searchData.dropDown} />
          <BodyRowTeamMember />
        </div>
      </div>
    </div>
  );
});

export default MainBodyContent;
