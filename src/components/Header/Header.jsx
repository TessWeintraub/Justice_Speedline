import React from 'react';
import {useUserContext} from "../../context/userContext";
import Search from "../../UI/Search/Search";
import {profileIcon, settingIcon, notificationIcon} from "../../mockdata/icons";
import classes from "./Header.module.css";

const Header = () => {
  const {setIsAuth} = useUserContext()
    return (
            <header className={classes.header}>
                <Search/>
                <nav className={classes.header_nav}>
                  <span onClick={()=> setIsAuth(false)}>{profileIcon}</span>
                  <span>{settingIcon}</span>
                  <span>{notificationIcon}</span>
                </nav>
            </header>
    );
};

export default Header;