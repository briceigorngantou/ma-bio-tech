import React from "react";
import { Grid, Typography } from "@mui/material";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Service = ({ props }) => {
  return (
    <Grid>
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <Typography>Service Page</Typography>
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Service;
