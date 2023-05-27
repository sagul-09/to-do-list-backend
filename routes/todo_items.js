import express from "express";
const router = express.Router();
import { getAllToDoItems, createNewToDoItems } from "../controllers/todo_items.js";

router.route("/").get( getAllToDoItems ).post(createNewToDoItems);

export default router;
