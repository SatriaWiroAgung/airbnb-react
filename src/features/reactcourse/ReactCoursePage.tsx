import * as React from "react";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import "./ReactCoursePage.css"
import { useNavigate } from "react-router-dom";

const ReactCoursePage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }
  
  return (
    <div id="main">
      <NavigationBar />
      <div id="content">
        <div id="content-data">
          <h1 onClick={handleClick}>Fun Facts about React</h1>
          <ul id="fact-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReactCoursePage;