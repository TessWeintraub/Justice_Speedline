import React from 'react';
import classes from "./PurchasingTechnology.module.css";

const PurchasingTechnology = ({setIsCheck, isCheck, defaultChecked}) => {
  const labelAttribute = (letter) => {
    return (
      {
        className: classes.container_content_label,
        style: {color: isCheck.id === `radio_${letter}` && isCheck.checked && '#2B3844'},
        htmlFor: `radio_${letter}`
      }
    )
  }

  const inputAttribute = (letter) => {
    return (
      {
        type: 'radio',
        name: 'purchasingTechnology',
        id: `radio_${letter}`,
        value: `${letter}`,
        onClick: setIsCheck,
        defaultChecked: defaultChecked && defaultChecked === letter && true
      }
    )
  }

  return (
    <div className={classes.container}>
      <p className={classes.container_title}>Purchasing technology</p>
      <div className={classes.container_content}>
        <label {...labelAttribute('A')}>
          A
          <input {...inputAttribute('A')} />
          <span className={classes.container_content_label_checkmark}></span>
        </label>
        <label {...labelAttribute('S')}>
          S
          <input {...inputAttribute('S')}/>
          <span className={classes.container_content_label_checkmark}></span>
        </label>
        <label {...labelAttribute('D')}>
          D
          <input {...inputAttribute('D')}/>
          <span className={classes.container_content_label_checkmark}></span>
        </label>
        <label {...labelAttribute('F')}>
          F
          <input {...inputAttribute('F')}/>
          <span className={classes.container_content_label_checkmark}></span>
        </label>
      </div>
    </div>
  );
};

export default PurchasingTechnology;