import React, {useEffect} from 'react';
import {useState} from "react";
import Input from "../../../UI/Input/Input";
import PurchasingTechnology from "../../../UI/PurchasingTechnology/PurchasingTechnology";
import Button from "../../../UI/Button/Button";
import {Patterns} from "../../../mockdata/validation";

const AddProductStepOne = () => {
  const [isCheck,setIsCheck] = useState(<></>)
  const [fields, setFields] = useState({
    name: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    manufacturer: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    number: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    technology: {
      value: '',
      errorBoolean: false,
      touched: false,
    },
  })
  const [disabled, setDisabled] = useState(true);
  const funcArg = {
    productName : ['Product name','name','Enter a name'],
    manufacturer : ['Manufacturer','manufacturer','Enter a manufacturer'],
    itemNumber : ['Item number','number','Enter the number','number'],
    technology: {
      setIsCheck: (e)=> setIsCheck(e.target),
      isCheck: isCheck
    }
  }

  useEffect(() => {
    const {name, manufacturer, number ,technology} = fields;
    if (!name.touched && !manufacturer.touched && !number.touched && !technology.touched) return
    const isValid = !(!name.errorBoolean && !manufacturer.errorBoolean && name.value && manufacturer.value && !number.errorBoolean && !technology.errorBoolean && number.value && technology.value)
    setDisabled(isValid)
  }, [fields])


  useEffect(()=>{
    isCheck.value && setFields({
      ...fields,
      technology: {
        ...fields.technology,
        touched: true,
        errorBoolean: !Patterns.technology.test(isCheck.value),
        value: isCheck.value
      }
    })
  },[isCheck])


  const bindInputProps = (label, field, placeholder, type) => {
    return {
      label: label,
      type: type ? type : 'text',
      placeholder: placeholder,
      onBlur: (e) => setFields({
        ...fields,
        [field]: {
          ...fields[field],
          touched: true,
          errorBoolean: !Patterns[field].test(e.target.value),
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
      <Input {...bindInputProps(...funcArg.productName)} />
      <Input {...bindInputProps(...funcArg.manufacturer)} />
      <Input {...bindInputProps(...funcArg.itemNumber)} />
      <PurchasingTechnology {...funcArg.technology}/>
      <Button text='Sign up' btnDisabled={disabled} onClick={() => console.log('btn')}/>
    </>
  );
};;

export default AddProductStepOne;