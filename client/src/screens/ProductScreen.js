import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import ReadOnlyStarRating from "../components/ReadOnlyStarRating";
import Box from "@material-ui/core/Box";

export default function ProductScreen() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item lg={6}>
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_teaser_05.jpg"
            fluid
          />
        </Grid>

        <Grid item lg={3}>
          <Typography style={{ marginBottom: 30 }} variant="h6" gutterBottom>
            Airpods Wireless Bluetooth Headphones
          </Typography>
          <Divider></Divider>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <ReadOnlyStarRating name="read-only" value={3.5} readOnly />
          </Box>
        </Grid>

        <Grid item lg={3}>
          add to cart
        </Grid>
      </Grid>
    </>
  );
}
