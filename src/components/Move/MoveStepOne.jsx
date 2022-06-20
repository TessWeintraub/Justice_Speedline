import React, {useEffect} from 'react';
import {useState} from "react";
import {useUserContext} from "../../context/userContext";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import {reverseModal, stepOne} from "../../mockdata/icons";
import {moveStepOneInitVal, sampleMove} from "../../assets/utilits/Move";
import {bindInputProps} from "../../assets/utilits/utilits";
import classes from "./Move.module.css";
import {Patterns} from "../../mockdata/validation";

const MoveStepOne = ({setStepModal,products}) => {
  const [fields, setFields] = useState(moveStepOneInitVal)
  const [disabled, setDisabled] = useState(true);
  const {setNewProduct,activeWarehouse,userAuth,setMove,productsCheck} = useUserContext()



  useEffect(() => {
    const {inWh} = fields;
    if (!inWh.touched) return
    const isValid = !(!inWh.errorBoolean && inWh.value)
    setDisabled(isValid)
  }, [fields])


  const funcArg = {
    in: [fields, setFields, 'inWh', 'In'],
  }


 const bindInputProps = (state, setState ,key , label, type) => {
    return {
      label: label,
      placeholder: `Enter a ${key}`,
      value: state[key].value,
      onChange: (e) => setState({
        ...state,
        [key]: {
          ...state[key],
          value: e.target.value,
          touched: true,
          errorBoolean: !Patterns[key].test(e.target.value),
        }
      }),
      errorMessage: state[key].errorBoolean && state[key].errorMessage
    }
  }

  const moveStepOne = () =>{
    setMove({
      ...sampleMove,
      from: activeWarehouse.id,
      inWh: Number(fields.inWh.value),
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
      <Select warehouses={userAuth.warehouses.filter(warehouse => warehouse.id !== activeWarehouse.id)} {...bindInputProps(...funcArg.in)}/>
      <Button text='Next step' btnDisabled={disabled} onClick={() => moveStepOne()}/>
    </>
  )
}

export default MoveStepOne;