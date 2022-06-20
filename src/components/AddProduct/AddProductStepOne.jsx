import React, {useState, useEffect} from 'react';
import Input from "../../UI/Input/Input";
import PurchasingTechnology from "../../UI/PurchasingTechnology/PurchasingTechnology";
import Button from "../../UI/Button/Button";
import {bindInputProps} from "../../assets/utilits/utilits";
import {useUserContext} from "../../context/userContext";
import {Patterns} from "../../mockdata/validation";
import {addProductStepOneInitVal, sampleNewProduct} from "../../assets/utilits/addProduct";
import {stepOne} from "../../mockdata/icons";

const AddProductStepOne = ({setStepModal}) => {
  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(addProductStepOneInitVal)
  const [disabled, setDisabled] = useState(true);
  const {setNewProduct, activeWarehouse} = useUserContext()


  useEffect(() => {
    const {name, manufacturer, number, technology} = fields;
    if (!name.touched && !manufacturer.touched && !number.touched && !technology.touched) return
    const isValid = !(!name.errorBoolean && !manufacturer.errorBoolean && name.value && manufacturer.value && !number.errorBoolean && !technology.errorBoolean && number.value && technology.value)
    setDisabled(isValid)
  }, [fields])


  useEffect(() => {
    isCheck.value && setFields({
      ...fields,
      technology: {
        ...fields.technology,
        touched: true,
        errorBoolean: !Patterns.technology.test(isCheck.value),
        value: isCheck.value
      }
    })
  }, [isCheck])


  const funcArg = {
    productName: [fields, setFields, 'name', 'Product name'],
    manufacturer: [fields, setFields, 'manufacturer', 'Manufacturer'],
    itemNumber: [fields, setFields, 'number', 'Item number', 'number'],
    technology: {
      setIsCheck: (e) => setIsCheck(e.target),
      isCheck: isCheck
    }
  }

  const newProductStepOne = () => {
    setNewProduct({
      ...sampleNewProduct,
      one: fields.name.value,
      two: fields.manufacturer.value,
      three: fields.number.value,
      four: fields.technology.value
    })
    setStepModal(4)
  }

  return (
    <>
      {stepOne}
      <Input {...bindInputProps(...funcArg.productName)} />
      <Input {...bindInputProps(...funcArg.manufacturer)} />
      <Input {...bindInputProps(...funcArg.itemNumber)} />
      <PurchasingTechnology {...funcArg.technology}/>
      <Button text='Next step' btnDisabled={disabled} onClick={() => newProductStepOne()}/>
    </>
  )
}

export default AddProductStepOne;