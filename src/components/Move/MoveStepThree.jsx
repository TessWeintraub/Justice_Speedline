import React, {useState, useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import classes from "../AddProduct/AddProductStepThree.module.css"
import {Patterns} from "../../mockdata/validation";
import {cardIcon, moneyIcon, paypalIcon, stepThree} from "../../mockdata/icons";
import {moveStepThreeInitVal} from "../../assets/utilits/Move";
import product from "../../UI/Product/Product";

const MoveStepThree = ({setStepModal, setWarehouse ,warehouse}) => {
  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(moveStepThreeInitVal)
  const [disabled, setDisabled] = useState(true);
  const {move,setMove,setUserAuth,userAuth,activeWarehouse} = useUserContext()


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



  const moveStepThree = () => {
    const moveProduct = {
      ...move,
      products:  move.products.map(product=> {
        return {
          ...product,
          five: move.shipping,
          payment: fields.payment.value
        }})
    }
    const deleteProduct = warehouse.products.filter(element=>{
      return !moveProduct.products.some(elementDel=>{
        return element.id === elementDel.id;
      });
    })
    setWarehouse( warehouse => { return {
      ...warehouse,
      products: deleteProduct
    }})
    setUserAuth( userAuth=> {return {
      ...userAuth,
      warehouses:
        userAuth.warehouses.map(warehouse =>
          warehouse.id === moveProduct.inWh
              ?
              {
                ...warehouse,
                two: warehouse.products.length + moveProduct.products.length,
                products : [...warehouse.products, ...moveProduct.products]
              }
              :
      warehouse.id === moveProduct.from ?
          {
            ...warehouse,
            two: deleteProduct.length,
            products: [...deleteProduct]
          }
        :
          warehouse
        )
    }})
    setWarehouse( warehouse => {return {
      ...warehouse,
      products: deleteProduct
    }})
    setStepModal(10)
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
      <Button text='Next step' btnDisabled={disabled} onClick={() => moveStepThree()}/>
    </>
  );
};

export default MoveStepThree;