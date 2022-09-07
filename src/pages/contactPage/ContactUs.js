import React, { useContext } from "react";
import { Grid } from "@mui/material";

import AppContext from "../../config/AppContext";
import FormInput from "./FormInput";
import Footer from "../../components/footer/Footer";
import GoogleMap from "./GoogleMap";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/Title";

const ContactUs = ({ props }) => {
  const { dataInput } = useContext(AppContext);
  console.log("Les donnes saisies sont:", dataInput);
  return (
    <Grid
      sx={{ direction: { xs: "column", md: "row" } }}
    >
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <Grid>
          <Title
            title={"Laissez nous un message"}
            subTitle={
              "Pour en savoir plus sur nos services. Nous sommes a votre ecoute"
            }
          />
        </Grid>
        <Grid>
          <FormInput />
        </Grid>
        {/* <Grid item container md={5}>
          <GoogleMap />
        </Grid> */}
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};
export default ContactUs;
