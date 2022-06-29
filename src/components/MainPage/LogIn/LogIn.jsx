import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useUserContext} from "../../../context/userContext";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {logInInitStat} from "../../../assets/utilits/logIn";
import axios from "axios";
import Cookies from "js-cookie";

const LogIn = ({setModal}) => {

  const {setUserAuth, setIsAuth} = useUserContext()
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
    try {
      const user = {
        email: fields.email.value,
        password: fields.password.value
      }

      const tokenRequest = await axios.post('http://localhost:5000/api/auth/login', user)
      Cookies.set("TOKEN", tokenRequest.data.token)

      const userData = await axios.get('http://localhost:5000/api/users/users',{
        headers: {Authorization: `${Cookies.get("TOKEN")}`},
      })

      await setUserAuth(userData.data)
      await navigate('/warehouses', {replace: true})
      await setIsAuth(true)

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
      case 401: setFields({
        ...fields,
        password: {
          ...fields.password,
          errorMessage: 'Пароль не верный',
          errorBoolean: true
        }
      })
        return;
      case 0:
        setModal('Error')
        return;
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