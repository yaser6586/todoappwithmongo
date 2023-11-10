"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useTodo } from "./TodoContext";
import { API_URL } from "@/config/config";

function AddTodo() {
  const { todoData, setTodoData } = useTodo();
  const [input, setInput] = useState("");
  const [id, setId] = useState("");

  async function handleAdd() {
    await fetch(`${API_URL}/api/todolist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Basic ${btoa(`test:test`)}`,
      },
      body: JSON.stringify({ text: input, isdone: false }),
    })
      .then(
        (res) => res.json()
        // console.log(res)
      )
      .then((res) => {
        // console.log(res);
        setId(res.insertedId);
        // console.log(id);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  // const [isAdded, setIsAdded] = useState(false);

  // if (isAdded) {
  //   redirect("/");
  // }
  useEffect(
    () => setTodoData([...todoData, { _id: id, text: input, isdone: false }]),
    [id]
  );

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-success w-full max-w-xs"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="btn btn-accent mx-5"
        onClick={() => {
          handleAdd();
          // setIsAdded(true);
          // setTimeout(() => handleAddToContext(), 1);
          // setTodoData([...todoData, { _id: id, text: input, isdone: false }]);
        }}

        //   axios
        //     .post("https://rahanik.iran.liara.run/add", { text: input })
        //     .then((res) => console.log(res.data))
      >
        add
      </button>
    </>
  );
}

export default AddTodo;
