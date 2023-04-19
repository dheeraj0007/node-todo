const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
const Todo = require('./models/todo');

app.get('/', async (req, res) => {
    let todos = await Todo.find({});
    // console.log(todos, "here");
    return res.render('home', {
        title: "Todo App",
        tasks: todos,
    })
})

app.post('/newTodo', async (req, res) => {
    let todo = await Todo.create(req.body);
    await todo.save();
    return res.redirect('/');
})

app.get('/delete/:id', async (req, res) => {
    let todo = await Todo.findByIdAndDelete(req.params.id);
    console.log(todo);
    return res.redirect('back');
})

app.listen(port, () => {
    console.log("Server is running 🚀🚀🚀 on port ", port);
})