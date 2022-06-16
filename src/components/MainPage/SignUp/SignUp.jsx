import React, {useEffect,useState} from 'react';
import {useUserContext} from "../../../context/userContext";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import {Patterns} from "../../../mockdata/validation";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const SignUp = () => {
    const [fields, setFields] = useState({
        email: {
            value: '',
            errorMessage: 'Email заполнен не верно',
            errorBoolean: false,
            touched: false,
        },
        password: {
            value: '',
            errorMessage: 'Пароль заполнен не верно',
            errorBoolean: false,
            touched: false,
        },
    })

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const {email, password} = fields;
        if (!email.touched && !password.touched) return

        const isValid = !(!email.errorBoolean && !password.errorBoolean && !!email.value && !!password.value)
        setDisabled(isValid)
    }, [fields])

    const bindInputProps = (field) => {
        return {
            label: field,
            type: field,
            placeholder: `Enter a ${field}`,
            onBlur: (e) => setFields({
                ...fields,
                [field]: {
                    ...fields[field],
                    touched: true,
                    errorBoolean: !Patterns[field].test(e.target.value)
                }
            }),
            value: fields[field].value,
            onChange: (e) => setFields({
                    ...fields,
                    [field]: {
                        ...fields[field],
                        value: e.target.value
                    }
            }),
            errorMessage: fields[field].errorBoolean && fields[field].errorMessage
        }
    }

    return (
        <>
            <Input {...bindInputProps('email')} />
            <Input {...bindInputProps('password')} />
            <Button text='Sign up' btnDisabled={disabled}/>
        </>
    );
};

export default SignUp;