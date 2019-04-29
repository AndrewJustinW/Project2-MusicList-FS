
// require express, method-override, and our routes

const express = require('express')
const app = express()
const methodOveride = require('method-override')
const routes = require('./routes/index')

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOveride('_method'))
app.set('view engine', 'hbs');


//= =====================
// LISTENERS
//= =====================
// CONNECT MONGOOSE TO "musiclist"
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});