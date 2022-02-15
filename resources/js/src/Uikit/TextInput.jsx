import React from "react";
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
    return (
        <TextField 
            type="text"
            name={props.name}
            value={props.value}
            className="mt-1 block w-full"
            autoComplete={props.type}
            isFocused={true}
            handleChange={props.onHandleChange}
        />
    )
}

export default TextInput;