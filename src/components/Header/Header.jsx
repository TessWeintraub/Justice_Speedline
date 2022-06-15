import React from 'react';
import classes from "./Header.module.css";
import Search from "../../UI/Search/Search";
import {profileIcon, settingIcon, notificationIcon} from "../../mockdata/icons";

const Header = () => {

    return (
            <header className={classes.header}>
                <Search/>
                <nav className={classes.header_nav}>
                    {profileIcon}
                    {settingIcon}
                    {notificationIcon}
                </nav>
            </header>
    );
};

export default Header;