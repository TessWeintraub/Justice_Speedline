import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../context/userContext";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import classes from "./Warehouses.module.css";

const Warehouses = () => {
  const {userAuth, setUsersAuth, activeWarehouse} = useUserContext()
  const [warehouse, setWarehouse] = useState(userAuth)


  useEffect(()=>activeWarehouse ? setWarehouse(activeWarehouse) : setWarehouse(userAuth),[activeWarehouse])
  // useEffect(() => setUsersAuth(...userAuth,), [warehouse])

  return (
    <section className={classes.warehouses}>
      <NavBar setWarehouse={setWarehouse}/>
      <section className={classes.warehouses_content}>
        <Header/>
        <Main data={warehouse} setWarehouse={setWarehouse}/>
      </section>
    </section>

  );
};

export default Warehouses;