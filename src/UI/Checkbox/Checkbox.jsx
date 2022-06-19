import React, {useEffect, useState} from 'react';
import classes from "./Checkbox.module.css";

const Checkbox = ({isChecked, onClickCheckbox, idCheckbox, data}) => {
  return (
    <>
      <input type="checkbox" id={`${idCheckbox}_checkbox`} className={classes.checkbox}
             onClick={e => onClickCheckbox(e.target, data, idCheckbox)} checked={isChecked}/>
      <label htmlFor={`${idCheckbox}_checkbox`}></label>
    </>
  );
};

export default Checkbox;