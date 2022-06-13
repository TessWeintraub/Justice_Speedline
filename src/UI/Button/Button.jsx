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
        src
    }
) => {
    return (
        <button
            className={classes.button}
            onClick={onClick}
            style={
                {
                    display: src && 'flex',
                    alignItems: src && 'center',
                    fontSize: fontSize,
                    color: color,
                    padding: src ? '0 0' : padding,
                    background: background,
                    fontWeight: fontWeight
                }
            }
        >
            {src && <img src={src} alt='icon'/>}
            {text}
        </button>
    );
};

export default Button;