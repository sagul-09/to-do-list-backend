import express from "express";
const router = express.Router();
import {
  getTodo,
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo_items.js";

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo).delete(deleteTodo).patch(updateTodo);

export default router;
