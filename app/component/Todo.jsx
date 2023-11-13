"use vlient";
import React, { useState } from "react";
import { useTodo } from "./TodoContext";
import { API_URL } from "@/config/config";

function Todo({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(data.text);
  const { todoData, setTodoData } = useTodo();
  const [isDone, setIsDone] = useState((data && data.isdone) || false);

  // const [isSaved, setIsSaved] = useState(false);
  // const [isDeleted, setIsDeleted] = useState(false);
  // if (isSaved) {
  //   redirect("/");
  // }
  // if (isDeleted) {
  //   redirect("/");
  // }
  // async function handleSave(e) {
  //   console.log(value, data.id);
  //   setIsEdit(false);
  //     fetch('http://localhost:3000/api/edit' , {
  //         method: "post",
  //         headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //         },

  //         body: JSON.stringify({
  //             id : data.id ,
  //             text : value
  //             })
  // }
  async function handleDelete(id) {
    setTodoData(todoData.filter((dt) => dt._id !== data._id));
    await fetch(`${API_URL}/api/deltodo/` + id, {
      method: "DELETE",
      headers: {
        // Authorization: `Basic ${btoa(`test:test`)}`,
      },
    }).then((res) => console.log(res));
    // setIsDeleted(true);
  }
  async function handleEdit(id) {
    await fetch(`${API_URL}/api/editodo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Basic ${btoa(`test:test`)}`,
      },
      body: JSON.stringify({ text: value }),
    });

    // setIsSaved(true);

    const newData = todoData.map((todos) => {
      if (todos._id === id) {
        return { ...todos, text: value };
      } else {
        return todos;
      }
    });
    setTodoData(newData);

    setIsEdit(false);
  }
  async function handleDone(e, id) {
    if (e.target.checked) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    const newData = todoData.map((todos) => {
      if (todos._id === id) {
        return { ...todos, isdone: isDone };
      } else {
        return todos;
      }
    });
    setTodoData(newData);

    await fetch(`${API_URL}/api/editdone/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Basic ${btoa(`test:test`)}`,
      },
      body: JSON.stringify({ isdone: isDone }),
    });

    // setIsSaved(true);
  }
  let content = null;
  if (!isEdit) {
    content = (
      <>
        <tr className="bg-base-200 my-2">
          <th>
            <label>
              {data.isdone && isDone ? (
                <input
                  type="checkbox"
                  className="checkbox "
                  onChange={(e) => handleDone(e, data._id)}
                  checked
                />
              ) : (
                <input
                  type="checkbox"
                  className="checkbox "
                  onChange={(e) => handleDone(e, data._id)}
                />
              )}
            </label>
          </th>
          <td>{!isDone ? data.text : <s>{data.text}</s>}</td>
          <td>
            <button
              className="btn btn-xs bg-success px-4 "
              onClick={() => setIsEdit(true)}
            >
              edit
            </button>
            <button
              className="btn btn-xs bg-error "
              onClick={() => handleDelete(data._id)}
            >
              delete
            </button>
          </td>
        </tr>
      </>
    );
  } else {
    content = (
      <>
        <tr className="bg-base-200 my-2">
          <th>
            <label>
              <input type="checkbox" className="checkbox" disabled />
            </label>
          </th>
          <td id={data.id}>
            <input
              className=" lg:input "
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </td>
          <td>
            <button
              className="btn btn-xs bg-success w-24"
              onClick={() => handleEdit(data._id)}
            >
              save
            </button>
          </td>
        </tr>
      </>
    );
  }
  return <>{content}</>;
}

export default Todo;
