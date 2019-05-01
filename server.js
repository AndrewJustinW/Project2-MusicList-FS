
// require express, method-override, and our routes

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes')
// const artistAPI = require("./controllers/artistsAPI")
// const songAPI = require("./controllers/songAPI")

//...for decoding body as js object

//...for "faking" DELETE and PUT/PATCH requests

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded())



//add middleware for handlebars here
app.set('view engine', 'hbs');
app.use("/", routes)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});