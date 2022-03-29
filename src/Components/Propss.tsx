import React from "react";
import "./Components.css";
import Header from "./Header";
import Index from "./../Tools/index";
/**1. In this example, I used some very simple and easy examples of
 * Props in React-TypeScript. Let's get started the first Example:
 */
/*a. Add variable properties*/
type TagProps = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
};

const TagName = (props: TagProps) => {
  return (
    <>
      <div className="newApp">
        <h2>TypeScript App Bar</h2>
      </div>
      <div className="newBody">
        <p>
          <b>TypeScrit Training:</b> Following personal information about{" "}
          <b>
            {props.name} {props.lastName}{" "}
          </b>
          are passed by props in TypeScript React:
          <hr />
        </p>
        <p>
          <b>Name:</b> {props.name}{" "}
        </p>
        <p>
          <b>Last Name:</b> {props.lastName}{" "}
        </p>
        <p>
          <b>Phone:</b> {props.phone}{" "}
        </p>
        <p>
          <b>Email:</b> {props.email}{" "}
        </p>
      </div>
      <div className="newFooter">
        <h2>TypeScript: Footer</h2>
        <ul>
          <li>First </li>
          <li>Second </li>
          <li>Third </li>
        </ul>
      </div>
    </>
  );
};

const PropsApp = () => (
  <TagName
    name="Khudadad"
    lastName="Rasikh"
    email="kh.rasikh542@gmail.com"
    phone="+49(0)1634880974"
  />
);

/**2. In this example, I'd like to get a little more complex props and show you in another
 * component:
 */

const PassToAnother = () => {
  const id = 12221;
  const name = "Khudadad Rasikh";
  const mydate = new Date();
  return (
    <>
      <Index name={name} id={id} />
    </>
  );
};

export default PassToAnother;
