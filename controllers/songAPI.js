const ArtistSchema = require("../models/artistSchema")
const UserSchema = require("../models/userSchema")
const SongSchema = require("../models/songSchema")


const songController = {

    index: function (req, res) {
      SongSchema.find({
          artistId: req.params.aid
        })
        .then(songs => {
          res.render("song/index", {
            songs: songs
          })

        });
    },

    new: function (req, res) {
      UserSchema.findById(req.params.uid)
        .then(user => {
          ArtistSchema.findById(req.params.aid)
            .then(artist => {
              res.render("song/new", {
                user: user,
                artist: artist
              });

            })

        })

    },


    create: function (req, res) {
      SongSchema.create({
          SongName: req.body.SongName,
          Album: req.body.Album,
          artistId: req.params.aid
      })
        .then(() => {
          res.redirect("song");
        });
    },



    show: function (req, res) {
      UserSchema.findById(req.params.uid)
        .then(user => {
          ArtistSchema.findById(req.params.aid)
            .then(artist => {
              SongSchema.findById(req.params.sid)
                .then(song => {
                  res.render("artist/show", {
                    user: user,
                    artist: artist,
                    song: song
                  });
                })
            });
        });

    },

    edit: function (req, res) {
      UserSchema.findById(req.params.uid)
        .then(user => {
          ArtistSchema.findById(req.params.aid)
            .then(artist => {
              SongSchema.findById(req.params.sid)
              res.render("artist/edit", {
                user: user,
                artist: artist
              });
            });
        });

    },
    update: function (req, res) {
        UserSchema.findById(req.params.uid)
          .then(user => {
              ArtistSchema.findById(req.params.aid)
                .then(artist => {
                  SongSchema.findByIdAndUpdate(req.params.sid, req.body, {
                      new: true
                    })
                    .then(() => {
                      res.redirect("/user/" + req.params.uid + "/artist/" + req.params.aid + "/song/" + req.params.sid);
                    });
                });
              });

            },
            delete: function (req, res) {
              SongSchema.findByIdAndRemove(req.params.sid)
                .then(() => {
                  res.redirect("/user/" + req.params.uid + "/artist/"  + req.params.aid + "/song/");
                });
            }
          }
        module.exports = songController;