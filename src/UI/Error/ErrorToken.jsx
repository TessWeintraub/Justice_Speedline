import React, {useEffect} from 'react';
import classes from "./Error.module.css";
import {houseModal} from "../../mockdata/icons";
import Button from "../Button/Button";
import {useUserContext} from "../../context/userContext";

const ErrorToken = () => {
  const {setIsAuth} = useUserContext()

    setTimeout(()=>{
      setIsAuth(false)
    },2000)

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Sorry,token expired</h1>
      {houseModal}
      <p className={classes.option}>Log in again</p>
      <Button text='Continue' onClick={()=>setIsAuth(false)}/>
    </div>
  );
};

export default ErrorToken;