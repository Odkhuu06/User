import { Todo } from "../../types/types";
import fs from "fs-extra";

export const readTodos = async () => {
  const todos = fs.readFileSync("./todo.json", "utf8");

  return JSON.parse(todos) as Todo[];
};
module.exports = {
    readTodos
}