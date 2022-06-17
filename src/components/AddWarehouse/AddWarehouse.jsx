import React, {useEffect} from 'react';
import {useState} from "react";
import Input from "../../UI/Input/Input";
import {Patterns} from "../../mockdata/validation";
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import product from "../../UI/Product/Product";
import warehouses from "../Warehouses/Warehouses";

const AddWarehouse = ({setIsModal}) => {
  const {userAuth, setUserAuth} = useUserContext()
  const [fields, setFields] = useState({
    name: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    length: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    width: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
    height: {
      value: '',
      errorMessage: 'Поле заполнено некорректно',
      errorBoolean: false,
      touched: false,
    },
  })
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const {name, length, width ,height} = fields;
    if (!name.touched && !length.touched && !width.touched && !height.touched) return
    const isValid = !(!name.errorBoolean && !length.errorBoolean && name.value && length.value && !width.errorBoolean && !height.errorBoolean && width.value && height.value)
    setDisabled(isValid)
  }, [fields])

  const bindInputProps = (label, field, type) => {
    return {
      label: label,
      type: type ? type : 'text',
      placeholder: `Enter a ${field}`,
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

  const addWarehouse = () => {
    const newWarehouse = {
          id: userAuth.warehouses.length ? userAuth.warehouses.last().id + 1 : 1,
          one: fields.name.value,
          two: 0,
          three: fields.length.value,
          four: fields.width.value,
          five: fields.height.value,
          characteristic: {
            title: 'Warehouse No. 1',
            button_text: 'Add cargo +',
            one: 'All stores',
            two: 'Manufacturer',
            three: 'Item number',
            four: 'Purchasing technology',
            five: 'Shipment method'
          },
          products: []
    }
    setUserAuth({
      ...userAuth,
      warehouses: [...userAuth.warehouses,newWarehouse]
    })
    setIsModal('Continue')
  }

  return (
    <>
      <Input {...bindInputProps('Name of the warehouse', 'name',)} />
      <Input {...bindInputProps('Length, m', 'length', 'number')} />
      <Input {...bindInputProps('Width, m', 'width', 'number')} />
      <Input {...bindInputProps('Height, m', 'height', 'number')} />

      <Button text='Sign up' btnDisabled={disabled} onClick={() => addWarehouse()}/>
    </>
  );
};;

export default AddWarehouse;