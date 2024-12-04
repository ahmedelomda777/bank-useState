import React from "react";
import "./App.css";
import { useState } from "react";
const Message = ({ onClose, data, messageClass}) => {
 
  return (
    <div className="message">
      <div className="background" onClick={onClose}></div>
      <div className="alert">
        <h1 className={"answer"+ messageClass }>{data}</h1>
        <i className="fas fa-xmark" onClick={onClose}></i>
      </div>
    </div>
  );
};

export default Message;
