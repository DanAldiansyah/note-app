import { useTaskContext } from "../hooks/useTaskContext";
import trashIcon from "../assets/icons/trash.png";
import taskIcon from "../assets/icons/task.png";
import dateIcon from "../assets/icons/date.png";

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
    if (json.success) {
      dispatch({
        type: "DELETE_TASK",
        payload: json.data,
      });
    }
  };

  return (
    <div className="relative p-4 bg-(--primary) rounded-lg">
      <h3 className="mb-2">{task.title.toUpperCase()}</h3>
      <p className="flex gap-2 "><img className="self-start" src={taskIcon} alt="" /> {task.description}</p>
      <p className="flex gap-2 "><img src={dateIcon} alt="" /> {formatedDate}</p>
      <button onClick={handleDelete}><img className="absolute top-4 right-4" src={trashIcon} alt="" /></button>
    </div>
  );
};

export default Tasks;
