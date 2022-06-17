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
    children,
    btnDisabled
  }
) => {
const styleProps ={
    display: children && 'flex',
    alignItems: children && 'center',
    fontSize: fontSize,
    color: color,
    padding: children ? '0 0' : padding,
    background: background,
    fontWeight: fontWeight
}


  return (
    <button
      className={classes.button}
      onClick={onClick}
      disabled={btnDisabled && btnDisabled}
      style={styleProps}
    >
      {children && children}
      {text}
    </button>
  );
};

export default Button;