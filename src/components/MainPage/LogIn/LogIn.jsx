import React, {useEffect} from 'react';
import {useState} from "react";
import Input from "../../../UI/Input/Input";
import {Patterns} from "../../../mockdata/validation";

const LogIn = () => {
    const [email, setEmail] = useState({
        value: '',
        errorMessage: 'Email заполнен не верно',
        errorBoolean: false
    })
    const [password, setPassword] = useState({
        value: '',
        errorMessage: 'Пароль заполнен не верно',
        errorBoolean: false
    })



    const updateEmailState = data => {
        setEmail(
            {...email,
                value: data,
                errorBoolean: !Patterns.email.test(data)
            })
    }
    const updatePasswordState = data => {
        setPassword(
            {...password,
                value: data,
                errorBoolean: !Patterns.password.test(data)
            })
    }


    return (
        <>
            <Input
                label='Email'
                placeholder='Enter a email'
                onBlur={e => updateEmailState(e.target.value)}
                errorMessage= {email.errorBoolean && email.errorMessage}
            />
            <Input
                label='Password'
                type='password'
                placeholder='Enter a password'
                onBlur={e => updatePasswordState(e.target.value)}
                errorMessage={password.errorBoolean && password.errorMessage}
            />
        </>
    );
};

export default LogIn;