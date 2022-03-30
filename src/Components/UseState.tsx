import React from "react";
import "./Components.css";
/**A very simple example of useState in TypeScript React */
//1. import useEffect
import { useState } from "react";

const UseStateType = () => {
  const [Odd, setOdd] = useState(0);
  return (
    <>
      <div>
        <div className="px-5 mx-6 my-6">
          <p className="my-6">
            <b>TypeScrit-React: </b>Here you see how I used UseState Example:
          </p>

          <button
            type="button"
            className="newButton"
            onClick={() => setOdd(Odd + 1)}
          >
            Click Here to Increement(++)
          </button>
          <h2 style={{ color: "green" }}>{Odd}</h2>

          <button
            type="button"
            className="newButton"
            onClick={() => setOdd(Odd - 1)}
          >
            Click here to Decremeant(--)
          </button>
        </div>
        <div className="newBody"></div>
      </div>
    </>
  );
};

// export default UseEffectType;
export default UseStateType;
