import React, {useEffect} from 'react';
import {useState} from "react";
import Input from "../../../UI/Input/Input";
import {Patterns} from "../../../mockdata/validation";
import {useUserContext} from "../../../context/userContext";
import Button from "../../../UI/Button/Button";

const LogIn = () => {
  const {users, setUserAuth} = useUserContext()
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
  const [disabled, setDisabled] = useState(true);

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
          errorBoolean: !Patterns[field].test(e.target.value),
          errorMessage: `${field}  заполнен некорректно`,
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

  const authorization = () => {
    const searchUser = users.length ? users.filter((user) => user.email === fields.email.value && user.password === fields.password.value) : []

    if (!searchUser.length) {
      setFields({
        ...fields,
        email: {
          ...fields.email,
          errorMessage: 'Пользователь не найден',
          errorBoolean: true
        }
      })
      return
    }

    setUserAuth(...searchUser)
  }
  return (
    <>
      <Input {...bindInputProps('email')} />
      <Input {...bindInputProps('password')} />
      <Button text='Sign up' btnDisabled={disabled} onClick={() => authorization()}/>
    </>
  );
};;

export default LogIn;