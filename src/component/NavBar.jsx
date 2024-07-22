import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];
const pages = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "loan",
    path: "/Login",
  },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "Linear-gradient(to right bottom, lightgreen,black)",
        width: "100%",
        mt: "0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            // border: 2,
            // borderColor: "red",
            justifyContent: "space-between",
          }}
        >
          <Container
            sx={{
              display: { xs: "none", md: "flex" },
              // border: 2,
              // borderColor: "red",
              width: 300,
              mr: 0,
              ml: 0,
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TrustFlick
            </Typography>
          </Container>
          {/* //herere */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TrustFlick
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              // border: 2,
              // borderColor: "orange",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "flex", md: "none" },
              // border: 2,
              // borderColor: "green",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <div className="joel-noblez">
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  // border: 2,
                  // borderColor: "yellow",
                  "& .MuiPaper-root": {
                    // borderColor: "red",
                    // border: 2,
                    height: 400,
                  },
                }}
              >
                <div className="joel">
                  <List>
                    {pages.map((page, index) => (
                      <ListItem
                        button
                        key={index}
                        component={Link}
                        to={page.path}
                        onClick={handleCloseNavMenu}
                        sx={{
                          /*border: 2, borderColor: "black",*/ width: 500,
                          fontSize: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        <ListItemText primary={page.text} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
