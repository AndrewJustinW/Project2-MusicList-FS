const mongoose = require('../controllers/connection');

let userSchema = mongoose.Schema({
    Username: String,
    FavoriteGenre: String,
});

module.exports = mongoose.model('User', userSchema);
