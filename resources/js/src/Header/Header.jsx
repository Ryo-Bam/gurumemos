import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/styles";
// import Dropdown from '../Components/Dropdown';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuBar: {
        backgroundColor: "#ffb20d",
        color: "#444",
        padding: "10px",
        fontFamily: 'Georgia',
    },
    toolBar: {
        margin: '0 auto',
        maxWidth: 1024,
        fontSize: "40px",
        fontWeight: 'bold'
    },
})

const Header = (history) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.menuBar}>
            <Toolbar className={classes.toolBar} onClick={() => history.push('/')}>
            グルメも
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;