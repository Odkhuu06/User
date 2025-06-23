import { Request, Response } from "express";
import { readTodos } from "./todo.cont";
export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todos = await readTodos();

  const todo = todos.find((todo) => todo.id === id);
console.log(id)
  if (!todo) {
    return res.json({ success: false, message: "not found todo" });
  }
  res.json({ todo });
  
};
module.exports = {
    getTodoById
}
