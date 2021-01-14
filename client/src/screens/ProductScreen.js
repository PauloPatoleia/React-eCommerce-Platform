import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import ReadOnlyStarRating from "../components/ReadOnlyStarRating";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductScreen({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`/api/products/${match.params.id}`).then(function (response) {
      setProduct(response.data);
    });
  }, [match]);

  return (
    <>
      <Button component={Link} to="/">
        <div style={{ display: "flex" }}>
          <ArrowBackIosIcon />
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            style={{}}
          >
            Go back
          </Typography>
        </div>
      </Button>

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

          <Button variant="contained" color="default" disableElevation>
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
