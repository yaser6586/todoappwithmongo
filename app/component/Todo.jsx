import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useTodo } from "./TodoContext";

function Todo({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(data.text);
  const { todoData, setTodoData } = useTodo();

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
    await fetch("https://rahanik.iran.liara.run/" + id, {
      method: "DELETE",
    }).then((res) => console.log(res));
    // setIsDeleted(true);
  }
  async function handleEdit(id) {
    await fetch("https://rahanik.iran.liara.run", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `text=${value}&id=${id}`,
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
  let content = null;
  if (!isEdit) {
    content = (
      <>
        <tr className="bg-base-200">
          <td id={data.id}>{data.text}</td>
          <td>
            <button
              className="btn btn-sm bg-success w-24"
              onClick={() => setIsEdit(true)}
            >
              edit
            </button>
            <button
              className="btn btn-sm bg-error w-24"
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
        <tr className="bg-base-200">
          <td id={data.id}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </td>
          <td>
            <button
              className="btn btn-sm bg-success w-24"
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
