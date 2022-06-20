import React, {useEffect, useState} from 'react';
import classes from "./Input.module.css";

const Input = ({
                 label,
                 placeholder,
                 onChange,
                 onBlur,
                 errorMessage,
                 name,
                 type,
                 readOnly
               }
) => {


  return (
    <label className={classes.label}>
      {label}
      <input
        onChange={onChange}
        onBlur={onBlur}
        className={classes.input}
        placeholder={placeholder}
        name={name ? name : label.toLowerCase()}
        type={type ? type : 'text'}
        readOnly={readOnly && readOnly}
        data-input
      />
      {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
    </label>
  );
};

export default Input;