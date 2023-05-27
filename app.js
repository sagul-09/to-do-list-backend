import express from "express";
import todo_items from "./routes/todo_items.js";

const app = express(); 
const PORT = 3500;

app.get("/", (req, res) => {
  res.send(`working`);
});

app.use('/api/v1/todo_items', todo_items);

app.listen(PORT, console.log(`Servr runs at http://localhost:${PORT}`));
