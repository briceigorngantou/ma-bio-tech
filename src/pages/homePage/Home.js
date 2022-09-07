import React from "react";
import { Grid, Typography } from "@mui/material";

import Section2 from "./Section2";
import Footer from "./../../components/footer/Footer";
import Navbar from './../../components/navbar/Navbar';

const Home = ({ props }) => {
  return (
    <>
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <Typography>Home Page</Typography>
      </Grid>
      <Grid>
        <Section2 />
      </Grid>
      <Footer />
    </>
  );
};
export default Home;
