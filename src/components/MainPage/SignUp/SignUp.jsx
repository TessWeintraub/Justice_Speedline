import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../../context/userContext";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import {bindInputProps} from "../../../assets/utilits/utilits";
import {sampleNewUser, signUpInitStat} from "../../../assets/utilits/signUp";
import axios from "axios";


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



  const registration = async () => {
    const newUser = {
      email: fields.email.value,
      password: fields.password.value,
    }


    try {
      await axios.post('http://localhost:5000/api/auth/register', newUser)
      setModal('Log In')
    }catch (e) {
      handlerError(e.response.status)
    }
  }

  const handlerError = status => {
    switch (status){
      case 409:
        setFields({
          ...fields,
          email: {
            ...fields.email,
            errorMessage: 'Email уже используется',
            errorBoolean: true
          }})
        return
      case 404:
        console.log('Error request')
    }
  }

  return (
    <>
      <Input {...bindInputProps(fields,setFields,'email','Email')} />
      <Input {...bindInputProps(fields,setFields,'password','Password', 'password')} />
      <Button text='Sign up' btnDisabled={disabled} onClick={() => registration()}/>
    </>
  );
};

export default SignUp;