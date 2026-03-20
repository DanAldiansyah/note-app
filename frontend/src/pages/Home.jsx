import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";

const Home = () => {
  const { tasks, dispatch } = useTaskContext();
  const url = "http://localhost:3000/api/task/";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: "SET_TASK",
        payload: json.datas,
      });
    };

    getData();
  }, [dispatch]);

  return (
    <div className="bg-(--primary) min-h-dvh">
      <div className="py-16 px-4">
        <div>
          <p className="mt-4 text-(--white) text-3xl font-bold">
            Hello!!!, How Your Days Going?
          </p>
        </div>
      </div>

      <div className="px-4 py-4 rounded-t-2xl bg-(--primary) border-t-2 border-(--neon-green)">
        <div className="flex justify-between items-center px-4">
          <p className="my-6 text-2xl font-extrabold text-(--white)">
            My Tasks
          </p>
          <Link
            to="/create-task"
            className="p-2 bg-(--neon-green) text-base text-(--white) font-extrabold rounded "
          >
            Create Task
          </Link>
        </div>
        { tasks &&
          tasks.map(task => (
            <Tasks key={task._id} task={task} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
