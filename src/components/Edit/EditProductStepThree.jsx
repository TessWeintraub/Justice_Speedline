import React, {useState, useEffect} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Radio from "../../UI/Radio/Radio";
import classes from "./EditProductStepThree.module.css"
import {Patterns} from "../../mockdata/Patterns";
import {addProductStepThreeInitVal} from "../../assets/utilits/addProduct";
import {cardIcon, moneyIcon, paypalIcon, stepThree} from "../../mockdata/icons";
import axios from "axios";
import Cookies from "js-cookie";

const EditProductStepThree = ({setStepModal, setWarehouse}) => {
  const [isCheck, setIsCheck] = useState(<></>)
  const [fields, setFields] = useState(addProductStepThreeInitVal)
  const [disabled, setDisabled] = useState(true);
  const {setUserAuth, editProduct, setEditProduct, activeWarehouse, setProductsCheck} = useUserContext()

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



  const EditProductStepThree = async () => {
    try {
      const Product = await axios.post(
        'http://localhost:5000/api/products/edit',
        {
          warehouseId: editProduct.warehouseId, // Id текущего склада
          productId: [editProduct.productId],
          editProduct: {
            one: editProduct.one,
            two: editProduct.two,
            three: editProduct.three,
            four: editProduct.four,
            five: editProduct.five,
            payment: fields.payment.value
          }
        },
        {
          headers:
            {
              Authorization: `${Cookies.get("TOKEN")}`
            }
        }
      )
      // Ищем текущий склад
      const updatedWarehouse = await Product.data.warehouses.find( warehouse => warehouse._id === activeWarehouse._id)

      setStepModal(6)
      setEditProduct({})
      setProductsCheck([])
      setWarehouse(updatedWarehouse)
      setUserAuth(Product.data)
    }
    catch (e) {
      // Если пришел код авторизации, то выкинем на страницу авторизации, если нет, то сообщение, что сервер не доступен
      e.response.status === 401 ? setStepModal(16) : setStepModal(15)
    }

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
      <Button text='Next step' btnDisabled={disabled} onClick={() => EditProductStepThree()}/>
    </>
  );
};

export default EditProductStepThree;