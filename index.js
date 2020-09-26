const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());



const fruits = ['apple', 'banana', 'orange', 'watermelon'];
const users = ['Jamal', 'kamal', 'bamal', 'Dhamal', 'tomal', 'vamal'];


app.get('/', (req, res) => {
    // res.send("I knw how to open NODEMON Run ... YAY"); 
    const fruit = {
        product: 'ada',
        price : 220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'Banana', qty: 1000, price: 15000});
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.short);
    const name = users[id];
    res.send({id, name});
});

//server run
app.listen(4200, () => console.log("Listening to port : 4200"));