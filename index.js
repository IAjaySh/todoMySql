const express = require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('./controller/Todo');
const db = require('./config/db');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/todos', getAllTodos);

app.post('/todos', createTodo);

app.put('/todos/:id', updateTodo);

app.delete('/todos/:id', deleteTodo);

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
