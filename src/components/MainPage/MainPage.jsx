import React, {useEffect, useState} from 'react';
import Header from "./Header/Header";
import Button from "../../UI/Button/Button";
import Main from "./Main/Main";
import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import {processingInput, Patterns, registration, authorization} from "../../mockdata/validation";
import classes from "./MainPage.module.css";

const MainPage = () => {
    const [isModal, setIsModal] = useState('')
    const signUp = isModal === 'Sign Up'
    const logIn = isModal === 'Log In'





    return (
        <section className={classes.mainPage}>
            <section className={classes.wrapper}>
                <Header logIn={() => setIsModal('Log In')} signUp={() => setIsModal('Sign Up')}>
                    <Button text={'Home'} onClick={() => console.log(true)} padding={'1rem 1.25rem'} color={'#3E4C59B2'}
                            background={'transparent'} fontWeight={400}/>
                    <Button text={'Service'} onClick={() => console.log(true)} padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'} fontWeight={400}/>
                    <Button text={'Clients'} onClick={() => console.log(true)} padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'} fontWeight={400}/>
                    <Button text={'Contact'} onClick={() => console.log(true)} padding={'1rem 1.25rem'}
                            color={'#3E4C59B2'}
                            background={'transparent'} fontWeight={400}/>
                </Header>
                <Main/>
            </section>




            {isModal &&
                < Modal
                    title={isModal}
                    onSubmit={(e) => logIn && (authorization(e) && setIsModal('')) || signUp && (registration(e)&& setIsModal('Log In'))}
                    buttonText={isModal}
                    close={() => setIsModal('')}
                    setIsModal={() => logIn && setIsModal('Sign Up') || signUp && setIsModal('Log In')}
                >
                    {isModal === 'Sign Up' &&
                        <>
                            <Input label={'Email'} placeholder={'Enter a email'} regular={Patterns.email} errorMessage={'Введите корректный email'}/>
                            <Input label={'Password'} placeholder={'Enter password'} regular={Patterns.password} errorMessage={'Введите корректный пароль'}/>
                        </>
                    }
                    {isModal === 'Log In' &&
                        <>
                            <Input label={'Email'} placeholder={'Enter a email'} regular={Patterns.email}
                                   errorMessage={'Введите корректный email'}/>
                            <Input label={'Password'} placeholder={'Enter password'} regular={Patterns.password}
                                   errorMessage={'Введите корректный пароль'}/>
                        </>
                    }
                </Modal>
            }
        </section>
    );
};

export default MainPage;