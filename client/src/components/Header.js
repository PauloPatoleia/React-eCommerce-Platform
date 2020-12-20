import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Grid container alignItems={"center"}>
          <Grid item xs={1} lg={1}></Grid>
          <Grid item xs={2} lg={2}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                LOGO
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={2} sm={5} md={5} lg={6}></Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Button color="inherit" startIcon={<PersonIcon />}>
              Cart
            </Button>
            <Button color="inherit" startIcon={<ShoppingCartIcon />}>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </AppBar>
    </header>
  );
}
