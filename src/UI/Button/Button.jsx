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
        fontWeight
    }
) => {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            style={
                {
                    fontSize: fontSize,
                    color: color,
                    padding: padding,
                    background: background,
                    fontWeight: fontWeight
                }
            }
        >
            {text}
        </button>
    );
};

export default Button;