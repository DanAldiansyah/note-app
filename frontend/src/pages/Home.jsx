import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

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
    <section className="bg-(--primary) min-h-dvh">
      <TaskForm />
      <section className="mx-6 p-4 bg-(--secondary) border border-gray-300 rounded-lg">
        <div className="mb-4">
          <h2>Tugas Saya</h2>
        </div>
        {tasks?.length > 0 ? (
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)
        ) : (
          <div className="my-8">
            <h4 className="text-center">
              Belum Ada Tugas. Silahkan Tambahkan Tugas
            </h4>
          </div>
        )}
      </section>
    </section>
  );
};

export default Home;
