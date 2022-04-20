const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./databasepg");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/employeeDB",  (req, res) => {
    try {
      const {values} = req.body;
      
      const newEmpl =  pool.query(
        "INSERT INTO employee (name, empl_id, role, salary) VALUES($1, $2, $3, $4) RETURNING *",
        [values.name, values.empl_id, values.role, values.salary]
      );
      console.log(values)
      
      res.json(newEmpl);
    } catch (err) {
      console.error(err.message);
    }
  });
//get all todos


//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
