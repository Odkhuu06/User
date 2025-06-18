import { Todo } from "../../types/types";
import { Request, Response }  from "express"
import { nanoid } from "nanoid";
import fs from "fs-extra";
const todos:Todo[] = []
const getTodos = (req:Request, res:Response) => {
    res.json({ todos })
}
const uniqueId=nanoid()
const addTodo = (req:Request, res:Response ) => {
    const { desc } = req.body

    const todo = {
        id: uniqueId,
        desc,
        isComplete: false,
    }

    todos.push(todo)

    res.json({ success: true, todos })
}

const getUpdate=(req:Request, res:Response)=>{
    const {id}=req.params
    const todo = todos.find((todo) => todo.id === (id))
     if (!todo) {

        res.json({ success: false, message: 'not found todo' })
    }

    res.json({ todo })
}

const getTodoById = (req:Request, res:Response) => {
    const { id } = req.params

    const todo = todos.find((todo) => todo.id === (id))

    if (!todo) {

        res.json({ success: false, message: 'not found todo' })
    }
    res.json({ todo })
}

module.exports = {
    getTodoById, getTodos, addTodo,getUpdate
}