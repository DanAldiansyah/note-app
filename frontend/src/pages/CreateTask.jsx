import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTaskContext } from "../hooks/useTaskContext";

const CreateTask = () => {
  const navigate = useNavigate();
  const { dispatch } = useTaskContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = form;
    const url = "http://localhost:3000/api/task";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const json = await response.json();
    console.log(json);
    
    if (json.success) {
      alert(json.message);
      navigate("/");
      dispatch({
        type: "CREATE_TASK",
        payload: json.data,
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-(--primary) h-dvh flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-(--secondary) p-4 border border-(--neon-green) rounded-md w-100 h-100 "
      >
        <h1 className="mb-6 text-center text-(--white) text-xl font-bold">
          Create New Task
        </h1>
        <label className="block mb-2 text-white text-base font-bold">
          Title
        </label>
        <input
          className="mb-4 p-2 text-(--white) block border border-(--neon-green) w-full rounded-md "
          type="text"
          onChange={handleChange}
          name="title"
          required
        />
        <label className="block mb-2 text-white text-base font-bold">
          Description
        </label>
        <input
          type="text"
          className="mb-4 p-2 text-(--white) block border border-(--neon-green) w-full rounded-md "
          onChange={handleChange}
          name="description"
          required
        />
        <label className="block mb-2 text-white text-base font-bold">
          Deadline
        </label>
        <input
          type="date"
          className="mb-4 p-2 text-(--white) block border border-(--neon-green) w-full rounded-md "
          onChange={handleChange}
          name="deadline"
          required
        />
        <div className="flex justify-between items-center">
          <Link
            className="px-4 py-2 bg-(--primary) text-(--white) font-bold rounded-sm"
            to="/"
          >
            Back
          </Link>
          <button className="px-4 py-2 bg-(--neon-green) text-(--white) font-bold rounded-sm">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
