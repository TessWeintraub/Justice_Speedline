import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useUserContext} from "../../../context/userContext";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {logInInitStat} from "../../../assets/utilits/logIn";

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
    navigate('/warehouses', {replace: true})
    setIsAuth(true)
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