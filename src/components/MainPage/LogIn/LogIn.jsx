import React, {useState,useEffect} from 'react';
import {useUserContext} from "../../../context/userContext";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {logInInitStat} from "../../../assets/utilits/logIn";

const LogIn = () => {
  const {users, setUserAuth} = useUserContext()
  const [fields, setFields] = useState(logInInitStat)
  const [disabled, setDisabled] = useState(true);

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
  }
  return (
    <>
      <Input {...bindInputProps(fields,setFields,'email','Email')} />
      <Input {...bindInputProps(fields,setFields,'password','Password')} />
      <Button text='Sign up' btnDisabled={disabled} onClick={() => authorization()}/>
    </>
  );
};;

export default LogIn;