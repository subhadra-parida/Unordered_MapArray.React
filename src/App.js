import React from "react";
import './App.css';
const arrayOfObjects = [ { name: 'John', age: 23 },
 { name: 'Albert', age: 28 }, 
 { name: 'Gladly', age: 35 } ]

function Component() {
  return (
    <table>
      <ul>
        <li>
          {arrayOfObjects.map(({ name, age }) => (
          <p key={name}> {name} {age} </p>
         ))}
      </li>
      </ul>
    </table>
  );
}
export default Component;
