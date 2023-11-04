"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ToDoContextProvider = createContext(null);
// export async function getTodo() {
//   const todoData = await fetch("https://rahanik.iran.liara.run/", {
//     cache: "no-store",
//   });
//   return todoData.json();
// }
function TodoContext({ children }) {
  const [todoData, setTodoData] = useState([{}]);
  useEffect(
    () => async () => {
      const todoData = await fetch("https://rahanik.iran.liara.run");
      const todo = await todoData.json();
      setTodoData(todo);
    },
    []
  );
  return (
    <ToDoContextProvider.Provider value={{ todoData, setTodoData }}>
      {children}
    </ToDoContextProvider.Provider>
  );
}

export default TodoContext;

export function useTodo() {
  return useContext(ToDoContextProvider);
}
