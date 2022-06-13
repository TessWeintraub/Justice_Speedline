import React from 'react';
import logo from '../../../assets/logo/Logo.svg'
import classes from "./NavBar.module.css";
import Button from "../../../UI/Button/Button";
import {iconChat,iconChart,iconHome,iconUser,iconCategory,iconDocument} from "../../../assets/NavBar/icons";


const NavBar = () => {
    return (
        <nav className={classes.navBar}>
            <img src={logo} alt='logo' className={classes.navBar_logo}/>
            <ul className={classes.navBar_ul}>
                <li><Button text='Home' color='#3E4C59B2' background={'transparent'}>{iconHome()}</Button></li>
                <li><Button text='Warehouses' color='#3E4C59B2' background={'transparent'}>{iconDocument()}</Button></li>
                <li><Button text='Accounts' color='#3E4C59B2' background={'transparent'}>{iconCategory()}</Button></li>
                <li><Button text='Cards' color='#3E4C59B2' background={'transparent'}>{iconChart()}</Button></li>
                <li><Button text='Contacts' color='#3E4C59B2' background={'transparent'}>{iconUser()}</Button></li>
                <li><Button text='Chat' color='#3E4C59B2' background={'transparent'}>{iconChat()}</Button></li>
            </ul>
        </nav>
    );
};

export default NavBar;