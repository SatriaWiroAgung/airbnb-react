import * as React from "react";
import "./BusinessCardPage.css";
import {
  profilePicture,
  facebookLogo,
  instagramLogo,
  githubLogo, 
  linkedinLogo,
  gmailLogo
} from "../../images/images";
import SocialMediaLink from "../../models/SocialMediaLink";
import { useNavigate } from "react-router-dom";

const socialMediaLinks : SocialMediaLink[] = [
  {type: "Instagram", logo: instagramLogo, linkUrl: "https://www.instagram.com/?hl=id"},
  {type: "Facebook", logo: facebookLogo, linkUrl: "https://id-id.facebook.com/"},
  {type: "Github", logo: githubLogo, linkUrl: "https://github.com/"},
]
const BusinessCardPage = () => {
  const navigate = useNavigate();
  const socialMediaButtons : JSX.Element[]= [];
  socialMediaLinks.forEach(function(value) {
    socialMediaButtons.push (
      <img className="social-media-img" src={value.logo} alt={value.type + " Logo"} onClick={() => window.open(value.linkUrl)}/>
    )
  }); 

  return (
    <div id="business-card-page">
      <div id="business-card">
        <img id="profile-picture" src={profilePicture} alt="" />

        <h3>Satria Wiro Agung</h3>

        <p id="position">Android Developer</p>

        <p id="address">Jakarta, Indonesia</p>

        <div id="button-section">
          <button className="primary-btn" onClick={() => window.open("https://www.google.com/?hl=ID")}>
            <img className="btn-icon" src={gmailLogo} alt="" />
            Email
          </button>
          <button className="secondary-btn" onClick={() => navigate("/airbnb")}>
            <img className="btn-icon" src={linkedinLogo} alt="" />
            AirBnb
          </button>
        </div>

        <div id="card-description">
          <div id="about-section">
            <h4>About</h4>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things to
              learn.
            </p>
          </div>

          <div id="interest-section">
            <h4>Interests</h4>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        
        <div id="social-media-links">{socialMediaButtons}</div>
      </div>
    </div>
  );
};

export default BusinessCardPage;
