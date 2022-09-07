import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

import {Pages} from "../../config/data"


function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();

  // Use context
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageSelected = (redirectTo) => {
    navigate(redirectTo);
  };

  // Get the current page
  useLayoutEffect(() => {
    const pathName = window.location.pathname;
    const filter = Pages.findIndex((page) => page.link === pathName);
    setcurrentPage(filter);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main,opacity:0.7}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              }}
            >
              {Pages.map((page, index) => {
                return (
                  <MenuItem
                    key={page.name}
                    onClick={(e) => {
                      handleCloseNavMenu(e);
                      handlePageSelected(page.link);
                    }}
                  >
                    <Typography
                      color={
                        currentPage === index && theme.palette.primary.main
                      }
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              textAlign: "left",
            }}
          >
            {Pages[currentPage].name}
          </Typography>
          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {Pages.map((page, index) => (
              <Button
                key={page.name}
                onClick={(e) => {
                  handleCloseNavMenu(e);
                  handlePageSelected(page.link);
                }}
                sx={{
                  my: 2,
                  backgroundColor: currentPage === index && "#fff",
                  color:
                    currentPage === index ? theme.palette.primary.main : "#fff",
                  display: "block",
                  fontSize: 16,
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Grid>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
