const express = require('express');



const app = express();



app.get('/', (req, res) => {
    // res.send("Thank you fr Calling me");
    res.send("I knw how to open NODE ... YAY"); 
})


//server run
app.listen(3000, () => console.log("Listening to port : 300"));