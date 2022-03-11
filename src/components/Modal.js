import React from "react";

const Modal = (props) => {
  return (
    <div
      className={props.modalState.visiable === true ? "" : "hide-modal"}
      onClick={() => {
        props.onHideModal();
      }}
    >
      <div className="msg">
        <div className="msg-container">{props.modalState.msg}</div>
      </div>
    </div>
  );
};

export default Modal;
