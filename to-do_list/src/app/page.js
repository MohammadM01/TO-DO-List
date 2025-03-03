"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-around mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-normal">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded font-bold"
          >
            Completed
          </button>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-zinc-800 text-white p-5 text-5xl font-bold text-center ">
        Mohammad's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2 "
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2 "
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-zinc-800 text-white px-3 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
