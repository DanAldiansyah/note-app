import Task from "../models/taskModels.js";
import response from "../middlewares/response.js";
import mongoose from "mongoose";

const getTasks = async (req, res, next) => {
  try {
    const task = await Task.find({});
    response(res, 200, true, "Mendapatkan semua tugas", task);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response(res, 400, false, "Tidak dapat menemukan tugas");
    }

    const task = await Task.findById(id);

    if (!task) {
      return response(res, 404, false, "Tidak dapat menemukan tugas");
    }
    response(res, 200, true, "Mendapatkan Tugas lewat id", task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { title, description, deadline } = req.body;

  try {
    const task = await Task.create({ title, description, deadline });
    response(res, 201, true, "Berhasil menambahkan tugas", task);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response(res, 400, false, "Tidak dapat menemukan tugas");
    }

    const task = await Task.findByIdAndUpdate(id, {
      ...req.body,
    });

    if (!task) {
      return response(res, 404, false, "Tidak dapat menemukan tugas");
    }
    response(res, 200, true, "Update tugas berhasil");
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response(res, 400, false, "Tidak dapat menemukan tugas");
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return response(res, 404, false, "Tidak dapat menemukan tugas");
    }
    response(res, 200, true, "Hapus tugas berhasil", task);
  } catch (error) {
    next(error);
  }
};

export default { getTasks, getTask, createTask, updateTask, deleteTask };
