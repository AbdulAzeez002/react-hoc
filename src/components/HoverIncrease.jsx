import { useState } from "react";
import WithCounter from "./WithCounter";

function HoverIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>
      {/*This time, instead of listening to clicks,*/}
      {/*Listen to hover events instead*/}
      <button onMouseOver={incrementCounter}>Increase on hover</button>
      <p style={{ fontSize: counter }}>
        Size of font in onMouseOver function: {counter}
      </p>
    </div>
  );
}
export default WithCounter(HoverIncrease,3);
