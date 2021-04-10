import React, { useState, useEffect } from "react";
import { addProductToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function CartScreen({ match, location, history }) {
  const productId = match.params.id;
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(
    (params) => {
      if (productId) {
        dispatch(addProductToCart(productId, quantity));
      }
    },
    [dispatch, productId, quantity]
  );

  const generateList = () =>
    cartItems.map((cartItem) => {
      return (
        <>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={6} sm={3} lg={2}>
              <img
                src="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_teaser_05.jpg"
                alt={cartItem.name}
                width="100"
              />
            </Grid>
            <Grid item xs={6} sm={3} lg={4}>
              <Typography variant="body1" display="block" gutterBottom>
                {cartItem.name}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} lg={2}>
              <Typography variant="body1" display="block" gutterBottom>
                {cartItem.price}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} lg={2}>
              <FormControl>
                <Select
                  // id="demo-controlled-open-select"
                  onChange={(e) => {
                    dispatch(
                      addProductToCart(cartItem.product, Number(e.target.value))
                    );
                  }}
                  value={cartItem.quantity}
                >
                  {[...Array(cartItem.countInStock).keys()].map((num) => (
                    <MenuItem key={num + 1} value={num + 1}>
                      {num + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3} lg={2}>
              <DeleteOutlineIcon />
            </Grid>
          </Grid>
          <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
        </>
      );
    });

  return (
    <div>
      <Container fixed>
        <Typography style={{ paddingBottom: "40px" }} variant="h4">
          Shopping Cart
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8} lg={8}>
            {generateList()}
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  SUBTOTAL (
                  {cartItems.reduce(
                    (accumulator, cartItem) => accumulator + cartItem.quantity,
                    0
                  )}
                  ) ITEMS
                </Typography>

                <Typography variant="button" display="block" gutterBottom>
                  {cartItems
                    .reduce(
                      (accumulator, cartItem) =>
                        accumulator + cartItem.price * cartItem.quantity,
                      0
                    )
                    .toFixed(2)}
                </Typography>
              </CardContent>

              <Divider />
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  PROCEED TO CHECKOUT
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
