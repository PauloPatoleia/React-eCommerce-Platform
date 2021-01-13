import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import SideNavigation from "../components/SideNavigation";
import axios from "axios";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("api/products").then(function (response) {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item lg={2}>
          <SideNavigation></SideNavigation>
        </Grid>

        <Grid item lg={10}>
          <Typography style={{ marginBottom: 30 }} variant="h5" gutterBottom>
            LATEST PRODUCTS
          </Typography>
          <Grid spacing={4} container direction="row" alignItems="flex-start">
            {products.map((product) => {
              return (
                <Grid key={product._id} item xs={12} md={6} lg={4}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
