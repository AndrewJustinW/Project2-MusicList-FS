// requirements: import mongoose
const mongoose = require('mongoose')


// Connect to a local database called "the-donut-shop"
mongoose.connect("mongodb://localhost/Music-List", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})
// When it connects, then console.log "Connected to MongoDB"


// export your mongoose connection
module.exports = mongoose