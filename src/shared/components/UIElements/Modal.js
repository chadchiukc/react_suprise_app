import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const ModalOverLay = (props) => {
  let transitionClass = [classes.modal, classes.close];
  if (props.open) {
    transitionClass = [classes.modal, classes.open];
  }
  const content = (
    <div
      className={`${transitionClass.join(" ")} ${props.className}`}
      style={props.style}
    >
      <header className={`${classes.modal__header} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`${classes.modal__content} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${classes.modal__footer} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      {props.open && <Backdrop onClick={props.onCancel} />}
      <ModalOverLay {...props} />
    </>
  );
};

export default Modal;
