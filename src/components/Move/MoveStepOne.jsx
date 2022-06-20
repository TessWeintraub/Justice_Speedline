// import React, {useEffect} from 'react';
// import {useState} from "react";
// import Input from "../../UI/Input/Input";
// import PurchasingTechnology from "../../UI/PurchasingTechnology/PurchasingTechnology";
// import Button from "../../UI/Button/Button";
// import {Patterns} from "../../mockdata/validation";
// import {addProductStepOneInitVal, sampleNewProduct} from "../../assets/utilits/addProduct";
// import {bindInputProps} from "../../assets/utilits/utilits";
// import {stepOne} from "../../mockdata/icons";
// import {useUserContext} from "../../context/userContext";
// import Select from "../../UI/Select/Select";
//
// const AddProductStepOne = ({setStepModal}) => {
//   const [isCheck,setIsCheck] = useState(<></>)
//   const [fields, setFields] = useState(addProductStepOneInitVal)
//   const [disabled, setDisabled] = useState(true);
//   const {setNewProduct,activeWarehouse} = useUserContext()
//
//
//
//   useEffect(() => {
//     const {name, manufacturer, number ,technology} = fields;
//     if (!name.touched && !manufacturer.touched && !number.touched && !technology.touched) return
//     const isValid = !(!name.errorBoolean && !manufacturer.errorBoolean && name.value && manufacturer.value && !number.errorBoolean && !technology.errorBoolean && number.value && technology.value)
//     setDisabled(isValid)
//   }, [fields])
//
//
//   useEffect(()=>{
//     isCheck.value && setFields({
//       ...fields,
//       technology: {
//         ...fields.technology,
//         touched: true,
//         errorBoolean: !Patterns.technology.test(isCheck.value),
//         value: isCheck.value
//       }
//     })
//   },[isCheck])
//
//
//
//
//   useEffect(()=>{
//     console.log(activeWarehouse)},[activeWarehouse])
//
//   return (
//     <>
//       {stepOne}
//       <Input {...bindInputProps(...funcArg.itemNumber)} />
//       <Select />
//       <Button text='Next step' btnDisabled={disabled} onClick={() => newProductStepOne()}/>
//     </>
//   )
// }
//
// export default AddProductStepOne;