import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import products from "../products";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <>
      <Container fixed maxWidth="md">
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
      </Container>
    </>
  );
}
