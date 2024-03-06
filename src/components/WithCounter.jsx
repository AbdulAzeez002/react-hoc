// This is a higher order Component


import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent
        name="hello world"
        counter={counter}
        incrementCounter={() =>
          setCounter((counter) => counter + increaseCount)
        }
        {...props}
      />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;
