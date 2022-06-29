import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../context/userContext";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import classes from "./Warehouses.module.css";
import axios from "axios";
import Cookies from "js-cookie";


const Warehouses = () => {
  const {userAuth,  activeWarehouse} = useUserContext()
  const [data, setData] = useState(userAuth)

  useEffect( ()=>{
    if (!userAuth){
      axios.get('http://localhost:5000/api/users/users',{
        headers: {Authorization: `${Cookies.get("TOKEN")}`},
      }).then(res => setData(res.data))
        .catch(e => console.log(e))
    }
  },[])

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
        {data && <Main data={data} setWarehouse={setData}/>}
      </section>
    </section>

  );
};

export default Warehouses;