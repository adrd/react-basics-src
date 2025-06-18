import React, { useState, useEffect, useRef } from "react";
import "./stopwatch.css";

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);

//   const currentTime = useRef(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       currentTime.current++;
//       setTime(currentTime.current);
//       console.log(currentTime.current);
//     }, 1000);

//     // console.log("sunscribed to interval function");

//     return () => {
//       clearInterval(interval);
//       // console.log("unsubcribe from interval function");
//     };
//   }, []);

//   return (
//     <section className="stopwatch-frame">
//       <h1>Ultimate Stopwatch</h1>
//       <span>{time}</span>
//     </section>
//   );
// };

// export default Stopwatch;

///////////////////////////////////////////

const Stopwatch = () => {
  // console.log("component start");
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (counterActive) {
      interval = setInterval(() => {
        setTime((c) => c + 1);
      }, 1000);
    }

    // console.log("sunscribed to interval function");

    return () => {
      clearInterval(interval);
      // console.log("unsubcribe from interval function");
    };
  }, [counterActive]);

  const onClickHandler = () => {
    setCounterActive((c) => !c);
  };

  // console.log("time recalculated");
  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);

  return (
    <section className="stopwatch-frame">
      <h1>Ultimate Stopwatch</h1>
      <span>{formattedTime}</span>
      <button
        type="button"
        aria-pressed={!counterActive}
        onClick={onClickHandler}
      >
        Stop/Start
      </button>
    </section>
  );
};

export default Stopwatch;
