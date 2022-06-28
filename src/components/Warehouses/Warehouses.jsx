import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../context/userContext";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import classes from "./Warehouses.module.css";


const Warehouses = () => {
  const {userAuth,  activeWarehouse} = useUserContext()
  const [data, setData] = useState(userAuth)

  useEffect(()=>
  {
    activeWarehouse
      ?
      setData(activeWarehouse)
      :
      setData(userAuth)
  }, [activeWarehouse])

  return (
    <section className={classes.warehouses}>
      <NavBar setWarehouse={setData}/>
      <section className={classes.warehouses_content}>
        <Header/>
        <Main data={data} setWarehouse={setData}/>
      </section>
    </section>

  );
};

export default Warehouses;