import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Container, Grid, Typography } from "@material-ui/core";

export default function ReadOnlyStarRating(props) {
  return (
    <div>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid style={{ marginRight: "10px" }} item xs={12} sm={4}>
          {" "}
          <Rating
            size="small"
            name="read-only"
            value={props.value}
            readOnly
            precision={0.5}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <Typography variant="caption" display="block" gutterBottom>
            {props.numReviews} reviews
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
