import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33a3d3",
      main: "#008dc9",
      dark: "#33a3d3",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#9ccc65",
      main: "#8bc34a",
      dark: "#7cb342",
      contrastText: "#ffffff",
    },
    third: {
      light: "#9ccc65",
      main: "##8e44ad",
      dark: "#7cb342",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "SharpSansDispNo1-Medium",
    fontSize: 14,
  },
});

export default theme;
