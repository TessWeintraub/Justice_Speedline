import React from 'react';
import Button from "../Button/Button";
import classes from "./Modal.module.css";
import Close from '../../assets/svg/close.svg'

const Modal = ({
                 onSubmit,
                 title,
                 close,
                 children,
                 buttonText,
                 buttonOnclick,
                 setIsModal,
                 src
               }) => {


  return (
    <section className={classes.modal}>
      <form className={classes.modal__content} onSubmit={onSubmit}>
        <img className={classes.modal__content_close} src={Close} alt={'close'} onClick={close}/>
        {src && <img src={src} alt="modal_image" className={classes.modal__content__image}/>}
        {title && <h1 className={classes.modal__content_title}>{title}</h1>}


        <div className={classes.modal__content__elements}>
          {children}
          <Button text={buttonText} onClick={buttonOnclick}/>
        </div>


        {title === 'Sign up'
          &&
          <p className={classes.modal__content_prompt}>
            Already have an account?
            <span onClick={setIsModal}>Log in</span>
          </p>}
        {title === 'Log in'
          &&
          <p className={classes.modal__content_prompt}>
            No account?
            <span onClick={setIsModal}>Create one</span>
          </p>}
      </form>
    </section>
  );
};

export default Modal;