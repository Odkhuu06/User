import express, { Request, Response } from "express";
import { db } from "../..";
import { ObjectId } from "mongodb";
import { Todo } from "../../types/types";

let todos:Todo[]=[]
const todoRouter = express.Router();
todoRouter.get("/todo", async (req: Request, res: Response) => {
    const response=db.collection("todo").find()

    const todos=await response.toArray()
    return JSON.parse(todos) 
} )

todoRouter.post("/addTodo", async (req: Request, res: Response) => {
  const { desc, isc } = req.body;
  try {
    const response = db.collection("todo").insertOne({ desc, isc });
    const todo = await response;
    res.status(200);
    res.json(todo);
  } catch (error) {
    res.status(400).send("api error");
  }
});

todoRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteUser = await db
      .collection("todo")
      .deleteOne({ _id: new ObjectId(id) });
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
});
todoRouter.put("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updateTodo = await db
      .collection("todo")
      .updateOne({ _id: new ObjectId(id) }, { $set: { desc: "hewteh"} });
    res.json(updateTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
});

export default todoRouter;
