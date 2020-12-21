import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Grid } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  menuButton: {
    flex: 1,
  },
  title: {
    padding: 0,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar color="transparent" position="static">
        <Container fixed>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={4}>
              <Grid alignItems="center" container justify="flex-start">
                <Toolbar className={classes.title}>
                  <Typography variant="h6">LOGO</Typography>
                </Toolbar>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container justify="flex-end" className={classes.menuButton}>
                <Button color="inherit" startIcon={<PersonIcon />}>
                  Cart
                </Button>
                <Button color="inherit" startIcon={<ShoppingCartIcon />}>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </header>
  );
}
