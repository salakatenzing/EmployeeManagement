const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./databasepg");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos",  (req, res) => {
    try {
      const { description } = req.body;
      const newTodo =  pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      console.log(req.body.description);
    //    console.log(newTodo);
      res.json(newTodo);
    } catch (err) {
      console.error(err.message);
    }
  });
//get all todos


//get a todo

//update a todo

//delete a todo

app.delete("/todos", (req,res) => {
  const message = req.body.description;
    try {
        const {description} = req.body;
        const deleteTodo = pool.query(
            'DELETE FROM todo WHERE "description" = $1', [message]
        );
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})