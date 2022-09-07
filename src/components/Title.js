import { Grid, Typography } from "@mui/material";

export default function Title({ title, subTitle }) {
  return (
    <Grid flexDirection="column" p={2}>
      <Typography fontSize={28} fontWeight={"bold"} textAlign={"justify"}>
        {title}
      </Typography>
      <Typography fontSize={24} fontWeight={"500"} textAlign={"justify"}>
        {subTitle}
      </Typography>
    </Grid>
  );
}
