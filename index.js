const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('./public'))

//make a request
app.get('/',(req,res)=>{ //the root; where your app will start.
    return res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('/about',(req,res)=>{
    return res.send('<h1> About page </h1>')
})

app.all('*',(req,res)=>{
    return res.status(404).send('<h2> Sorry, resource not found! </h2>')
})

//spin up express server
app.listen(port, ()=>{
    console.log(`Sample app listening at http://localhost:${port}`);
})