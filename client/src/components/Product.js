import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import StarRating from "./StarRating";

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

            <Typography variant="caption" display="block" gutterBottom>
              <StarRating rating={props.product.rating} />{" "}
              {props.product.numReviews} reviews
            </Typography>

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
    </div>
  );
}
