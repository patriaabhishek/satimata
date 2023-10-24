import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#F0813C",
    },
    secondary: {
      main: "#D94F4E",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
