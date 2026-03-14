import express from "express";
import taskController from "../controllers/taskControllers.js";

const { getTasks, getTask, createTask, updateTask, deleteTask } = taskController;
const router = express.Router();

router.get("/task", getTasks);
router.get("/task/:id", getTask);
router.post("/task", createTask);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
