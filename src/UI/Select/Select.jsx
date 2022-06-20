import React from 'react';
import classes from "./Select.module.css";

const Select = () => {
    return (
        <label className={classes.select}>
            <input type='text' list='datalist' placeholder='Filter by' autoComplete="off" spellCheck="off"/>
            <datalist id='datalist'>
                <option>1</option>
            </datalist>
        </label>
    );
};

export default Select;