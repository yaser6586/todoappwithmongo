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
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://rahanik.iran.liara.run", {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(`test:test`)}`,
        },
      });
      const todo = await res.json();
      setTodoData(todo);
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <ToDoContextProvider.Provider
      value={{ todoData, setTodoData, isLoading, isLogin, setIsLogin }}
    >
      {children}
    </ToDoContextProvider.Provider>
  );
}

export default TodoContext;

export function useTodo() {
  return useContext(ToDoContextProvider);
}
