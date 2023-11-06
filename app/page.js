"use client";

import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import { useTodo } from "./component/TodoContext";
import { redirect } from "next/navigation";
import Login from "./login/page";
import { useEffect } from "react";

export default function Home() {
  const { todoData, isLoading } = useTodo();
  useEffect(() => {
    if (localStorage.getItem("login") === "false") {
      setTimeout(() => redirect("/login"), 1);
    }
  }, []);
  return (
    <div className="min-h-screen text-center my-10">
      <AddTodo />
      {isLoading ? (
        <div className="text-2xl text-center pt-14">
          loading
          <span className="loading loading-spinner loading-md mx-4"></span>
        </div>
      ) : (
        <TodoList data={todoData} />
      )}
    </div>
  );
}
