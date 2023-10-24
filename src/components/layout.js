import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DrawerAppBar from "./DrawerAppBar";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar></DrawerAppBar>
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            {/* {pageTitle} */}
            {children}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
