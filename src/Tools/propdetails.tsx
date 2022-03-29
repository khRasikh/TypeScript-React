import React from "react";
import "./../Components/Components.css";

type value = {
  firstName: string;
  id: number;
};
const GetValue = (props: value) => {
  return (
    <>
      <div>
        <div className="newApp">
          <h2>
            Hello Dear {props.firstName} with ID#{props.id}, Welcome to
            TypeScript App Bar.
          </h2>
        </div>
      </div>

      <div className="newBody">
        <p>
          <b>TypeScrit-React: </b>Here you see how I used props Example:
          <hr />
        </p>
        <h2 style={{ color: "green" }}>Welcome dear {props.firstName}</h2>
      </div>

      <div>
        <div className="newFooter">
          <h2>TypeScript: Footer</h2>
          <ul>
            <li>Name: {props.firstName} </li>
            <li>ID: {props.id} </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GetValue;
