import { Todo } from "../../types/types";
import { readTodos } from "./todo.cont";
import { Request, Response } from "express";
import fs from "fs"
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { desc, isComplete } = req.body;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID not provided" });
  }

  const todos = await readTodos();

  const foundedTodos = todos.find((todo) => todo.id === id);

  if (!foundedTodos) {
    res.status(404).json({ success: false, message: "Todo not found" });
    return;
  }

  const updatedTodos = todos.map((todo: Todo) =>
    todo.id === id ? { ...todo, desc, isComplete } : todo
  );

  fs.writeFileSync("./todo.json", JSON.stringify(updatedTodos, null, 2));

  res.json({
    message: "Update successfully",
    updatedTodos,
  });
};
module.exports = {
    updateTodo
}