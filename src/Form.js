import React, { useState } from "react";
import "./form.css";

const Form = () => {
  console.log("component start executing");
  const [firstName, setFirstName] = useState("");

  const onChangeHandler = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setFirstName(e.target.value);
  };

  return (
    <form>
      <span>{firstName}</span>
      <label htmlFor="firstName">First name</label>
      <input id="firstName" onChange={onChangeHandler} value={firstName} />
    </form>
  );
};
export default Form;
