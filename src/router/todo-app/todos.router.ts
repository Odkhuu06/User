const express = require('express')
const {readTodos}=require(`../../controller/todo/todo.cont.ts`)
const {addTodo}=require(`../../controller/todo/add-todo`)
const {updateTodo}=require(`../../controller/todo/update-todo`)
const {getDelete}=require(`../../controller/todo/delete-todo`)
const {getTodoById}=require(`../../controller/todo/get-todo`)

const todoRouter = express.Router()

todoRouter.get('/', readTodos)

todoRouter.post('/', addTodo)

todoRouter.get('/:id', getTodoById)

todoRouter.put('/:id', updateTodo)

todoRouter.delete('/:id', getDelete)

module.exports={
    todoRouter
}