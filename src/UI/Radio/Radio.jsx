import React from 'react';
import {checkedIcon} from "../../mockdata/icons";
import classes from "./Radio.module.css";

const Radio = ({text, icon, name, isCheck, setIsCheck, value}) => {



    return (

            <label className={classes.label} style={{backgroundColor: isCheck.id === text && isCheck.checked ? '#FEF5E7' : '#F8F9F9'}}>
                <span className={ isCheck.id === text && isCheck.checked && classes.span}>
                    {icon}
                    <p style={{color: isCheck.id === text && isCheck.checked  ? '#EE950F' : '#3E4C5966'}}>{text}</p>
                    <input
                        type='radio'
                        className={classes.label_input}
                        id={text}
                        name={name}
                        value={value}
                        onClick={(e)=>setIsCheck(e.target)}
                    />
                </span>
                {isCheck.id === text && isCheck.checked && checkedIcon}
            </label>


    );
};

export default Radio;