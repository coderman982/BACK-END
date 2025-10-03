const express=require('express');
const app=express();
const mongoose=require('mongoose');



app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{

    res.send("<h1>About Page</h1>");

})

mongoose.connect("mongodb+srv://admin:Ru7AX9BsQcytdrf4@cluster0.sy0jyov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000);
    console.log("http://localhost:3000/");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

//nodemon is used to automatically restart the server when file changes in the directory are detected.
//To install nodemon use the command npm install -g nodemon
//To run the server using nodemon use the command nodemon index.js
//or npm run server if the script is defined 