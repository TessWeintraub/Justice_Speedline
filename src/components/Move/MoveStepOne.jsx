import React, {useState,useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import {reverseModal, stepOne} from "../../mockdata/icons";
import {moveStepOneInitVal, sampleMove} from "../../assets/utilits/Move";
import {Patterns} from "../../mockdata/Patterns";
import classes from "./Move.module.css";

const MoveStepOne = ({setStepModal,products}) => {
  const [fields, setFields] = useState(moveStepOneInitVal)
  const [disabled, setDisabled] = useState(true);
  const {activeWarehouse,userAuth,setMove,productsCheck} = useUserContext()

useEffect(()=>{
  console.log(fields)
},[fields])

  useEffect(() => {
    const {inWh} = fields;
    if (!inWh.touched) return
    const isValid = (!inWh.errorBoolean && inWh.value)
    console.log(isValid)
    setDisabled(isValid)
  }, [fields])


  // const funcArg = {
  //   in: [fields, setFields, 'inWh', 'In'],
  // }

const elseWarehouses = userAuth.warehouses.filter(warehouse => warehouse._id !== activeWarehouse._id)
 const bindInputProps = () => {
    return {
      label: 'In',
      value: fields.inWh.value,
      onChange: (e) => setFields({
        ...fields,
        inWh: {
          ...fields.inWh,
          value: e.target.value,
          touched: true,
          errorBoolean: !Patterns.inWh.test(e.target.value),
        }
      }),
      array: elseWarehouses,
    }
  }

  const moveStepOne = () =>{
    setMove({
      ...sampleMove,
      from: activeWarehouse._id,
      inWh: fields.inWh.value,
      products:  productsCheck
    })
    setStepModal(8)
  }


  return (
    <>
      {stepOne}
      <Input label='From' defaultValue={activeWarehouse.one} readOnly={true}/>
      <div className={classes.reverse}>
        {reverseModal}
      </div>
      <Select {...bindInputProps()}/>
      <Button text='Next step' btnDisabled={disabled} onClick={() => moveStepOne()}/>
    </>
  )
}

export default MoveStepOne;