import React from 'react';
import classes from "./Button.module.css";
import {edit, reverse} from "../../mockdata/icons";

const Button = (
  {
    onClick,
    text,
    padding,
    fontSize,
    color,
    fontWeight,
    children,
    btnDisabled,
  }
) => {
const styleProps ={
    display: children && 'flex',
    alignItems: children && 'center',
    fontSize: fontSize,
    color: color,
    padding: children ? '0 0' : padding,
    background: color && 'transparent',
    fontWeight: fontWeight,
    border: color==='#E55232' ? '1px solid #E55232' : 0
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
      {text==='Move' && reverse}
      {text==='Edit' && edit}
    </button>
  );
};

export default Button;