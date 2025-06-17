import { useState, Fragment } from "react";

// const list = [
//   "The beach",
//   "The mountains",
//   "Vibrant cities",
//   "Roughing it",
//   "Ultimate survival",
// ];

// const UltimateMachine = () => (
//   <section>
//     <h1>Ultimate Holiday Destinations</h1>
//     <ul>
//       {list.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   </section>
// );

// export default UltimateMachine;

//////////////////////////////////

// const list = [
//   { id: 1, name: "The beach" },
//   { id: 2, name: "The mountains" },
//   { id: 3, name: "Vibrant cities" },
//   { id: 4, name: "Roughing it" },
//   { id: 5, name: "Ultimate survival" },
// ];

// const UltimateMachine = () => (
//   <section>
//     <h1>Ultimate Holiday Destinations</h1>
//     <ul>
//       {list.map((item) => (
//         <li key={item.id.toString()}>{item.name}</li>
//       ))}
//     </ul>
//   </section>
// );

// export default UltimateMachine;

//////////////////////////////////
// <li key={item}>

const list1 = [
  "The beach",
  "The mountains",
  "Vibrant cities",
  "Roughing it",
  "Ultimate survival",
];

const list2 = [
  "The beach",
  "Roughing it",
  "Vibrant cities",
  "The mountains",
  "Ultimate survival",
];

const UltimateMachine = () => {
  const [list, setList] = useState(list1);

  const onClickHandler = () => {
    setList(list === list1 ? list2 : list1);
  };

  const displayList = list.map((item, index) => (
    <Fragment key={item}>
      <li>
        <label htmlFor={`item-${index}`}>{item}</label>
        <input id={`item-${index}`} />
      </li>
    </Fragment>
  ));

  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>
      <ul>{displayList}</ul>
      <button type="button" onClick={onClickHandler}>
        Change
      </button>
    </section>
  );
};

export default UltimateMachine;
