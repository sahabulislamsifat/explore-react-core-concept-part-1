// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  );
}

function Person() {
  const age = 22;
  const money = 100;
  const person = { name: "Sifat", age: 22 };

  return (
    <h3>
      I am {person.name} with age : {age + money}
    </h3>
  );
}

function Student() {
  return (
    <div>
      <h4>Name : Sahabul Islam Sifat</h4>
      <p>Age : 22</p>
    </div>
  );
}

export default App;
