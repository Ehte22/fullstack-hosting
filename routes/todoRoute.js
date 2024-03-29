const router = require("express").Router()
const todoController = require("./../controllers/todoController")

router
    .get("/", todoController.getTodos)
    .post("/add", todoController.addTodo)
    .put("/update/:id", todoController.updateTodo)
    .delete("/delete/:id", todoController.deleteTodo)

module.exports = router