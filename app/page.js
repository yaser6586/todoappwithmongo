"use client";

import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import { useTodo } from "./component/TodoContext";

export default function Home() {
  const { todoData, isLoading } = useTodo();

  return (
    <div className="min-w-fit text-center my-10">
      <AddTodo />
      {isLoading && <div className="text-xl text-center ">loading...</div>}
      {todoData && <TodoList data={todoData} />}
    </div>
  );
}
