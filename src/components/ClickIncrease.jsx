import { useState } from "react";
import WithCounter from 'components/WithCounter'

function ClickIncrease(props) {
    const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
    const { counter, incrementCounter,text } = props; 
    console.log(text,'text')
    return (
      <div>
        {/*When clicked, increment the value of fontSize*/}
        <button onClick={incrementCounter}>
          Increase with click
        </button>
        {/*Set the font size of this text to the fontSize variable.*/}
        {/*Furthermore, display its value as well.*/}
        <p style={{ fontSize:counter }}>Size of font in onClick function: {counter}</p>
      </div>
    );
  }
  export default WithCounter(ClickIncrease,5);