import express from "express";
const app = express(); 
const PORT = 3500;

import todo_items from "./routes/todo_items.js";

app.use('/api/v1/todo_items', todo_items);

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`working`);
});
app.listen(PORT, console.log(`Servr runs at http://localhost:${PORT}`));
