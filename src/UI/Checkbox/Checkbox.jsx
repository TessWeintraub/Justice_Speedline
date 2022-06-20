import React, {useEffect, useState} from 'react';
import classes from "./Checkbox.module.css";

const Checkbox = ({isChecked, onChangeCheckbox, idCheckbox, data}) => {
  return (
    <>
      <input type="checkbox" id={`${idCheckbox}_checkbox`} className={classes.checkbox}
             onChange={e => onChangeCheckbox(e.target, data, idCheckbox)} checked={isChecked}/>
      <label htmlFor={`${idCheckbox}_checkbox`}></label>
    </>
  );
};

export default Checkbox;