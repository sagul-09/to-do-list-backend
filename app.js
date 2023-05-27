import express from "express";
import cors from "cors";
import todo_items from "./routes/todo_items.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/todo_items", todo_items);

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
