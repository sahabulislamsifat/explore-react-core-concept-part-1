import "./App.css";
// import Todo from "./Todo";
import Actor from "./actor";
import Singers from "./singer";

function App() {
  const actors = ["Sakib", "Jashim", "Rubel", "Bappa Raz", "Hero Alam"];
  const singer = [
    { id: 1, name: "Dr Mahfuzur Rahman", age: 68 },
    { id: 2, name: "Pritom Hasan", age: 78 },
    { id: 3, name: "Dj Shofique", age: 57 },
    { id: 4, name: "Dj Bravo", age: 65 },
  ];
  return (
    <>
      <h2>Vite + React</h2>

      {singer.map((singer) => (
        <Singers singer={singer}></Singers>
      ))}

      {/* <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}> </Actor>
      ))} */}

      {/* <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Core Concepts" isDone={true}></Todo>
      <Todo task="Basic Concepts" isDone={false}></Todo> */}
      {/* <Developer></Developer>
      <Person></Person>
      <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17000"></Device>
      <Device name="Watch" price="3000"></Device>
      <Student grade="7" section="A"></Student>
      <Student grade="14" section="B"></Student>
      <Student></Student> */}
    </>
  );
}

// function Device(props) {
//   return (
//     <h2>
//       This Device: {props.name} Price: {props.price}
//     </h2>
//   );
// }

// function Person() {
//   const age = 22;
//   const money = 100;
//   const person = { name: "Sifat", age: 22 };

//   return (
//     <h3>
//       I am {person.name} with age : {age + money}
//     </h3>
//   );
// }

// // const { grade, section } = { grade: "7", section: "A" };

// function Student({ grade = 0, section = "N/A" }) {
//   // console.log(grade, section);
//   return (
//     <div className="student">
//       {/* <h4>Name : Sahabul Islam Sifat</h4> */}
//       <h4>This is a Ideal Student</h4>
//       <p>Grade : {grade}</p>
//       <p>Section : {section}</p>
//       <p>Age : 22</p>
//     </div>
//   );
// }

// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     padding: "20px",
//     border: "2px solid purple",
//     borderRadius: "20px",
//   };
//   return (
//     <div style={developerStyle}>
//       <h4>Chapri Developer by React</h4>
//       <p>Coding :</p>
//     </div>
//   );
// }

export default App;
