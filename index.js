const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Product = require('./models/product.model.js'); // <-- use require

app.use(express.json());//to parse json data


app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.post("/api/products", async (req, res) => {
    try {
        const product = new Product(req.body); // create a new product instance using the request body
        await product.save(); // save the product to the database
        res.status(201).send(product); // send the saved product as the response with status 201 (Created)
    } catch (error) {
        res.status(400).send({ error: error.message }); // handle errors and send a 400 response
    }
}); 





mongoose.connect("mongodb+srv://admin:gplEmrfaT5A2hY9k@cluster0.jjd91os.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000);
    console.log("http://localhost:3000/");
}).catch((err)=>{
    console.log("Error connecting to MongoDB do",err);
});

//nodemon is used to automatically restart the server when file changes in the directory are detected.
//To install nodemon use the command npm install -g nodemon
//To run the server using nodemon use the command nodemon index.js


app.post("/ap/pr",async(req,res)=>{
    const product=new Product(req.body);
    await product.save();
