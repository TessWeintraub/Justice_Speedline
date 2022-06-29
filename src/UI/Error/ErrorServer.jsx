import React from 'react';
import Button from "../Button/Button";
import {houseModal} from "../../mockdata/icons";
import classes from "./Error.module.css";

const ErrorServer = ({btnOnClick}) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Server not available</h1>
      {houseModal}
      <p className={classes.option}>Please try again later</p>
      <Button text='Continue' onClick={btnOnClick}/>
    </div>
  );
};

export default ErrorServer;