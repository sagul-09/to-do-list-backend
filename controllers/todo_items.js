const getAllToDoItems = (req, res) => {
  res.send("list of todo items");
};

const createNewToDoItems = (req, res) => {
  res.send(req.body);
};

export { getAllToDoItems, createNewToDoItems };
