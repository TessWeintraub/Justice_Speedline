import React from 'react';
import classes from "./Input.module.css";

const Input = ({
    label,
    placeholder,
    errorMessage,
    onChange
               }
    ) => {return (
        <label className={classes.label}>
            {label}
            <input onChange={onChange} className={classes.input} placeholder={placeholder}/>
            {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
        </label>
    );
};

export default Input;