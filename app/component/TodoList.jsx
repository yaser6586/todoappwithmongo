"use client";
import React, { useState } from "react";
// import data from "@/lib/Data.json";
import Todo from "./Todo";

function TodoList({ data }) {
  const [todos, setTodos] = useState(data);

  return (
    <div className="overflow-x-auto w-3/4 text-center m-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="w-3/4">TODO</th>
            <th>OPERATIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todos.map((dt) => (
            <Todo key={dt._id} data={dt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
