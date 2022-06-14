import React from 'react';
import Button from "../../UI/Button/Button";
import {homeIcon,userIcon,documentIcon,categoryIcon,chatIcon,chartIcon} from "../../mockdata/icons";
import classes from "./NavBar.module.css";
import logo from '../../assets/svg/logo.svg'


const NavBar = ({onClick}) => {
    return (
        <nav className={classes.navBar}>
            <img src={logo} alt='logo' className={classes.navBar_logo}/>
            <ul className={classes.navBar_ul}>
                <li>
                    <Button text='Home' color='#3E4C59B2' background={'transparent'}>
                        {homeIcon}
                    </Button>
                </li>
                <li>
                    <Button text='Warehouses' color='#3E4C59B2' background={'transparent'} onClick={onClick}>
                        {documentIcon}
                    </Button>
                </li>
                <li>
                    <Button text='Accounts' color='#3E4C59B2' background={'transparent'}>
                        {categoryIcon}
                    </Button>
                </li>
                <li>
                    <Button text='Cards' color='#3E4C59B2' background={'transparent'}>
                        {chartIcon}
                    </Button>
                </li>
                <li>
                    <Button text='Contacts' color='#3E4C59B2' background={'transparent'}>
                        {userIcon}
                    </Button>
                </li>
                <li>
                    <Button text='Chat' color='#3E4C59B2' background={'transparent'}>
                        {chatIcon}
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;