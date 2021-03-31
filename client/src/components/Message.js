import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Message(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={props.severity}>
        {props.message || "Something went terribly wrong"}
      </Alert>
    </div>
  );
}
