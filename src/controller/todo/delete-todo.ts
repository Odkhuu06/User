import { Request, Response } from "express";
import fs from "fs-extra";
import { Todo } from "../../types/types";
export const getDelete = (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: "ID not provided" });
  }

  const existingData = fs.readFileSync("./todo.json", "utf8");
  let parsedData = [];
  if (existingData.trim() !== "") {
    parsedData = JSON.parse(existingData);
  }

  const deleteUser = parsedData.filter((todo: Todo) => todo.id !== id);

  fs.writeFileSync("./todo.json", JSON.stringify(deleteUser, null, 2));

  res.json({
    message: "Deleted successfully",
    id,
  });
 
};

module.exports = {
    getDelete
}
