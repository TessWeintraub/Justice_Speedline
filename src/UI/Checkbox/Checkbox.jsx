import React from 'react';
import classes from "./Checkbox.module.css";

const Checkbox = ({onClick,idCheckbox}) => {
    return (
        <>
            <input type="checkbox" className={classes.checkbox} id={idCheckbox} onClick={onClick}/>
            <label htmlFor={idCheckbox}></label>
        </>
    );
};

export default Checkbox;