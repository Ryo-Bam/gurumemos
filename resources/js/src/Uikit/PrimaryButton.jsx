import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffb20d",
    }
})

const PrimaryButton = (props) => {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained" onClick={props.onClick} type="submit">
        {props.label}
    </Button>
        )
}

export default PrimaryButton;