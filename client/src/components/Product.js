import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import ReadOnlyStarRating from "./ReadOnlyStarRating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: 140,
  },
  price: {
    fontWeight: "bold",
  },
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <div>
      <MenuItem component={Link} to={`/products/${props.product._id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ height: "220px" }}
              component="img"
              image="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_teaser_05.jpg"
            ></CardMedia>

            <CardContent>
              <Typography variant="subtitle2" gutterBottom noWrap>
                {props.product.name}
              </Typography>

              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid style={{ marginRight: "10px" }} item xs={12} sm={4}>
                  <ReadOnlyStarRating value={props.product.rating} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {props.product.numReviews} reviews
                  </Typography>
                </Grid>
              </Grid>

              <Typography
                className={classes.price}
                variant="subtitle1"
                gutterBottom
              >
                {props.product.price}$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MenuItem>
    </div>
  );
}
