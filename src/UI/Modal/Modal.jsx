import React from 'react';
import Button from "../Button/Button";
import classes from "./Modal.module.css";
import Close from '../../assets/svg/close.svg'

const Modal = ({
                 title,
                 close,
                 children,
                 btnText,
                 btnOnClick,
                 src,
               }) => {

  return (
    <section className={classes.modal}>
      <div className={classes.modal__content} >
        <img className={classes.modal__content_close} src={Close} alt={'close'} onClick={close}/>
        {src && <img src={src} alt="modal_image" className={classes.modal__content__image}/>}
        {title && <h1 className={classes.modal__content_title}>{title}</h1>}


        <div className={classes.modal__content__elements}>
          {children}
            {btnOnClick && <Button text={btnText} onClick={btnOnClick}/>}
        </div>



      </div>
    </section>
  );
};

export default Modal;