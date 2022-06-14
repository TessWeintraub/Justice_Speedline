import React from 'react';
import Button from "../../../UI/Button/Button";
import {logoIcon} from "../../../mockdata/icons";
import classes from "./Header.module.css";

const Header = ({children,logIn,signUp}) => {
    return (
        <header className={classes.header}>
            <div>
                {logoIcon}
                {children}
            </div>
            <div>
                <Button text={'Log in'} onClick={logIn} padding={'1rem 2.0675rem'} color={'#EE950F'} background={'transparent'}/>
                <Button text={'Sign up'} onClick={signUp} padding={'1rem 2.0675rem'} />
            </div>
        </header>
    );
};

export default Header;