const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middle);// Apply middle middleware globally

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

function auth(req,res,next) {
  // This is just a placeholder. In real applications, you would check the user's authentication status.
  req.loggedIn ='true';
  if (req.query.loggedIn=='true') {
    next();// User is authenticated, proceed to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }   
}


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});