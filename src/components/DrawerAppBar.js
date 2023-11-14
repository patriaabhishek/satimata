import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  ["Home", "/"],
  ["Pooja Samagri", "/poojasamagri"],
  ["Pooja Vidhi", "/poojavidhi"],
  ["History", "/history"],
  ["How to Reach", "/howtoreach"],
  // ["Places Nearby", "/placesnearby"],
  ["Contact", "/contact"],
  ["Disclaimer", "/disclaimer"],
];
// console.log(navItems);
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Jahazpur ki Satimata
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton href={item[1]} sx={{ textAlign: "center" }}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Jahazpur ki Satimata
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item[0]} href={item[1]} sx={{ color: "#fff" }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <Typography>
          Provident repellat similique cupiditate ipsam, et tempore cumque quod!
          Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate
          iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid
          inventore commodi reprehenderit rerum reiciendis! Quidem alias
          repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit
          quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at
          nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in
          pariatur impedit, nam facilis libero dolorem dolores sunt inventore
          perferendis, aut sapiente modi nesciunt.
        </Typography> */}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
