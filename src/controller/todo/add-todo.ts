import fs from "fs-extra";
import { nanoid } from "nanoid";
import { Request, Response } from "express";
import { readTodos } from "./todo.cont";

export const addTodo = async (req: Request, res: Response) => {
  const { desc } = req.body;
  const uniqueId = nanoid();

  const todo = {
    id: uniqueId,
    desc,
    isComplete: false,
  };

  const todos = await readTodos();

  fs.writeFileSync("./todo.json", JSON.stringify([...todos, todo], null, 2));

  res.json({ success: true, todos });
};
// module.exports = {
//     addTodo
// }
export default addTodo