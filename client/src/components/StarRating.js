import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

export default function StarRating(props) {
  let stars = [];

  const renderStars = (rating) => {
    for (let index = 1; index < 6; index++) {
      stars.push(
        rating > index ? (
          <StarIcon style={{ fontSize: 14 }} key={index} />
        ) : rating >= index - 0.5 ? (
          <StarHalfIcon style={{ fontSize: 14 }} key={index} />
        ) : (
          <StarBorderIcon style={{ fontSize: 14 }} key={index} />
        )
      );
    }
  };

  renderStars(props.rating);

  return stars;
}
