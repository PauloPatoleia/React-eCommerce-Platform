import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function ReadOnlyStarRating(props) {
  return (
    <div>
      <Rating
        size="small"
        name="read-only"
        value={props.value}
        readOnly
        precision={0.5}
      />
    </div>
  );
}
