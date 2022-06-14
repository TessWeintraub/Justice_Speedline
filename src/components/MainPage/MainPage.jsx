import React, {useState} from 'react';
import Header from "./Header/Header";
import Button from "../../UI/Button/Button";
import Main from "./Main/Main";
import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import classes from "./MainPage.module.css";

const MainPage = () => {

    const[isModal,setIsModal] = useState({
        log_in: false,
        sign_up: false
    })

    const modalUpdate = (keys,boolean,keys2) => {
        setIsModal({
            ...isModal,
            [keys]: boolean,
            [keys2 && keys2]: !boolean
        })
    }
    return (
        <div className={classes.mainPage}>
            <div className={classes.wrapper}>
                <Header logIn={()=>modalUpdate('log_in',true)} signUp={()=>modalUpdate('sign_up',true)}>
                        <Button text={'Home'} onClick={()=>console.log(true)} padding={'1rem 1.25rem'} color={'#3E4C59B2'} background={'transparent'} fontWeight={400}/>
                        <Button text={'Service'} onClick={()=>console.log(true)} padding={'1rem 1.25rem'} color={'#3E4C59B2'} background={'transparent'} fontWeight={400}/>
                        <Button text={'Clients'} onClick={()=>console.log(true)} padding={'1rem 1.25rem'} color={'#3E4C59B2'} background={'transparent'} fontWeight={400}/>
                        <Button text={'Contact'} onClick={()=>console.log(true)} padding={'1rem 1.25rem'} color={'#3E4C59B2'} background={'transparent'} fontWeight={400}/>
                </Header>
                <Main/>
            </div>
            {isModal.sign_up && (
                <Modal
                    title={'Sign up'}
                    buttonOnclick={(e) => console.log(e.target)}
                    buttonText={'Sign up'}
                    close={() => modalUpdate('sign_up', false)}
                    setIsModal={() => modalUpdate('sign_up', false, 'log_in')}
                >

                    <Input label={'Email'} placeholder={'Enter a email'} onChange={(e) => console.log(e.target.value)}/>
                    <Input label={'Password'} placeholder={'Enter password'}
                           onChange={(e) => console.log(e.target.value)}/>
                </Modal>
            )
            }
            {
                isModal.log_in
                &&
                <Modal title={'Log in'}
                       buttonOnclick={(e)=>console.log(e.target)}
                       buttonText={'Log in'}
                       close={()=>modalUpdate('log_in',false)}
                       setIsModal={()=>modalUpdate('log_in',false, 'sign_up')}
                >
                    <Input label={'Email'} placeholder={'Enter a email'} onChange={(e)=>console.log(e.target.value)}/>
                    <Input label={'Password'} placeholder={'Enter password'} onChange={(e)=>console.log(e.target.value)}/>
                </Modal>
            }
        </div>
    );
};

export default MainPage;