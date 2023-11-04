"use client";

import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import { useTodo } from "./component/TodoContext";

export default function Home() {
  const { todoData } = useTodo();

  return (
    <div className="min-w-fit text-center my-10">
      <AddTodo />
      {todoData && <TodoList data={todoData} />}
    </div>
  );
}
