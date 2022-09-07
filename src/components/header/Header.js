import React from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { PhoneOutlined, EmailOutlined } from "@mui/icons-material";
import DirectionsIcon from "@mui/icons-material/Directions";

import logo from "../../assets/logo.jpg";
import {
  email,
  phoneNumber,
  address,
  twitter,
  facebook,
} from "../../config/data";
function TopHeader() {
  const navigate = useNavigate();

  // Function to redirect to home page
  const redirectToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        maxHeight: 420,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
      p={2}
    >
      <Grid
        sx={{
          m: 1,
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        onClick={redirectToHomePage}
      >
        <img
          src={logo}
          alt="Logo Ma-Bio-Tech"
          style={{ width: 150, opacity: 0.4 }}
        />
      </Grid>
      <Grid
        item
        container
        xs={9}
        sx={{ justifyContent: "center", alignItems: "center" }}
        md={9}
        spacing={1}
      >
        <Grid item p={2}>
          <strong>
            <Chip
              p={2}
              icon={<DirectionsIcon />}
              variant="filled"
              label={address}
              href={"http://maps.google.com/?q=" + address}
              target="_blank"
              component="a"
              clickable
            />
          </strong>
        </Grid>
        <Grid item p={2}>
          <strong>
            <Chip
              p={2}
              icon={<PhoneOutlined />}
              label={phoneNumber}
              href={"tel:" + phoneNumber}
              component="a"
              clickable
            />
          </strong>
        </Grid>
        <Grid item p={2}>
          <strong>
            <Chip
              p={2}
              icon={<TwitterIcon />}
              label={twitter}
              href={"twitter:" + twitter}
              component="a"
              target="_blank"
              clickable
            />
          </strong>
        </Grid>
        <Grid item p={2}>
          <strong>
            <Chip
              p={2}
              icon={<FacebookIcon />}
              label={facebook}
              href={"facbook:" + facebook}
              component="a"
              target="_blank"
              clickable
            />
          </strong>
        </Grid>
        <Grid item p={2}>
          <strong>
            <Chip
              p={2}
              icon={<EmailOutlined />}
              label={email}
              href={"mailTo:" + email}
              component="a"
              clickable
            />
          </strong>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TopHeader;
