import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, themeCustom, themeMUI } from "../config/styles";

const BaseTemplate = () => {
  const [currentTheme] = useState("initial");

  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <ThemeProvider theme={themeCustom[currentTheme]}>
          <GlobalStyles />

          <Outlet />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default BaseTemplate;
