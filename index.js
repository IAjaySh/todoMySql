const express = require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('./controller/Todo');
const db = require('./config/db');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/api/todo/get', getAllTodos);

app.post('/api/todo/create', createTodo);

app.put('/api/todo/update/:id', updateTodo);

app.delete('/api/todo/delete/:id', deleteTodo);

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;