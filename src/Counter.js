import { Fragment, useState } from "react";

// CounterView = child component
// child component tell a parent component to modify a value via events
const CounterView = ({ counterValue, onIncrement }) => (
  <Fragment>
    <p>{counterValue}</p>
    <button type="button" onClick={onIncrement}>
      Increment
    </button>
  </Fragment>
);

// Counter = parent component
// data are passed to child component (CounterView) via props
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterView counterValue={counter} onIncrement={onIncrementHandler} />
  );
};

export default Counter;
