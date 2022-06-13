import React from 'react';

import logo from '../../../assets/logo/Logo.svg'
import home from '../../../assets/NavBar/Home.svg'
import user from '../../../assets/NavBar/User.svg'
import chat from '../../../assets/NavBar/Chat.svg'
import category from '../../../assets/NavBar/Category.svg'
import document from '../../../assets/NavBar/document.svg'
import chart from '../../../assets/NavBar/Chart.svg'
import classes from "./NavBar.module.css";
import Button from "../../../UI/Button/Button";


const NavBar = () => {
    return (
        <nav className={classes.navBar}>
            <img src={logo} alt='logo' className={classes.navBar_logo}/>
            <ul className={classes.navBar_ul}>
                <li><Button text='Home' color='#3E4C59B2' background={'transparent'} src={home}/></li>
                <li><Button text='Warehouses' color='#3E4C59B2' background={'transparent'} src={document}/></li>
                <li><Button text='Accounts' color='#3E4C59B2' background={'transparent'} src={category}/></li>
                <li><Button text='Cards' color='#3E4C59B2' background={'transparent'} src={chart}/></li>
                <li><Button text='Contacts' color='#3E4C59B2' background={'transparent'} src={user}/></li>
                <li><Button text='Chat' color='#3E4C59B2' background={'transparent'} src={chat}/></li>
            </ul>
        </nav>
    );
};

export default NavBar;