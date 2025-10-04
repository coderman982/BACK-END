const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Product = require('./models/product.model.js'); // <-- use require

app.use(express.json());//to parse json data

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{

    res.send("<h1>About Page</h1>");

})

app.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//connect to mongodb





mongoose.connect("mongodb+srv://admin:gplEmrfaT5A2hY9k@cluster0.jjd91os.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000);
    console.log("http://localhost:3000/");
}).catch((err)=>{
    console.log("Error connecting to MongoDB do ag",err);
});

//nodemon is used to automatically restart the server when file changes in the directory are detected.
//To install nodemon use the command npm install -g nodemon
//To run the server using nodemon use the command nodemon index.js
//or npm run server if the script is defined 