import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
    dispatch({
      type: "CREATE_TASK",
      payload: json.data,
    });
    setForm({
      title: "",
      description: "",
      deadline: "",
    });
  };

  return (
    <div className="pt-24 px-6 mb-8">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-(--secondary) border border-gray-300 rounded-lg"
      >
        <h2 className="mb-4">Tambah Tugas Baru</h2>
        <label>Judul Tugas</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <label>Deskripsi</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
        />
        <button className="py-2 px-4 bg-(--primary) border border-gray-300 rounded-lg">
          Tambah Tugas
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
