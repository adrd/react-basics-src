import React, { useState } from "react";
import "./form.css";

const Form = () => {
  console.log("component start executing");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        onChange={onChangeHandler}
        value={formState.firstName}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        onChange={onChangeHandler}
        value={formState.lastName}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
