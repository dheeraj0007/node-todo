const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;