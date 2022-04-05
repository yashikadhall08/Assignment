const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Database
const db = require('./config/database')
 
//Test
db.authenticate()
.then(() => console.log('DataBase connected....'))
.catch(err =>{console.log("Error: ", err)})

// User Routes
app.use('/',require('./routes/routes'))
const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log('Server started...')
})
