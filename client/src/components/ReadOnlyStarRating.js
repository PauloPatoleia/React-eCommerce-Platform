import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function ReadOnlyStarRating(props) {
  console.log(props.value);
  return (
    <div>
      <Rating
        size="small"
        name="read-only"
        value={props.value || 0}
        readOnly
        precision={0.5}
      />
    </div>
  );
}
