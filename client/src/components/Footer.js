import { Grid } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <Grid container>
      <Grid xs={5}></Grid>
      <Grid xs={2}>
        <footer>Copyright © Your Website 2020</footer>
      </Grid>
      <Grid xs={5}></Grid>
    </Grid>
  );
}
