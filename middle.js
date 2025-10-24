const e = require('express');
const Express = require('express');
const app = Express();


app.use(Express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', middle, (req, res) => {
  res.send('Hello World!');
});



function middle(req,res,next) {
  console.log('This is a middleware function');
  next();
}