"use client";

import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import { useTodo } from "./component/TodoContext";

export default function Home() {
  const { todoData, isLoading } = useTodo();

  return (
    <div className="min-h-screen text-center my-10">
      <AddTodo />
      {isLoading ? (
        <div className="text-2xl text-center pt-14">loading ...</div>
      ) : (
        <TodoList data={todoData} />
      )}
    </div>
  );
}
