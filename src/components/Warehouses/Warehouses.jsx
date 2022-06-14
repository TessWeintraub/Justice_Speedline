import React, {useState} from 'react';
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import classes from "./Warehouses.module.css";
import {users} from "../../mockdata/warehouses";

const Warehouses = () => {
  const [warehouse, setWarehouse] = useState(users[0])


  return (
    <section className={classes.warehouses}>
      <NavBar onClick={() => setWarehouse(users[0])}/>
      <section className={classes.warehouses_content}>
        <Header/>
        <Main data={warehouse} setWarehouse={setWarehouse}/>
      </section>
    </section>

  );
};

export default Warehouses;