const express = require('express');
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes'); // Route

app.use(morgan("combined")); // HTTP logger

app.engine('hbs', exphbs.engine({
  extname: ".hbs"
})); // Template handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
})); // Apply middle ware of body
app.use(express.json());


// Routes init
route(app);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

