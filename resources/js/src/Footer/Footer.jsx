import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        color: "#444",
        backgroundColor: "#ffb20d",
        width: "100%",
        position: "fixed",
        bottom: 0,
        marginTop: "auto",
        textAlign: "center",
    }
})

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            ©︎2021 RyoInoue
        </div>
    ) 
}

export default Footer;