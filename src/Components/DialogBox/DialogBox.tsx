import React from "react";
import CloseIcon from "../../Assets/closeIcon.png";
import "./DialogBox.css";
interface handleClick {
  closeButton: React.MouseEventHandler<HTMLButtonElement>;
}
const DialogBox: React.FC<handleClick> = ({ children, closeButton }) => {
  return (
    <div className="fixed-top w-100 h-100 dialog-box">
      <div className="alert d-flex flex-column">
        <button onClick={closeButton}>
          <img className="close-button" src={CloseIcon} alt="Close PopUp" />
        </button>
        <b>{children}</b>
      </div>
    </div>
  );
};

export default DialogBox;
