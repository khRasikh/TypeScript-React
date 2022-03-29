import React, { useState, createContext, useContext } from "react";
import "./Components.css";

/**1. Create a type decleration */
export const putValue = {
  name: "Rasikh",
  main: "blue",
  text: "red",
};

/**2. Define context provider properties  */
type ContextPoroviderProps = {
  children: React.ReactNode;
};

export const Context = createContext(putValue);

export const ContextProvider = ({ children }: ContextPoroviderProps) => {
  return <Context.Provider value={putValue}>{children}</Context.Provider>;
};

const UseContextType = () => {
  return (
    <div className="flex items-stretch px-6 py-6 mx-6 my-6">
      <ContextProvider>
        <h2>Following is how I used context in my app:</h2>
        <Box />
      </ContextProvider>
    </div>
  );
};

/**3. Create a functional component  */
export const Box = () => {
  const getVal = useContext(Context);
  // return <div style={{ color: getVal.primary.text }}>My Context</div>;
  return (
    <div>
      <div className="flex items-stretch px-6 py-6 mx-6 my-6">
        <p style={{ color: getVal.text }}>Welcome dear {getVal.name}</p>
      </div>
    </div>
  );
};
export default UseContextType;
