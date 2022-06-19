import React, {useEffect, useState} from 'react';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import {useUserContext} from "../../../context/userContext";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {sampleNewUser, signUpInitStat} from "../../../assets/utilits/signUp";


const SignUp = ({setModal}) => {
  const {users, setUsers} = useUserContext()
  const [disabled, setDisabled] = useState(true);
  const [fields, setFields] = useState(signUpInitStat)

  useEffect(() => {
    const {email, password} = fields;
    if (!email.touched && !password.touched) return
    const isValid = !(!email.errorBoolean && !password.errorBoolean && email.value && password.value)
    setDisabled(isValid)
  }, [fields])



  const registration = () => {
    const searchUser = users.length ? users.filter((user) => user.email === fields.email.value) : []
    if (searchUser.length) { // Если пользователь был найден в базе
      setFields({
          ...fields,
          email: {
            ...fields.email,
            errorMessage: 'Email уже используется',
            errorBoolean: true
      }})
      return
    }

    const newUser = {
      ...sampleNewUser,
      id: users.length ? users.last().id +1 : 1,
      email: fields.email.value,
      password: fields.password.value,
    }
    setUsers([...users, newUser])
    setModal('Log In')
  }
  return (
    <>
      <Input {...bindInputProps(fields,setFields,'email','Email')} />
      <Input {...bindInputProps(fields,setFields,'password','Password')} />
      <Button text='Sign up' btnDisabled={disabled} onClick={() => registration()}/>
    </>
  );
};

export default SignUp;