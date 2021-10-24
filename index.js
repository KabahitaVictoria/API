const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //have to provide absolute path for file using path module

app.use('/static', express.static('public'));

app.get('/',(req,res)=>{ //if user searches for page
    res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html')) //what we send back to them 
})

app.all('*',(req,res)=>{
    res.status(404).send('Sorry, resource not found!')
})

app.listen(port,()=>{
console.log(`Server is listening at port: ${port}`);
})