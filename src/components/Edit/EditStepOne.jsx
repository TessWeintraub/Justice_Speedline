import React, {useState, useEffect} from 'react';
import Input from "../../UI/Input/Input";
import PurchasingTechnology from "../../UI/PurchasingTechnology/PurchasingTechnology";
import Button from "../../UI/Button/Button";
import {bindInputProps} from "../../assets/utilits/utilits";
import {useUserContext} from "../../context/userContext";
import {Patterns} from "../../mockdata/Patterns";
import {stepOne} from "../../mockdata/icons";
import {editProductStepOneInitVal, sampleEditProduct} from "../../assets/utilits/editProduct";

const EditProductStepOne = ({setStepModal, product}) => {
  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(editProductStepOneInitVal)
  const [disabled, setDisabled] = useState(true);
  const {activeWarehouse, setEditProduct} = useUserContext()


  useEffect(() => {
    const {name, manufacturer, number, technology} = fields;
    if (!name.touched && !manufacturer.touched && !number.touched && !technology.touched) return
    const isValid = !(!name.errorBoolean && !manufacturer.errorBoolean && name.value && manufacturer.value && !number.errorBoolean && !technology.errorBoolean && number.value && technology.value)
    const test = name.value !== product[0].one || manufacturer.value !== product[0].two || number.value !== product[0].three || technology.value !== product[0].four
    console.log(test)
    setDisabled(isValid)
  }, [fields])


  useEffect(()=>{
    setFields( {
      ...fields,
      name : {
        ...fields.name,
        value: product[0].one
      },
      manufacturer: {
        ...fields.manufacturer,
        value: product[0].two
      },
      number: {
        ...fields.number,
        value: product[0].three
      },
      technology: {
        ...fields.technology,
        value: product[0].four
      }
    })
  },[])


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
      isCheck: isCheck,
      defaultChecked: product[0].four
    }
  }

  const editProductStepOne = () => {
    setEditProduct({
      ...sampleEditProduct,
      warehouseId: activeWarehouse._id,
      productId: product[0]._id,
      one: fields.name.value,
      two: fields.manufacturer.value,
      three: fields.number.value,
      four: fields.technology.value
    })
    setStepModal(13)
  }

  return (
    <>
      {stepOne}
      <Input {...bindInputProps(...funcArg.productName)} defaultValue={product[0].one}/>
      <Input {...bindInputProps(...funcArg.manufacturer)} defaultValue={product[0].two}/>
      <Input {...bindInputProps(...funcArg.itemNumber)} defaultValue={product[0].three}/>
      <PurchasingTechnology {...funcArg.technology}/>
      <Button text='Next step' btnDisabled={disabled} onClick={() => editProductStepOne()}/>
    </>
  )
}

export default EditProductStepOne;