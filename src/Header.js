import React from "react";
//import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Typography,
  Stack,
} from "@mui/material";

//const useStyles = makeStyles((theme) => ({
//  root: {
//    flexGrow: 1,
//  },
//  appbar: {
//    alignItems: "center",
//  },
//  title: {
//    flexGrow: 1,
//    padding: theme.spacing(1)
//  }
//}));

export default function Header() {
  //const classes = useStyles(); <className={classes.appbar}>とclassName={classes.title}を抜いた
  return (
    <AppBar position="static" sx={{backgroundColor:"primary.dark"}}>
        <Typography variant="h4">
            Duopoly
        </Typography>
    </AppBar>
  );
}