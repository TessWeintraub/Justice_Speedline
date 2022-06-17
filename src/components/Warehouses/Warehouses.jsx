import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import classes from "./Warehouses.module.css";
import {useUserContext} from "../../context/userContext";

const Warehouses = () => {
  const {userAuth,setUsersAuth} = useUserContext()
  const [warehouse, setWarehouse] = useState(userAuth)

  useEffect(()=>{setWarehouse(userAuth)},[userAuth])

  return (
    <section className={classes.warehouses}>
      <NavBar onClick={() => setWarehouse(userAuth)}/>
      <section className={classes.warehouses_content}>
        <Header/>
        <Main data={warehouse} setWarehouse={setWarehouse}/>
      </section>
    </section>

  );
};

export default Warehouses;