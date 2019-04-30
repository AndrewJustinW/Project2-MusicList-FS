// requirements: import mongoose
const mongoose = require('mongoose')


// When it connects, then console.log "Connected to MongoDB"

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project-2'
mongoose.connect(dbConnection, { useNewUrlParser: true})
  .then(() => {
    console.log("Mongo is working");
  })


// export your mongoose connection
module.exports = mongoose