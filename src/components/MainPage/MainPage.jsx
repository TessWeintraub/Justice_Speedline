import React, { useState} from 'react';
import Header from "./Header/Header";
import Button from "../../UI/Button/Button";
import Main from "./Main/Main";
import Modal from "../../UI/Modal/Modal";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import classes from "./MainPage.module.css";

const MainPage = () => {
    const [isModal, setIsModal] = useState('')

    const props = text => {
        return {
            text : text,
            padding: '1rem 1.25rem',
            color: '#3E4C59B2',
            background: 'transparent',
            fontWeight: 400
        }
    }

    return (
        <section className={classes.mainPage}>
            <section className={classes.wrapper}>
                <Header logIn={() => setIsModal('Log In')} signUp={() => setIsModal('Sign Up')}>
                    <Button {...props('Home')}/>
                    <Button {...props('Service')}/>
                    <Button {...props('Clients')}/>
                    <Button {...props('Contact')}/>
                </Header>
                <Main/>
            </section>




            {isModal &&
                <Modal
                    title={isModal}
                    buttonText={isModal}
                    close={() => setIsModal('')}
                >
                    {isModal === 'Sign Up' && <SignUp setModal={setIsModal}/>}
                    {isModal === 'Log In' && <LogIn/>}
                </Modal>
            }
        </section>
    );
};

export default MainPage;