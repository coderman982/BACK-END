const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{

    res.render("<h1>About Page</h1>");
})


app.listen(3000);
console.log("http://localhost:3000/");
