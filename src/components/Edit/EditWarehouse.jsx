import React, {useState,useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import axios from "axios";
import Cookies from "js-cookie";
import {bindInputProps} from "../../assets/utilits/utilits";
import {EditWarehouseInitStat} from "../../assets/utilits/EditWarehouse";

const EditWarehouse = ({setStepModal,setWarehouse, warehouse}) => {
  console.log(warehouse)
  const {setUserAuth,setProductsCheck} = useUserContext()
  const [fields, setFields] = useState(EditWarehouseInitStat)
  const [disabled, setDisabled] = useState(true);


  useEffect(()=>{
      setFields( {
        ...fields,
        name : {
          ...fields.name,
          value: warehouse[0].one
        },
        height: {
          ...fields.height,
          value: warehouse[0].three
        },
        length: {
          ...fields.height,
          value: warehouse[0].four
        },
        width: {
          ...fields.width,
          value: warehouse[0].five
        }
      })
  },[])



  useEffect(() => {
    console.log(fields)
    const {name, length, width ,height} = fields;
    if (!name.touched && !length.touched && !width.touched && !height.touched) return
    const isValid = !(!name.errorBoolean && !length.errorBoolean && !width.errorBoolean && !height.errorBoolean && name.value && length.value && width.value && height.value)
    setDisabled(isValid)
  }, [fields])

  const EditWarehouseFuncArg = {
    name: [ fields, setFields, 'name', 'Name of the warehouse'],
    length: [ fields, setFields, 'length', 'Length, m', 'number'],
    width: [ fields, setFields, 'width', 'Width, m', 'number'],
    height: [ fields, setFields, 'height', 'Height, m', 'number'],
  }

  const editWarehouse = async () => {

    try {
      const EditWarehouse = await axios.post(
        'http://localhost:5000/api/warehouses/edit',
        {
          warehouseId: warehouse[0]._id,
          editWarehouse: {
            one: fields.name.value,
            three: fields.length.value,
            four: fields.width.value,
            five: fields.height.value
          }
        }
        , {
          headers: {Authorization: `${Cookies.get("TOKEN")}`},
        })
      await setStepModal(2)
      await setUserAuth(EditWarehouse.data)
      await setWarehouse(EditWarehouse.data)
      await setProductsCheck([])
    }catch (e) {
      console.log(e)
    }

  }


  return (
    <>
      <Input {...bindInputProps(...EditWarehouseFuncArg.name)} defaultValue={warehouse[0].one}/>
      <Input {...bindInputProps(...EditWarehouseFuncArg.length)} defaultValue={warehouse[0].three}/>
      <Input {...bindInputProps(...EditWarehouseFuncArg.width)} defaultValue={warehouse[0].four}/>
      <Input {...bindInputProps(...EditWarehouseFuncArg.height)} defaultValue={warehouse[0].five}/>

      <Button text='Edit' btnDisabled={disabled} onClick={() => editWarehouse()}/>
    </>
  );
};

export default EditWarehouse;