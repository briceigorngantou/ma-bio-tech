import React from "react";
import { Grid } from "@mui/material";

import CardComponent from "../../components/card/CardComponent";

const Section2 = () => {
  return (
    <Grid
      sx={{ px: { xs: 2, md: 5 }, pb: { xs: 2, md: 3 } }}
      container
      p={2}
      justifyContent="center"
    >
      <Grid sx={{ margin: 2 }}>
        <CardComponent
          title={"Un service de qualite"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
      </Grid>
      <Grid sx={{ margin: 2 }}>
        <CardComponent
          title={"Un service de qualite"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
      </Grid>
      <Grid sx={{ margin: 2 }}>
        <CardComponent
          title={"Un service de qualite"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
      </Grid>
    </Grid>
  );
};

export default Section2;
