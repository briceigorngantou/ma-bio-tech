import React from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
} from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

const CardComponent = ({ icon, title, text }) => {
  return (
    <Card sx={{ maxWidth: 350 }} >
      <CardContent>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AddOutlined sx={{ paddingTop: 2, paddingBottom: 2 }} />
          <Typography
            sx={{ padding: 2, fontSize: 18, fontWeigth: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
        <Grid>
          <Typography>{text}</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
