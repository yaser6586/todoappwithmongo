"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ToDoContextProvider = createContext(null);

// const IsLoginValue = localStorage.getItem("login");

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
    if (window !== "undefined") {
      const initial = localStorage.getItem("login") || false;
      // setIsLogin(JSON.parse(initial));
      if (initial === "true") {
        setIsLogin(true);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLogin));
  }, [isLogin]);

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
    }, 100);
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

// export async function getServerSideProps(req) {
//   const cookie = parseCookie(req);
//   const initial = await cookie.login;
//   return {
//     props: {
//       initial,
//     },
//   };
// }

export function useTodo() {
  return useContext(ToDoContextProvider);
}
