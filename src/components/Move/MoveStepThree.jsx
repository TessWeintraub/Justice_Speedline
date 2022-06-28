import React, {useState, useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import {Patterns} from "../../mockdata/Patterns";
import {cardIcon, moneyIcon, paypalIcon, stepThree} from "../../mockdata/icons";
import {moveStepThreeInitVal} from "../../assets/utilits/Move";
import classes from "../AddProduct/AddProductStepThree.module.css"
import axios from "axios";
import Cookies from "js-cookie";

const MoveStepThree = ({setStepModal, setWarehouse, warehouse}) => {

  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(moveStepThreeInitVal)
  const [disabled, setDisabled] = useState(true);
  const {move, setUserAuth, activeWarehouse} = useUserContext()


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


  const moveStepThree = async () => {
    const moveProducts = {
      newPayment: fields.payment.value,
      newShipping: move.shipping,
      warehouseIdIn: move.inWh, // Id склада куда нужно переместить продукты
      warehouseIdFrom: move.from, // Id склада откуда нужно переместить продукты
      moveProducts: move.products.map(product => product._id) // Массив id продуктов, которые нужно переместить
    }

    // Отправляем продукты на перемещение и получаем обновленные данные о пользователе
    const updatedUser = await axios.post('http://localhost:5000/api/products/move', moveProducts, {
      headers: {Authorization: `${Cookies.get("TOKEN")}`}
    })

    // Ищем склад в котором сейчас находимся
    const updatedWarehouse = updatedUser.data.warehouses.find( warehouse => warehouse._id === activeWarehouse._id)
    await setUserAuth(updatedUser.data)
    await setWarehouse(updatedWarehouse)
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