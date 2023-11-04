"use client";
import React, { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useTodo } from "./TodoContext";

function AddTodo() {
  const { todoData, setTodoData } = useTodo();
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  // const [isAdded, setIsAdded] = useState(false);

  // if (isAdded) {
  //   redirect("/");
  // }
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
        onClick={async () => {
          await fetch("https://rahanik.iran.liara.run", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `text=${input}`,
          })
            .then((res) => res.json())
            .then((res) => setId(res.id))
            .catch((err) => {
              console.log(err);
            });
          // setIsAdded(true);
          setTodoData([...todoData, { id: id, text: input }]);
        }}
        //   axios
        //     .post("https://rahanik.iran.liara.run/add", { text: input })
        //     .then((res) => console.log(res.data))
      >
        <Add></Add>
      </button>
    </>
  );
}

export default AddTodo;
