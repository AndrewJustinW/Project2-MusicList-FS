// requirements: import mongoose
const mongoose = require('mongoose')


// Connect to a local database called "the-donut-shop"
mongoose.connect("mongodb://localhost/Project-2", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})
// When it connects, then console.log "Connected to MongoDB"

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project-2'
mongoose.connect(dbConnection, { useNewUrlParser: true})
  .then(() => {
    console.log("mongo is working");
  })


// export your mongoose connection
module.exports = mongoose