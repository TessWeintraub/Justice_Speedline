import React from 'react';
import classes from "./Product.module.css";
import Checkbox from "../Checkbox/Checkbox";
import {useUserContext} from "../../context/userContext";

const Product = ({
                isChecked,
                data,
                idCheckbox,
                onChangeCheckbox,
                 }) => {
  const {setActiveWarehouse,setProductsCheck} = useUserContext()

  const click = (element) => {
    if (!(element.type !== 'checkbox' && element.tagName !== 'LABEL' && element.tagName !== 'input')) return
    data.products && setActiveWarehouse(data)
    data.products && setProductsCheck([])
  }

    return (
        <div className={classes.product}  onClick={(e)=>{click(e.target)}}>
            <div className={classes.product_name}>
                <Checkbox onChangeCheckbox={onChangeCheckbox} isChecked={isChecked} idCheckbox={idCheckbox} data={data}/>
                <p>{data.one}</p>
            </div>
              <div className={classes.product_parameter}>
                <p>{data.two}</p>
              </div>
              <div className={classes.product_parameter}>
                <p>{data.three}</p>
              </div>
              <div className={classes.product_parameter}>
                <p>{data.four}</p>
              </div>
              <div className={classes.product_parameter}>
                <p>{data.five}</p>
              </div>
        </div>
    );
};

export default Product;