import React, { useState, useEffect, useRef } from "react";
import "./Components.css";

/**1. In this example, I would like to show the current input value and the previous one.
 * it means, after every rendering, we will see the output value using useRef Hook.
 * here are the steps:
 */
//1. create a functional component
const UseRefType = () => {
  //2. set initial input using useState
  const [inputValue, setInputValue] = useState("");

  //3. set another initial value using useRef
  const previousInputValue = useRef("");

  //4. se the current value using useEffect ~ that's rendered in every time
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  //5. return the method
  return (
    <>
      <div className="newBody">
        <input
          type="text"
          className="newInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </>
  );
};

const UseRefTypeB = () => {
  const [input, setInput] = useState("-");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);

  return (
    <>
      <div className="py-6 px-6">
        <p>
          <b>TypeScrit Training:</b> a very basic practical example of UseRef:
        </p>
        <input
          type="text"
          className="newInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h2>Current Input: {input}</h2>
        <h2>Number of Characters: {count.current}</h2>
      </div>
    </>
  );
};
export default UseRefTypeB;
