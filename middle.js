const e = require('express');
const Express = require('express');
const app = Express();


app.use(Express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middle);

app.get('/',  (req, res) => {
  res.send('Hello World!');
});


app.get('/about', middle2, (req, res) => {
  res.send('About Page');});//first middleware function will be executed here then when we go to /about route second middleware function will be executed
         //then /about route handler will be executed


function middle(req,res,next) {
  console.log('This is a middleware function');
  next();
}


function middle2(req,res,next) {
  console.log('This is another middleware function');
  next();
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});