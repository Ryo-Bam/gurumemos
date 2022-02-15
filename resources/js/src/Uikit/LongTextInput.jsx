import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
}));

const LongTextInput = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField 
                id={props.id}
                label={props.label}
                style={{ margin: 8 }}
                placeholder={props.placeholder}
                margin="normal"
                rows={props.rows}
                multiline={props.multiline}
                onChange={props.onChange}
                fullWidth
                value={props.value}
                name={props.name}
            />
        </div>
    )
}

export default LongTextInput;