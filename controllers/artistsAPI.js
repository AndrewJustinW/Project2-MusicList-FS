const mongoose = require('../controllers/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

let artistSchema = mongoose.Schema({
  ArtistName: String,
  Genre: String,
  userId: ObjectId
});

let artistCollection = mongoose.model('Artist', artistSchema);

const artistController = {

  index: function (req, res) {
    artistCollection.find({ userId: req.params.uid})
      .then(artists => {
        res.render("artists/index", {artists: artists})

      });
},

  new: function (req, res) {
    User.findById(req.params.uid)
      .then(user => {
        res.render("artists/new", {user: user});
      })

  },


  create: function (req, res) {
      artistCollection.create({
      ArtistName: req.body.ArtistName,
      Genre: req.body.Genre,
      userId: req.params.uid
  })
      .then(() => {
          res.redirect("artist");
      });
  },



  show: function (req, res) {
    artistCollection.findById(req.params.aid)
      .then(artist => {
        res.render("artist/show", {artist: artist});
      });
  },
  edit: function (req, res) {
    artistCollection.findById(req.params.aid)
      .then(artist => {
        res.render("artist/edit", {artist: artist});
      });
  },
  update: function (req, res) {
    artistCollection.findByIdAndUpdate(req.params.aid, req.body, {new: true})
      .then(() => {
        res.redirect("/artist/" + req.params.aid);
      });
  },
  delete: function (req, res) {
    artistCollection.findByIdAndRemove(req.params.aid)
      .then(() => {
        res.redirect("/artist/");
      });
  }
}
module.exports = artistController;