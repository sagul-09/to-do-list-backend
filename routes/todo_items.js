import express from "express";
const router = express.Router();
import { getAllToDoItems } from "../controllers/todo_items.js";

router.route("/").get( getAllToDoItems );

export default router;
