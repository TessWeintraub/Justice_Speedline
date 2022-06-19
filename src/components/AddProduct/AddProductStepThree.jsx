import React, {useState, useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import classes from "./AddProductStepThree.module.css"
import {Patterns} from "../../mockdata/validation";
import {addProductStepThreeInitVal} from "../../assets/utilits/addProduct";
import {cardIcon, moneyIcon, paypalIcon, stepThree} from "../../mockdata/icons";

const AddProductStepThree = ({setStepModal}) => {
  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(addProductStepThreeInitVal)
  const [disabled, setDisabled] = useState(true);
  const {newProduct, setNewProduct, setUserAuth, userAuth, activeWarehouse} = useUserContext()


  useEffect(() => {
    const {payment} = fields;
    if (!payment.touched) return
    const isValid = !(!payment.errorBoolean && payment.value)
    setDisabled(isValid)
  }, [fields])


  useEffect(() => {
    isCheck.value && setFields({
      ...fields,
      payment: {
        ...fields.payment,
        touched: true,
        errorBoolean: !Patterns.payment.test(isCheck.value),
        value: isCheck.value
      }
    })
  }, [isCheck])


  const newProductStepThree = () => {
    setNewProduct({
      ...newProduct,
      payment: fields.payment.value
    })

    setUserAuth({
        ...userAuth,
        warehouses:
          userAuth.warehouses.map(warehouse =>
            warehouse.id === activeWarehouse.id
              ?
              {
                ...warehouse,
                products: [...warehouse.products, newProduct]
              }
              :
              warehouse)
      }
    )
    setNewProduct(null)
    setStepModal(6)
  }

  return (
    <>
      {stepThree}
      <p className={classes.label}>Choose a payment method</p>
      <div className={classes.payment}>
        <Radio icon={cardIcon} text='Visa, Mastercard' name={'payment'} id={'0'} isCheck={isCheck}
               setIsCheck={setIsCheck} value={'Visa,Mastercard'}/>
        <Radio icon={paypalIcon} text='Paypal' name={'payment'} id={'1'} isCheck={isCheck} setIsCheck={setIsCheck}
               value={'paypal'}/>
        <Radio icon={moneyIcon} text='Cash' name={'payment'} id={'2'} isCheck={isCheck} setIsCheck={setIsCheck}
               value={'Cash'}/>
      </div>
      <Button text='Next step' btnDisabled={disabled} onClick={() => newProductStepThree()}/>
    </>
  );
};

export default AddProductStepThree;