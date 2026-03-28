import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/signup" element />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
