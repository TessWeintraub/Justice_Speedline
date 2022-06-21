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
                 readOnly,
                 defaultValue
               }
) => {
  return (
    <label className={classes.label}>
      {label}
      <input
        onChange={onChange && onChange}
        onBlur={onBlur && onBlur}
        className={classes.input}
        placeholder={placeholder && placeholder}
        name={name ? name : label.toLowerCase()}
        type={type ? type : 'text'}
        readOnly={readOnly && readOnly}
        defaultValue={defaultValue && defaultValue}
        data-input
      />
      {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
    </label>
  );
};

export default Input;