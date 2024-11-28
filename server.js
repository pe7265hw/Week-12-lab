const express = require('express') //import express library
const path = require('path') //path library used to connect files in different directories, path them together
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js') //imports index.js

const app = express() //creates the web app server

//enable parsing of POST request body
app.use(bodyParser.urlencoded({extended: false}))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

//the path of views directory will join with views directory
//that will create the path of the views directory
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'hbs') //use handlebars to generate views

app.use('/', indexRouter) //all the requests to the app are passed to indexRouter, this has the code that
//receieves the request and generates the response

//start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
}) //if server is told to use a specific port to use do that OR use port 3000