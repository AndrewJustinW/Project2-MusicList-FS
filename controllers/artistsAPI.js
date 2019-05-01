const mongoose = require('../controllers/connection');

let artistSchema = mongoose.Schema({
  ArtistName: String,
  Genre: String,
  userId: ObjectId
});

let artistCollection = mongoose.model('Artist', artistSchema);

const artistController = {

  index: function (req, res) {
    artistCollection.find()
      .then(users => {
        res.render("user/index", {
          users
        });
      });
  },
  new: function (req, res) {
    res.render("user/new");
  },
  create: function (req, res) {
    artistCollection.create(req.body)
      .then(() => {
        res.redirect("/user");
      });
  },
  show: function (req, res) {
    artistCollection.findById(req.params.uid)
      .then(user => {
        res.render("user/show", {
          user
        });
      });
  },
  edit: function (req, res) {
    artistCollection.findById(req.params.uid)
      .then(user => {
        res.render("user/edit", {
          user
        });
      });
  },
  update: function (req, res) {
    artistCollection.findByIdAndUpdate(req.params.uid, req.body, {
        new: true
      })
      .then(() => {
        res.redirect("/user/" + req.params.uid);
      });
  },
  delete: function (req, res) {
    artistCollection.findByIdAndRemove(req.params.uid)
      .then(() => {
        res.redirect("/user/");
      });
  }
}
module.exports = artistController;