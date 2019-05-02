const ArtistSchema = require("../models/artistSchema")
const UserSchema = require("../models/userSchema")


const artistController = {

  index: function (req, res) {
    ArtistSchema.find({ userId: req.params.uid})
      .then(artists => {
        res.render("artist/index", {artists: artists})

      });
},

  new: function (req, res) {
    UserSchema.findById(req.params.uid)
      .then(user => {
        res.render("artist/new", {user: user});
      })

  },


  create: function (req, res) {
      ArtistSchema.create({
      ArtistName: req.body.ArtistName,
      Genre: req.body.Genre,
      userId: req.params.uid
  })
      .then(() => {
          res.redirect("artist");
      });
  },



  show: function (req, res) {
    ArtistSchema.findById(req.params.aid)
      .then(artist => {
        res.render("artist/show", {artist: artist});
      });
  },
  edit: function (req, res) {
    ArtistSchema.findById(req.params.aid)
      .then(artist => {
        res.render("artist/edit", {artist: artist});
      });
  },
  update: function (req, res) {
    ArtistSchema.findByIdAndUpdate(req.params.aid, req.body, {new: true})
      .then(() => {
        res.redirect("/user/" + req.params.uid + "/artist/" + req.params.aid);
      });
  },
  delete: function (req, res) {
    ArtistSchema.findByIdAndRemove(req.params.aid)
      .then(() => {
        res.redirect("/user/" + req.params.uid + "/artist/");
      });
  }
}
module.exports = artistController;