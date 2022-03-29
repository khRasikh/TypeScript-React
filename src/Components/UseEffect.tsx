import React, { useState, useEffect } from "react";
function UseEffectType() {
  //2. set variables
  const [time, setTime] = useState(new Date());

  //3. use it
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  //3. Use the state in an action
  return (
    <div>
      <div className="newBody">
        <p>
          <b>TypeScrit-React: </b>Here you see how I used UseEffect Example:
          <hr />
        </p>
        <h2 style={{ color: "green" }}>{time.toLocaleString()}</h2>
      </div>
    </div>
  );
}

export default UseEffectType;
