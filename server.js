
// require express, method-override, and our routes

const express = require('express')
const app = express()
const methodOveride = require('method-override')
const routes = require('./routes/index')
const artistAPI = require("./controllers/artistsAPI")
const songAPI = require("./controllers/songAPI")
const userAPI = require("./controllers/userAPI")

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOveride('_method'))
app.set('view engine', 'hbs');


//= =====================
// Router
//= =====================
// Links the server to our Router File


//= =====================
// LISTENERS
//= =====================

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});