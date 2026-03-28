import trashImg from "../assets/trash-solid-full.svg";
import { useTaskContext } from "../hooks/useTaskContext";

const Tasks = ({ task }) => {
  const { dispatch } = useTaskContext();
  const rawDate = new Date(task.deadline);
  const formatedDate = rawDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleDelete = async () => {
    const url = "http://localhost:3000/api/task/";
    const response = await fetch(url + task._id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      dispatch({
        type: "DELETE_TASK",
        payload: json.data,
      });
    }
  };

  return (
    <div
      key={task._id}
      className="bg-(--secondary) relative border border-(--neon-green) rounded mb-4 p-4"
    >
      <h2 className="text-lg text-(--neon-green) font-bold mb-1">
        {task.title.toUpperCase()}
      </h2>
      <p className="text-base text-(--white) font-medium">{task.description}</p>
      <p className="text-base text-(--white)">Deadline : {formatedDate}</p>
      <button onClick={handleDelete} className="absolute top-4 right-4">
        <img
          className="w-6 h-6 p-1 rounded-full bg-(--neon-green)"
          src={trashImg}
          alt=""
        />
      </button>
    </div>
  );
};

export default Tasks;
