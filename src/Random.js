import { useState } from "react";
import InteractiveView from "./InteractiveView";

const Random = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const onRandomiseHandler = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  return (
    <InteractiveView
      value={randomNumber}
      onAction={onRandomiseHandler}
      actionText="Randomise"
    />
  );
};

export default Random;
