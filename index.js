const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())

const users = ['Jamal', 'kamal', 'bamal', 'Dhamal', 'tomal', 'vamal'];

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'Banana', qty: 1000, price: 15000});
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.short);
    const name = users[id];
    res.send({id, name});
});

//post
app.post('/addUser', (req, res) =>{
    // console.log('data reveived', req.body);

    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
});

//server run
app.listen(4200, () => console.log("Listening to port : 4200"));