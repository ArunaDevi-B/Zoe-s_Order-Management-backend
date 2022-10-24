const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    try{
        console.log('hi its a route');
        res.send("hello");
    } catch (error) {
        console.log("error in index", error);
    }
});

app.get('/fruits', async (req, res) => {
    try{
        console.log('hi its a route');
        res.send("apple");
    } catch (error) {
        console.log("error in index", error);
    }
});

app.listen(9000, ()=>{
    console.log('Server is successfully running at port: 9000');
})