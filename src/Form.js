import React, { useState } from "react";
import "./form.css";

// const Form = () => {
//   console.log("component start executing");
//   const [firstName, setFirstName] = useState("");

//   const onChangeHandler = (e) => {
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.value);
//     setFirstName(e.target.value);
//   };

//   return (
//     <form>
//       <span>{firstName}</span>
//       <label htmlFor="firstName">First name</label>
//       <input id="firstName" onChange={onChangeHandler} value={firstName} />
//     </form>
//   );
// };

// export default Form;

////////////////////////////

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

  return (
    <form>
      <span>{`Your name is ${formState.firstName} ${formState.lastName}`}</span>
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
    </form>
  );
};

export default Form;
