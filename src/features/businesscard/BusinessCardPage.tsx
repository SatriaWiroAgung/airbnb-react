import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  SvgIcon,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Scaled } from "../../constants";
import {
  facebookLogo,
  githubLogo,
  gmailLogo,
  instagramLogo,
  linkedinLogo,
  profilePicture,
} from "../../images/images";
import { ReactComponent as LinkedInLogo } from "../../images/vectors/LinkedIn_icon.svg";
import SocialMediaLink from "../../models/SocialMediaLink";
import "./BusinessCardPage.css";

const socialMediaLinks: SocialMediaLink[] = [
  {
    type: "Instagram",
    logo: instagramLogo,
    linkUrl: "https://www.instagram.com/?hl=id",
  },
  {
    type: "Facebook",
    logo: facebookLogo,
    linkUrl: "https://id-id.facebook.com/",
  },
  { type: "Github", logo: githubLogo, linkUrl: "https://github.com/" },
];
const BusinessCardPageOld = () => {
  const navigate = useNavigate();
  const socialMediaButtons: JSX.Element[] = [];
  socialMediaLinks.forEach(function (value) {
    socialMediaButtons.push(
      <img
        className="social-media-img"
        src={value.logo}
        alt={value.type + " Logo"}
        onClick={() => window.open(value.linkUrl)}
      />
    );
  });

  return (
    <div id="business-card-page">
      <div id="business-card">
        <img id="profile-picture" src={profilePicture} alt="" />

        <h3>Satria Wiro Agung</h3>

        <p id="position">Android Developer</p>

        <p id="address">Jakarta, Indonesia</p>

        <div id="button-section">
          <button
            className="primary-btn"
            onClick={() => window.open("https://www.google.com/?hl=ID")}
          >
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
              security and best practices, and am always looking for new things
              to learn.
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

const businessCardTheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const gmailIcon = (
  <Icon>
    <img
      src={gmailLogo}
      style={{
        width: "100%",
      }}
    ></img>
  </Icon>
);

const linkedinIcon = (
  <Icon>
    <img
      src={linkedinLogo}
      style={{
        width: "100%",
      }}
    ></img>
  </Icon>
);

export const BusinessCardPage = () => {
  const socialMediaButtons = socialMediaLinks.map((value, i) => {
    return (
      <IconButton
        size="small"
        key={i}
        onClick={() => window.open(value.linkUrl)}
      >
        <img
          src={value.logo}
          alt={value.type + " Logo"}
          style={{
            width: Scaled.px(40),
            height: "max-content",
          }}
        />
      </IconButton>
    );
  });

  return (
    <ThemeProvider theme={responsiveFontSizes(businessCardTheme)}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#23252C" }}
      >
        <Stack
          height={"100vh"}
          maxWidth={Scaled.px(400)}
          marginY={Scaled.px(44)}
          borderRadius={Scaled.px(20)}
          overflow={"hidden"}
          alignItems={"center"}
          sx={{ backgroundColor: "#1A1B21" }}
        >
          <Box
            component={"img"}
            height={"35%"}
            width={"100%"}
            src={profilePicture}
            sx={{
              objectFit: "cover",
            }}
          />

          <Typography
            color={"white"}
            fontSize={Scaled.px(25)}
            fontWeight={"bold"}
            paddingTop={Scaled.px(20)}
          >
            Satria Wiro Agung
          </Typography>

          <Typography
            fontSize={Scaled.px(14)}
            paddingTop={Scaled.px(8)}
            color={"#F3BF99"}
          >
            Android Developer
          </Typography>

          <Typography
            fontSize={Scaled.px(12)}
            paddingTop={Scaled.px(8)}
            color={"white"}
          >
            Jakarta, Indonesia
          </Typography>

          <Stack
            direction={"row"}
            spacing={1}
            paddingTop={Scaled.px(32)}
            sx={{
              width: "calc(100% - 80px)",
            }}
          >
            <Button
              startIcon={gmailIcon}
              href="https://www.google.com/?hl=ID"
              target="_blank"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: Scaled.px(8),
                "&:hover": {
                  backgroundColor: "#F3BF99",
                  color: "white",
                  transition: "0.4s",
                },
                "&:active": {
                  backgroundColor: "#1A1B21",
                  color: "white",
                  transition: "0.4s",
                },
              }}
            >
              Email
            </Button>
            <Button
              startIcon={
                <SvgIcon
                  component={LinkedInLogo}
                  width={20}
                  height={20}
                  sx={{ fontSize: 20 }}
                  viewBox="0 0 72 72"
                />
              }
              href="/airbnb"
              target="_blank"
              sx={{
                lineHeight: "normal",
                width: "100%",
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: Scaled.px(8),
                "&:hover": {
                  backgroundColor: "#0e76a8",
                  color: "white",
                  transition: "0.4s",
                },
                "&:active": {
                  backgroundColor: "#1A1B21",
                  color: "white",
                  transition: "0.4s",
                },
              }}
            >
              AirBnb
            </Button>
          </Stack>

          <Stack
            alignItems={"start"}
            margin={"auto"}
            sx={{
              width: "calc(100% - 80px)",
            }}
          >
            <Typography
              color={"white"}
              fontWeight={"bold"}
              fontSize={Scaled.px(18)}
            >
              About
            </Typography>
            <Typography
              fontSize={Scaled.px(12)}
              paddingTop={Scaled.px(6)}
              color={"#DCDCDC"}
            >
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </Typography>

            <Typography
              color={"white"}
              marginTop={Scaled.px(40)}
              fontWeight={"bold"}
              fontSize={Scaled.px(18)}
            >
              Interests
            </Typography>
            <Typography
              fontSize={Scaled.px(12)}
              paddingTop={Scaled.px(6)}
              color={"#DCDCDC"}
            >
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </Typography>
          </Stack>

          <Stack
            width={"100%"}
            height={"10%"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            sx={{
              backgroundColor: "#161619",
            }}
          >
            {socialMediaButtons}
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default BusinessCardPage;
