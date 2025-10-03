const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{

    res.send("<h1>About Page</h1>");

})


app.listen(3000);
console.log("http://localhost:3000/");
//nodemon is used to automatically restart the server when file changes in the directory are detected.
//To install nodemon use the command npm install -g nodemon
//To run the server using nodemon use the command nodemon index.js
//or npm run server if the script is defined in package.json