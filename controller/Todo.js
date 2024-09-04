const db = require("../config/db");
const getAllTodos = (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
}

const createTodo = (req, res) => {
    const { task } = req.body;
    db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, task });
    });
}

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    db.query(
        'UPDATE todos SET task = ?, completed = ? WHERE id = ?',
        [task, completed, id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.sendStatus(200);
        }
    );
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(200);
    });
}

module.exports={getAllTodos, createTodo, updateTodo, deleteTodo};