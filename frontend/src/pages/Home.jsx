import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [result, setResult] = useState(undefined);
  const url = "http://localhost:3000/api/task/";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setResult(json.datas);
    };

    getData();
  }, []);

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
        <div className="flex justify-between items-center">
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
        {result &&
          result.map((data) => (
            <div
              key={data._id}
              className="bg-(--secondary) border border-(--neon-green) rounded mb-4 p-4"
            >
              <h2 className="text-lg text-(--neon-green) font-bold mb-1">
                {data.title.toUpperCase()}
              </h2>
              <p className="text-base text-(--white) font-medium">
                {data.description}
              </p>
              <p className="text-base text-(--white)">
                Deadline : {data.deadline}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
