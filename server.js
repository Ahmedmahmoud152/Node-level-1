/*console.log("Hello world!");

const os=require('os');

console.log(os.type());

console.log(os.version());
console.log(os.homedir());


console.log(__dirname);

console.log(__filename);  */
const express = require('express')

const app = express()
const port=3000;

app.get('/', (req, res) => {
  res.sendFile("./Views/home.html",{root:__dirname})
})

app.listen(port,()=>
{
    console.log(`http://localhost:${3000}/`);
    
})
