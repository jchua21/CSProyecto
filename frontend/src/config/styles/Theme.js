import { createTheme } from "@mui/material";

//COLOURS
const initial = {
  //AUTH
  white: "#fff",
  gray_lighten: "#f0f0f0",
  gray_medium: "#acacac",
  gray_darken: "#444",
  gray_black: "#333",
  primary_main: "#009688",
  primary_light: "#33ab9f",
  primary_dark: "#00695f",
  secondary_main: "#1de9b6",
  secondary_light: "#4aedc4",
  secondary_dark: "#14a37f",

  //DASHBOARD
  border_color: "#e6e5e5",
  toggle_color: "#DDD",
  black_light_color: "#707070",
};

const themeCustom = {
  initial,
  //dark
};

// just add more variables to the default theme of MUI
const themeMUI = createTheme();

export { themeMUI, themeCustom };
