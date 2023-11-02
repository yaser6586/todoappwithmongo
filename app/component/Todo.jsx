import React, { useState } from "react";

function Todo({ data, key }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(data.text);
  async function handleSave(e) {
    console.log(value, data.id);
    setIsEdit(false);
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
            <button className="btn btn-sm bg-error w-24">delete</button>
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
              onClick={(e) => handleSave(e)}
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
