import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AirBnbPage from "./features/airbnb/AirBnbPage";
import BusinessCardPage from "./features/businesscard/BusinessCardPage";

const theme = createTheme({
  palette: {
    primary: { main: "#FF5A5F" },
    secondary: { main: "#FFFFFF" },
    text: { primary: "#000000", secondary: "222222" },
    background: { default: "#FFFFFF" },
  },
});

const App = () => {
  const responsiveTheme = responsiveFontSizes(theme);
  return (
    <div>
      <ThemeProvider theme={responsiveTheme}>
        <Routes>
          {/* <Route path="/" element={<AirBnbPage />} /> */}
          <Route path="/" element={<BusinessCardPage />} />
          <Route path="/airbnb" element={<AirBnbPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
