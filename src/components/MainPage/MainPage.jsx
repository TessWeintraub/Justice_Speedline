import React, { useState} from 'react';
import Header from "./Header/Header";
import Button from "../../UI/Button/Button";
import Main from "./Main/Main";
import Modal from "../../UI/Modal/Modal";
import classes from "./MainPage.module.css";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";

const MainPage = () => {
    const [isModal, setIsModal] = useState('')





    return (
        <section className={classes.mainPage}>
            <section className={classes.wrapper}>
                <Header logIn={() => setIsModal('Log In')} signUp={() => setIsModal('Sign Up')}>
                    <Button text={'Home'}
                            padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'}
                            fontWeight={400}/>
                    <Button text={'Service'}
                            padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'}
                            fontWeight={400}/>
                    <Button text={'Clients'}
                            padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'}
                            fontWeight={400}/>
                    <Button text={'Contact'}
                            padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'}
                            fontWeight={400}/>
                </Header>
                <Main/>
            </section>




            {isModal &&
                < Modal
                    title={isModal}
                    buttonText={isModal}
                    close={() => setIsModal('')}
                >
                    {isModal === 'Sign Up' && <SignUp/>}
                    {isModal === 'Log In' && <LogIn/>}
                </Modal>
            }
        </section>
    );
};

export default MainPage;