import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Product from "../components/Product";
import SideNavigation from "../components/SideNavigation";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
          {loading ? (
            <Loader />
          ) : error ? (
            <Message severity="error" message={error} />
          ) : (
            <Grid spacing={4} container direction="row" alignItems="flex-start">
              {products.map((product) => {
                return (
                  <Grid key={product._id} item xs={12} md={6} lg={4}>
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
