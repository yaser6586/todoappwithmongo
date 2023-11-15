"use client";

import { API_URL } from "@/config/config";
import { createContext, useContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

const ToDoContextProvider = createContext(null);

// const IsLoginValue = localStorage.getItem("login");

// export async function getTodo() {
//   const todoData = await fetch("https://rahanik.iran.liara.run/", {
//     cache: "no-store",
//   });
//   return todoData.json();
// }
function TodoContext({ children, session }) {
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
      await fetch(`${API_URL}/api/todolist`, {
        method: "GET",
        headers: {
          // Authorization: `Basic ${btoa(`test:test`)}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setTodoData(res));

      setIsLoading(false);
    }, 1);
  }, []);
  // useEffect(() => {
  //   console.log(todoData);
  // }, [todoData]);

  return (
    <SessionProvider session={session}>
      <ToDoContextProvider.Provider
        value={{ todoData, setTodoData, isLoading, isLogin, setIsLogin }}
      >
        {children}
      </ToDoContextProvider.Provider>
    </SessionProvider>
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
