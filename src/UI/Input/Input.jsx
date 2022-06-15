import React, {useEffect, useState} from 'react';
import classes from "./Input.module.css";

const Input = ({
                 label,
                 placeholder,
                 onChange,
                 regular,
                 errorMessage
               }
) => {
  const [errorValid, setErrorValid] = useState(false)
  const Patterns = regular


  useEffect(() => {
    console.log(errorValid)
  }, [errorValid])
  return (
    <label className={classes.label}>
      {label}
      <input
        onChange={onChange}
        onBlur={ (e) => setErrorValid(!Patterns.test(e.target.value))}
        className={classes.input}
        placeholder={placeholder}
        name={label.toLowerCase()}
        data-input
      />
      {errorMessage && <p className={classes.errorMessage}
                          style={{display: errorMessage && errorValid ? 'block' : 'none'}}>{errorMessage}</p>}
    </label>
  );
};

export default Input;