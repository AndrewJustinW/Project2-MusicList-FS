const mongoose = require('../controllers/connection');

let userSchema = mongoose.Schema({
    Username: String,
    FavoriteGenre: String,
});

let UserCollection = mongoose.model('User', userSchema);

const userController = {
    home: function (req, res) {
        res.render("home");
      },

  index: function (req, res) {
    UserCollection.find()
      .then(users => {
        res.render("user/index", { users });
      });
  },
  new: function (req, res) {
    res.render("user/new");
  },
  create: function (req, res) {
    UserCollection.create(req.body)
      .then(() => {
        res.redirect("/user");
      });
  },
  show: function (req, res) {
    UserCollection.findById(req.params.uid)
      .then(user => {
        res.render("user/show", { user });
      });
  },
  edit: function (req, res) {
    UserCollection.findById(req.params.uid)
      .then(user => {
        res.render("user/edit", { user });
      });
  },
  update: function (req, res) {
    UserCollection.findByIdAndUpdate(req.params.uid, req.body, { new: true })
      .then(() => {
        res.redirect("/user/" + req.params.uid);
      });
  },
  delete: function (req, res) {
    UserCollection.findByIdAndRemove(req.params.uid)
      .then(() => {
        res.redirect("/user/");
      });
  }
}
//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = userController;