import React, {useState,useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import classes from "./EditProductStepTwo.module.css"
import {Patterns} from "../../mockdata/Patterns";
import {airIcon, boatIcon, stepTwo, trackIcon} from "../../mockdata/icons";
import {editProductStepTwoInitVal} from "../../assets/utilits/editProduct";

const EditProductStepTwo = ({setStepModal, product}) => {
  const [isCheck,setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(editProductStepTwoInitVal)
  const [disabled, setDisabled] = useState(true);
  const {setEditProduct} = useUserContext()



  useEffect(() => {
    const {shipping} = fields;
    if (!shipping.touched) return
    const isValid = !(!shipping.errorBoolean && shipping.value)
    setDisabled(isValid)
  }, [fields])


  useEffect(()=>{
    isCheck.value && setFields({
      ...fields,
      shipping: {
        ...fields.shipping,
        touched: true,
        errorBoolean: !Patterns.shipping.test(isCheck.value),
        value: isCheck.value
      }
    })
  },[isCheck])


  const newProductStepTwo = () => {
    setEditProduct( editProduct => {
      return {
        ...editProduct,
        five: fields.shipping.value
      }
    })
    setStepModal(14)
  }

  return (
    <>
      {stepTwo}
      <p className={classes.label}>Select delivery method</p>
      <div className={classes.shipping}>
        <Radio icon={airIcon} text='By air transport' name={'air'} id={'0'} isCheck={isCheck} setIsCheck={setIsCheck} value={'AIR'} defaultChecked={product[0].five}/>
        <Radio icon={boatIcon} text='By sea' name={'air'} id={'1'} isCheck={isCheck} setIsCheck={setIsCheck} value={'SEA'} defaultChecked={product[0].five}/>
        <Radio icon={trackIcon} text='By car' name={'air'} id={'2'} isCheck={isCheck} setIsCheck={setIsCheck} value={'TRUCK'} defaultChecked={product[0].five}/>
      </div>
      <Button text='Next step' btnDisabled={disabled} onClick={() => newProductStepTwo()}/>
    </>
  );
};

export default EditProductStepTwo;