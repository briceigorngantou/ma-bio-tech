import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Chip,
  Divider,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { PhoneOutlined, Email } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  twitter,
  facebook,
  email,
  Pages,
  phoneNumber,
} from "../../config/data";
import logo from "../../assets/logo.jpg";

const LinkStyle = {
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  marginTop: 10,
  cursor: "pointer",
  textAlign: "justify",
  fontSize: 16,
};

export default function Footer() {
  const navigate = useNavigate();
  const handlePageSelected = (redirectTo) => {
    navigate(redirectTo);
  };

  return (
    <AppBar position="relative" color="transparent">
      <Toolbar>
        <Grid container>
          <Grid
            item
            container
            sx={{ marginTop: 1, direction: { xs: "column", md: "row" } }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              <img
                src={logo}
                alt="Ma Bio Tech Logo"
                style={{ width: 150, opacity: 0.4 }}
              />
              <Typography md={{ fontSize: 14 }} align="left" width={"100%"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Grid>
            <Grid
              item
              container
              sx={{
                alignItem: "center",
                justifyContent: "center",
                textAlign: "center",
                direction: { xs: "column", md: "row" },
              }}
              xs={12}
              md={6}
            >
              <Grid
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  flexDirection: "column",
                }}
                xs={12}
                md={6}
                item
                container
              >
                <Grid item>
                  <Typography
                    align="justify"
                    sx={{
                      marginBottom: 1,
                      fontSize: 20,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Pages
                  </Typography>
                </Grid>
                <Grid item container direction="column">
                  {Pages.map((links, index) => (
                    <Grid item>
                      <Link
                        key={index}
                        style={LinkStyle}
                        underline="hover"
                        onClick={(e) => {
                          handlePageSelected(links.link);
                        }}
                      >
                        <span style={{ color: "black" }}>{links.name}</span>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              sx={{
                alignItem: "center",
                justifyContent: "center",
                width: "90%",
                direction: { xs: "column", md: "row" },
              }}
              spacing={4}
            >
              <Grid item>
                <Chip
                  icon={<PhoneOutlined />}
                  label={phoneNumber}
                  href={"tel:" + phoneNumber}
                  component="a"
                  clickable
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item>
                <Chip
                  icon={<Email />}
                  label={email}
                  href={"mailTo:" + email}
                  component="a"
                  target="_blank"
                  clickable
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item>
                <Chip
                  icon={<TwitterIcon />}
                  label={twitter}
                  href={"twit:" + twitter}
                  component="a"
                  target="_blank"
                  clickable
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item>
                <Chip
                  icon={<FacebookIcon />}
                  label={facebook}
                  href={"facbook:" + facebook}
                  component="a"
                  target="_blank"
                  clickable
                  sx={{ marginTop: 2 }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item container justifyContent="center" width={"90%"}>
              <Typography
                variant="body1"
                align="center"
                color="inherit"
                sx={{ margin: 2 }}
              >
                &copy;{new Date().getFullYear()} Tout Droit Reservé à &nbsp;
                <strong>
                  <Link href={"https://www.avocat-kamdem.com"} underline="none">
                    Ma-Bio-Tech
                  </Link>
                </strong>
                . Designed by &nbsp;
                <Link underline="none" target="_blank">
                  Brice Ngantou.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
