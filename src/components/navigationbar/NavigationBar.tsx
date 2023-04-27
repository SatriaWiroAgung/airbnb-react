import React from "react";
import "./NavigationBar.css"
import ReactLogo from "../../images/logo192.png"

const NavigationBar = () => {
  return (
    <div id="page">
        <nav className="navigation-bar primary-text-color">
            <div id="nav-logo">
                <img id="nav-react-logo" src={ReactLogo} alt=""/>
                <h2>ReactFacts</h2>
            </div>
            <h3 className="secondary-text-color">React Course - Project 1</h3>
        </nav>
       
    </div>
  );
};

export default NavigationBar;
