const mongoose = require('../controllers/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

let songSchema = mongoose.Schema({
    SongName: String,
    Album: String,
    userId: ObjectId,
    artistId: ObjectId
});

module.exports = mongoose.model('Song', songSchema);
