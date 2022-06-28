import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useUserContext} from "../../../context/userContext";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {logInInitStat} from "../../../assets/utilits/logIn";
import axios from "axios";

const LogIn = () => {

  const {users, setUserAuth, setIsAuth} = useUserContext()
  const [fields, setFields] = useState(logInInitStat)
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {
    const {email, password} = fields;
    if (!email.touched && !password.touched) return
    const isValid = !(!email.errorBoolean && !password.errorBoolean && !!email.value && !!password.value)
    setDisabled(isValid)
  }, [fields])


  const authorization = async () => {
    const user = {
      email: fields.email.value,
      password: fields.password.value
    }

    try {
      const request = await axios.post('http://localhost:5000/api/auth/login', user)


        // setUserAuth(request.data)
        // navigate('/warehouses', {replace: true})
        // setIsAuth(true)

    }catch (e) {
      handlerError(e.response.status)
    }
  }
  const handlerError = status => {
    switch (status){
      case 404:
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
  }


  return (
    <>
      <Input {...bindInputProps(fields, setFields, 'email', 'Email')} />
      <Input {...bindInputProps(fields, setFields, 'password', 'Password', 'password')} />
      <Button text='Log in' btnDisabled={disabled} onClick={() => authorization()}/>
    </>
  );
};
;

export default LogIn;