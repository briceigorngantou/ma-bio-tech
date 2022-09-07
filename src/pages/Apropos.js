import React from "react";
import { Grid, Typography } from "@mui/material";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Apropos = ({ props }) => {
  return (
    <Grid>
      <Grid >
        <Navbar />
      </Grid>
      <Grid >
        <Typography>Apropos Page</Typography>
      </Grid>
      <Grid >
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Apropos;
