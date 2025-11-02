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
        await product.save();
         // save the product to the database
         console.log(product.byName);
        res.status(201).send(product); // send the saved product as the response with status 201 (Created) by json
    } catch (error) {
        res.status(400).send({ error: error.message }); // handle errors and send a 400 response
    }
}); 

//get all products from api it is for accessing all products
app.get("/api/products/:id", async(req,res)=>{
    try{
        const id=req.params;// get the id from the request parameters it is for accessing a specific product by id 
        const product=await Product.findById(id); // find the product by id
        res.status(200).send(product); // send the found product as the response with status 200 (OK)
    }

    catch(error){
        res.status(400).send({error:error.message}); // handle errors and send a 400 response
    }
    
}
)

//update a product by id from api, you will use put to update specific data from the api
app.put("/api/products/:id",async(req,res)=>{
    try{
       const id=req.params; // get the id from the request parameters
       const product= await Product.findByIdAndUpdate(id,req.body); // find the product by id and update it with the request body, return the updated document
       if(!product){
        return res.status(404).send({error:"Product not found"}); // if product not found, send 404 response
       }
    }

    catch(error){
        res.status(400).send({error:error.message}); // handle errors and send a 400 response
}
})

//now when you "put in insomnia" a product by id, it will update the product in the database when you write field and its value like 
//{"name":"new product name", "price":100, "image":"new image url"} now put send and when you get id again it will show updated values  
//just write after post /api/products/:id eg: /api/products/64a7f2c5e1b2c3d4e5f6a7b8 then your updated fields in json


//delete a product by id from api, you will use delete to delete specific data from the api
app.delete("/api/products/:id",async(req,res)=>{
    try{
        const id=req.params; // get the id from the request parameters
        const product= await Product.findByIdAndDelete(id); // find the product by id and delete it
        if(!product){
            return res.status(404).send({error:"Product not found"}); // if product not found, send 404 response
           }
           res.status(200).send({message:"Product deleted successfully"}); // send success message with status 200 (OK)
    }

    catch(error){
        res.status(400).send({error:error.message}); // handle errors and send a 400 response
}
})

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
