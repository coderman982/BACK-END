const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middle);// Apply middle middleware globally
//No — calling next() inside one middleware does not automatically call any other middleware unless that other middleware is registered in the middleware/route chain.

//// register globally (middle2 will run after middle)
//app.use(middle);
//app.use(middle2);


app.get('/',  (req, res) => {
  res.send('Hello World!');
});

app.get('/dashboard', auth, (req, res) => {//use auth middlewarwe here locally
  res.send('Welcome to your dashboard!');})


function middle(req,res,next) {
  console.log('This is a middleware function');
  next();
}


function middle2(req,res,next) {
   next();
  console.log('This is another middleware function');//when middle2 is used, this log appears after the response is sent
  }

