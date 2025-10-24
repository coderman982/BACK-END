const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middle);

app.get('/',  (req, res) => {
  res.send('Hello World!');
});



function middle(req,res,next) {
  console.log('This is a middleware function');
  next();
}


function middle2(req,res,next) {
  console.log('This is another middleware function');
  next();
}

function auth(req,res,next) {
  // This is just a placeholder. In real applications, you would check the user's authentication status.
  req.loggedIn === 'true';
  if (req.query.loggedIn=='true') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }   
}


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});