const express = require('express')
const { getTodos, addTodo, getTodoById,getUpdate } = require(`../../controller/todo/todo.cont`)

const todoRouter = express.Router()

todoRouter.get('/', getTodos)

todoRouter.post('/', addTodo)

todoRouter.get('/:id', getTodoById)
todoRouter.put('/', getUpdate)

module.exports = {
    todoRouter
}