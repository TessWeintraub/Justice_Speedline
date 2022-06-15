import React, {useState} from 'react';
import classes from "./PurchasingTechnology.module.css";

const PurchasingTechnology = () => {
    const [isCheck,setIsCheck] = useState(<></>)
    return (
        <div className={classes.container}>
            <p className={classes.container_title}>Purchasing technology</p>
            <div className={classes.container_content}>
                <label
                    className={classes.container_content_label}
                    htmlFor='radio_A'
                    style={{color: isCheck.id === 'radio_A' && isCheck.checked && '#2B3844'}}
                >
                    A
                    <input type="radio" name='purchasingTechnology' id='radio_A' value='A' onClick={(e)=>setIsCheck(e.target)}/>
                    <span className={classes.container_content_label_checkmark}></span>
                </label>
                <label
                    className={classes.container_content_label}
                    htmlFor='radio_S'
                    style={{color: isCheck.id === 'radio_S' && isCheck.checked && '#2B3844'}}
                >
                    S
                    <input type="radio" name='purchasingTechnology' id='radio_S' value='S' onClick={(e)=>setIsCheck(e.target)}/>
                    <span className={classes.container_content_label_checkmark}></span>
                </label>
                <label
                    className={classes.container_content_label}
                    htmlFor='radio_D'
                    style={{color: isCheck.id === 'radio_D' && isCheck.checked && '#2B3844'}}
                >
                    D
                    <input type="radio" name='purchasingTechnology' id='radio_D' value='D' onClick={(e)=>setIsCheck(e.target)}/>
                    <span className={classes.container_content_label_checkmark}></span>
                </label>
                <label
                    className={classes.container_content_label}
                    htmlFor='radio_F'
                    style={{color: (isCheck.id === 'radio_F' && isCheck.checked) && '#2B3844'}}
                >
                    F
                    <input type="radio" name='purchasingTechnology' id='radio_F' value='F' onClick={(e)=>setIsCheck(e.target)}/>
                    <span className={classes.container_content_label_checkmark}></span>
                </label>
            </div>
        </div>
    );
};

export default PurchasingTechnology;