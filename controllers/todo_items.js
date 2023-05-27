const getTodo = (req, res) => {
  const id = req.params.id;
  res.send(`id: ${id}`);
};

const getAllTodos = (req, res) => {
  res.send("list of all todo items");
};

const createTodo = (req, res) => {
  res.send(req.body);
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  res.send(`deleted id: ${id}`);
};

const updateTodo = (req, res) => {
  const id = req.params.id;
  res.send(`updated id: ${id} with data: ${req.body.name}`);
};

export { getTodo, getAllTodos, createTodo, deleteTodo, updateTodo };
