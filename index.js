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
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is successfully running at port: 9000');
})

process.on('beforeExit', code => {
    // Can make asynchronous calls
    setTimeout(() => {
      console.log(`Process will exit with code: ${code}`)
      process.exit(code)
    }, 100)
  })
  
  process.on('exit', code => {
    // Only synchronous calls
    console.log(`Process exited with code: ${code}`)
  })