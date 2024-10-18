// export default function Todo({ task }) {
//   //   task = "I want to be a good Programmer";
//   return <li>Task : {task}</li>;
// }

// Conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished : {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }

// // Conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"} : {task}
//     </li>
//   );
// }

// Conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone || ":Do it"} : {task}
//     </li>
//   );
// }
// Conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone && "Do it "} : {task}
//     </li>
//   );
// }

// Conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   let listItem;
//   if (isDone === true) {
//     listItem = <li>Finished : {task}</li>;
//   } else {
//     listItem = <li>Work on: {task}</li>;
//   }
//   return listItem;
// }
