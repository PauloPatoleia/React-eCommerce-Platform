import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import ReadOnlyStarRating from "../components/ReadOnlyStarRating";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Link from "@material-ui/core/Link";

export default function ProductScreen() {
  var product = {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  };

  return (
    <>
      <Link href="/" underline="none" color="inherit">
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <ArrowBackIosIcon color="default" />
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            style={{}}
          >
            Go back
          </Typography>
        </div>
      </Link>

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

        <Grid item lg={4}>
          <Typography style={{ marginBottom: 30 }} variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Price: {product.price}$
          </Typography>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid style={{ marginRight: "10px" }} item xs={12} sm={3}>
              <ReadOnlyStarRating value={product.rating} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="caption" display="block" gutterBottom>
                {product.numReviews} reviews
              </Typography>
            </Grid>
          </Grid>
          <br></br>

          <Typography variant="body2" display="block" gutterBottom>
            {product.description}
          </Typography>
          <br></br>

          <Button variant="contained" color="defalt" disableElevation>
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
