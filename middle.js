const e = require('express');
const Express = require('express');
const app = Express();


app.use(Express.json());
app.use(express.urlencoded({ extended: true }));

function middle(req,res,next) {
  console.log('This is a middleware function');
  next();
}