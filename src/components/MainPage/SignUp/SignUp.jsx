import React, {useEffect, useState} from 'react';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import {useUserContext} from "../../../context/userContext";
import {Patterns} from "../../../mockdata/validation";


const SignUp = ({setModal}) => {
  const {users, setUsers} = useUserContext()
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
    const isValid = !(!email.errorBoolean && !password.errorBoolean && email.value && password.value)
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

  const registration = () => {
    const searchUser = users.length ? users.filter((user) => user.email === fields.email.value) : []

    if (searchUser.length) {
      setFields({
          ...fields,
          email: {
            ...fields.email,
            errorMessage: 'Email уже используется',
            errorBoolean: true
          }
      })
      return
    }
    const newUser = {
      id: users.length ? users.last().id +1 :1,
      email: fields.email.value,
      password: fields.password.value,
      characteristic: {
        title: 'Warehouse',
        button_text: 'Add a warehouse +',
        one: 'All stores',
        two: 'Number of products',
        three: 'Length, m',
        four: 'Width, m',
        five: 'Height, m'
      },
      warehouses: []
    }
    setUsers([...users, newUser])
    setModal('Log In')
  }
  return (
    <>
      <Input {...bindInputProps('email')} />
      <Input {...bindInputProps('password')} />
      <Button text='Sign up' btnDisabled={disabled} onClick={() => registration()}/>
    </>
  );
};

export default SignUp;