import { useReducer } from "react";
import { tasksReducer } from "./TaskReducer";
import { TasksContext } from "./TaskContext";

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: null,
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
