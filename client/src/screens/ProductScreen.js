import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import ReadOnlyStarRating from "../components/ReadOnlyStarRating";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../actions/productDetails";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ProductScreen({ history, match }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, [dispatch, match]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

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

      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" message={error} />
      ) : (
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
                  {product.numReviews || 0} reviews
                </Typography>
              </Grid>
            </Grid>
            <br></br>

            <Typography variant="body2" display="block" gutterBottom>
              {product.description}
            </Typography>

            {product.countInStock > 0 ? (
              <>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={quantity}
                    onChange={handleQuantityChange}
                  >
                    {[...Array(product.countInStock).keys()].map((num) => (
                      <MenuItem key={num + 1} value={num + 1}>
                        {num + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br></br>
              </>
            ) : (
              <>
                <br></br>
                <Typography variant="button" display="block" gutterBottom>
                  Out of stock
                </Typography>
              </>
            )}

            <Button
              variant="contained"
              color="default"
              disabled={product.countInStock <= 0}
              disableElevation
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      )}

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
