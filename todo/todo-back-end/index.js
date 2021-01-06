const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path')
const database = require('./src/database.js');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Welcome to the todo application's API");
});

app.get('/users', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        const users = data.split("\n").map((user) => {
            return {
                id: user.split('-')[0],
                name: user.split('-')[1]
            }
        });

        res.json({
            users: users
        });
    });
})

app.get('/users/:id', (req, res) => {
    const queryId = req.params.id;

    fs.readFile(path.join(__dirname, 'users.txt'), 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        const users = data.split("\n").map((user) => {
            return {
                id: user.split('-')[0],
                name: user.split('-')[1]
            }
        });

        const user = users.filter((user) => {
            if(user.id == queryId) {
                 return true;
            }
            return false;
        })

        res.json(user);
    });
});

// we use this endpoint to get all tasks from mysql database with the creator name
app.get('/tasks', (req, res) => {
    database.query("select tasks.*, users.name from tasks join users on tasks.user_id = users.id;", (errors, result) => {
        if(errors) {
            return res.json({message: 'Something went wrong..'});
        }

        res.json({tasks: result});
    });
});

// we use this endpoint to store the newly created tasks in db
app.post('/tasks', (req, res) => {
    let title = req.body.title;

    // inset to db
    database.query(`INSERT INTO tasks (title) VALUES ('${title}');`, (error, result) => {
        if(error) { 
            throw new Error;
        }

        database.query(`select tasks.*, users.name from tasks join users on tasks.user_id = users.id where tasks.id = ${result.insertId}`, (error, result) => {
            if(error) { 
                throw new Error;
            }

            res.json({task: result});
        })
    });
})

app.listen(3000, () => {
  console.log('Server is running now on port 3000')
})