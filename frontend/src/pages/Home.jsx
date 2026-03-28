import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import { Link } from "react-router-dom";
import Tasks from "../components/TaskDetails";

const Home = () => {
  const { tasks, dispatch } = useTaskContext();
  const url = "http://localhost:3000/api/task";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: "SET_TASK",
        payload: json.data,
      });
    };

    getData();
  }, [dispatch]);

  return (
    <div className="bg-(--primary) min-h-dvh">
      <div className="py-16 px-4">
        <div>
          <p className="mt-4 text-center text-(--white) text-3xl font-bold">
            Tugas Akan Selesai Jika Dikerjakan
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
            Tambah 
          </Link>
        </div>
        {tasks?.length > 0 ? (
          tasks.map((task) => <Tasks key={task._id} task={task} />)
        ) : (
          <h2 className="mt-8 text-center text-(--white) text-xl font-bold">
            Belum Ada Tugas Silahkan Tambahkan
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;
