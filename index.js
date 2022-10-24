const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    try{
        res.send("hello");
    } catch (error) {
        console.log("error in index", error);
    }
});

app.listen(9000, ()=>{
    console.log('Server is successfully running at port: 9000');
})