import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Complete Assignment",
      completed: false,
    },
    {
      id: 3,
      text: "Practice JavaScript",
      completed: true,
    },
  ]);

  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>
  );
}

export default App
