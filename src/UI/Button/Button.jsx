import React from 'react';
import classes from "./Button.module.css";

const Button = (
    {
        onClick,
        text,
        padding,
        fontSize,
        color,
        background,
        fontWeight,
        children
    }
) => {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            style={
                {
                    display: children && 'flex',
                    alignItems: children && 'center',
                    fontSize: fontSize,
                    color: color,
                    padding: children ? '0 0' : padding,
                    background: background,
                    fontWeight: fontWeight
                }
            }
        >
            {children && children}
            {text}
        </button>
    );
};

export default Button;