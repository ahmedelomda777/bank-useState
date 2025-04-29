import React from "react";
import "./App.css";
import { useState } from "react";
import Message from "./Message";
const Form = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "less than 500$",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [message,setMessage] =useState("")
  const isDisable = formInput.name==="" || formInput.phone==="" || formInput.age==="";

  const handleName = (event) => {
    const name = event.target.value;
  setFormInput({ ...formInput, name: name }); 
  };
  const handlePhone = (event) => {
  const phone = event.target.value;
  if (/^\d*$/.test(phone)) {
    setFormInput({ ...formInput, phone: phone });
  }
};
  const handleAge = (event) => {
    const age = event.target.value
    if(/^\d*$/.test(age)){
    setFormInput({ ...formInput, age: age });
    }
  };
  const handleIsEmployee = () => {
    formInput.isEmployee === false
      ? setFormInput({ ...formInput, isEmployee: true })
      : setFormInput({ ...formInput, isEmployee: false });
  };
  const handleSalary = (event) => {
    setFormInput({ ...formInput, salary: event.target.value });
  };
  const handleValidation = (event) => {
    event.preventDefault();
    setIsSubmit(true);
     let phoneLength = formInput.phone.length;
     let age=formInput.age;
     if (phoneLength < 9 || phoneLength > 12) {
      setMessage("phone is incorrect")
    } else if (age < 21 || age > 120) {
     setMessage("age is not allowed")
    } else {
      setMessage("the form has been submitted successfully")
    }
  };

  const handleClose = () => {
    setIsSubmit(false);
  };
 
  return (
    <div className="container">
      <form onSubmit={handleValidation}>
        <label>Name:</label>
        <input value={formInput.name} onChange={handleName} />
        <label>Phone:</label>
        <input value={formInput.phone} onChange={handlePhone} />
        <label>Age:</label>
        <input value={formInput.age} onChange={handleAge}/>
        <label>Are you employee?</label>
        <input
          type="checkbox"
          className="chk"
          checked={formInput.isEmployee}
          onChange={handleIsEmployee}
        />
        <label>Salary</label>
        <select value={formInput.salary} onChange={handleSalary}>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button type="submit" disabled={isDisable} id="submit" className={isDisable ? "disable" : ""}>
          submit
        </button>
        {isSubmit && <Message onClose={handleClose} data={message} messageClass={message==="the form has been submitted successfully"?"":" incorrect"}  />}
      </form>
    </div>
  );
};

export default Form;
