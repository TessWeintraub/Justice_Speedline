import React from 'react';
import classes from "./Product.module.css";
import Checkbox from "../Checkbox/Checkbox";

const Product = ({
                onClick,
                onChecked,
                data
                 }) => {
    return (
        <div className={classes.product} key={data.id} onClick={onClick}>
            <div className={classes.product_name}>
                <Checkbox onClick={onChecked} idCheckbox={data.id + '_checkbox'}/>
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