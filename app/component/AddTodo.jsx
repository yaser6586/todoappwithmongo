"use client";
import React, { useState } from "react";
import axios from "axios";

function AddTodo() {
  const [input, setInput] = useState("");
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
        onClick={
          async () =>
            await fetch("https://rahanik.iran.liara.run", {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",
              },
              body: `text=${input}`,
            })
              .then((res) => console.log(res.data))
              .catch((err) => {
                console.log(err);
              })
          //   axios
          //     .post("https://rahanik.iran.liara.run/add", { text: input })
          //     .then((res) => console.log(res.data))
        }
      >
        add
      </button>
    </>
  );
}

export default AddTodo;
