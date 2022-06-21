import React, {useState, useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import {Patterns} from "../../mockdata/Patterns";
import {cardIcon, moneyIcon, paypalIcon, stepThree} from "../../mockdata/icons";
import {moveStepThreeInitVal} from "../../assets/utilits/Move";
import classes from "../AddProduct/AddProductStepThree.module.css"

const MoveStepThree = ({setStepModal, setWarehouse, warehouse}) => {

  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(moveStepThreeInitVal)
  const [disabled, setDisabled] = useState(true);
  const {move, setUserAuth,userAuth} = useUserContext()


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
    const productsDelete = {
      ...move
    }
    const lastId = userAuth.warehouses.filter(warehouse => warehouse.id === move.inWh)[0].products.last()
    const moveProduct = {
      ...move,
      products: move.products.map((product,index )=> {
        return {
          ...product,
          id: lastId ? lastId.id + (index + 1) : (index + 1),
          five: move.shipping,
          payment: fields.payment.value
        }
      })
    }

    const removeProductInWarehouse = warehouse.products.filter(element => {
      return !productsDelete.products.some(elementDel => {
        return element.id === elementDel.id;
      });
    })



    setUserAuth(userAuth => {
      return {
        ...userAuth,
        warehouses:
          userAuth.warehouses.map(warehouse =>
            warehouse.id === moveProduct.inWh
              ?
              {
                ...warehouse,
                two: warehouse.products.length + moveProduct.products.length,
                products: [...warehouse.products, ...moveProduct.products]
              }
              :
              warehouse.id === moveProduct.from ?
                {
                  ...warehouse,
                  two: removeProductInWarehouse.length,
                  products: [...removeProductInWarehouse]
                }
                :
                warehouse
          )
      }
    })
    setWarehouse(warehouse => {
      return {
        ...warehouse,
        products: removeProductInWarehouse
      }
    })
    setStepModal(10)
  }

  return (
    <>
      {stepThree}
      <p className={classes.label}>
        Choose a payment method
      </p>
      <div className={classes.payment}>
        <Radio
          icon={cardIcon}
          text='Visa, Mastercard'
          name='payment'
          id='0'
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          value='Visa,Mastercard'/>
        <Radio
          icon={paypalIcon}
          text='Paypal'
          name='payment'
          id='1'
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          value='paypal'
        />
        <Radio
          icon={moneyIcon}
          text='Cash'
          name='payment'
          id='2'
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          value='Cash'
        />
      </div>
      <Button
        text='Next step'
        btnDisabled={disabled}
        onClick={() => moveStepThree()}
      />
    </>
  );
};

export default MoveStepThree;