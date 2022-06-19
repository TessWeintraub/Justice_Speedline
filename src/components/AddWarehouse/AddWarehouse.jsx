import React, {useState,useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {bindInputProps} from "../../assets/utilits/utilits"
import {addWarehousesInitStat, sampleNewWarehouse} from "../../assets/utilits/addWarehouse";

const AddWarehouse = ({setStepModal}) => {
  const {userAuth, setUserAuth} = useUserContext()
  const [fields, setFields] = useState(addWarehousesInitStat)
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const {name, length, width ,height} = fields;
    if (!name.touched && !length.touched && !width.touched && !height.touched) return
    const isValid = !(!name.errorBoolean && !length.errorBoolean && name.value && length.value && !width.errorBoolean && !height.errorBoolean && width.value && height.value)
    setDisabled(isValid)
  }, [fields])



  const addWarehouseFuncArg = {
    name: [ fields, setFields, 'name', 'Name of the warehouse'],
    length: [ fields, setFields, 'length', 'Length, m', 'number'],
    width: [ fields, setFields, 'width', 'Width, m', 'number'],
    height: [ fields, setFields, 'height', 'Height, m', 'number'],
  }
  const addWarehouse = () => {

    const newWarehouse = {
      ...sampleNewWarehouse,
      id: userAuth.warehouses.length ? userAuth.warehouses.last().id + 1 : 1,
      one: fields.name.value,
      three: fields.length.value,
      four: fields.width.value,
      five: fields.height.value,
      characteristic: {
        ...sampleNewWarehouse.characteristic,
        title: fields.name.value,
      },
    }
    setUserAuth({
      ...userAuth,
      warehouses: [...userAuth.warehouses,newWarehouse]
    })
    setStepModal(2)
  }


  return (
    <>
      <Input {...bindInputProps(...addWarehouseFuncArg.name)} />
      <Input {...bindInputProps(...addWarehouseFuncArg.length)} />
      <Input {...bindInputProps(...addWarehouseFuncArg.width)} />
      <Input {...bindInputProps(...addWarehouseFuncArg.height)} />

      <Button text='Sign up' btnDisabled={disabled} onClick={() => addWarehouse()}/>
    </>
  );
};;

export default AddWarehouse;