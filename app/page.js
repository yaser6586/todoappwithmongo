import Image from "next/image";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
export async function getTodo() {
  const todoData = await fetch("https://rahanik.iran.liara.run/", {
    cache: "no-store",
  });
  return todoData.json();
}
export default async function Home({}) {
  const data = await getTodo();
  return (
    <div className="min-w-fit text-center my-10">
      <AddTodo />
      <TodoList data={data} />
    </div>
  );
}
