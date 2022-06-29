import React from 'react';
import Button from "../Button/Button";
import classes from "./Footer.module.css";
import {selectCount} from "../../mockdata/icons";

const Footer = ({products, onClickDel, onClickMove, onClickEdit}) => {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer_p}>{selectCount} Selected: {products.length}</span>
      <div className={classes.footer_container}>
        {products.length === 1 && <Button text='Edit' onClick={onClickEdit}/>}
        {onClickMove && <Button text='Move' onClick={onClickMove}/>}
        <Button text='Delete' color='#E55232' onClick={onClickDel}/>
      </div>
    </footer>
  );
};

export default Footer;