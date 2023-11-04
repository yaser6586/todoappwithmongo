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
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://rahanik.iran.liara.run");
      const todo = await res.json();
      setTodoData(todo);
    }, 1000);
  }, []);
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
