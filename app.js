import express from "express";
import todo_items from "./routes/todo_items.js";

const app = express();
const PORT = 3500;

app.get('api/v1/to')

app.get("/", (req, res) => {
  res.send(`working`);
});

app.listen(PORT, console.log(`Servr runs at http://localhost:${PORT}`));
