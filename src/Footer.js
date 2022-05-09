//import { makeStyles } from "@mui/styles";
import {
    Typography
} from "@mui/material";

//const useStyles = makeStyles({
//    footer: {
//        width: "100%",
//        marginTop: "10px",
//    }
//})

const Footer = () => {
    //const classes = useStyles();  //className={classes.footer}>
    return (
        <div> 
            <Typography align="center" variant="body1" color="primary">©2022 Yuma Arakawa. All rights reserved.</Typography>
        </div>
    );
}

export default Footer