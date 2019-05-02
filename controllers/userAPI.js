const UserSchema = require("../models/userSchema")

const userController = {
    home: function (req, res) {
        res.render("home");
    },

    index: function (req, res) {
        UserSchema.find()
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
        UserSchema.create(req.body)
            .then(() => {
                res.redirect("/user");
            });
    },
    show: function (req, res) {
        UserSchema.findById(req.params.uid)
            .then(user => {
                res.render("user/show", {
                    user
                });
            });
    },
    edit: function (req, res) {
        UserSchema.findById(req.params.uid)
            .then(user => {
                res.render("user/edit", {
                    user
                });
            });
    },
    update: function (req, res) {
        UserSchema.findByIdAndUpdate(req.params.uid, req.body, {
                new: true
            })
            .then(() => {
                res.redirect("/user/" + req.params.uid);
            });
    },
    delete: function (req, res) {
        UserSchema.findByIdAndRemove(req.params.uid)
            .then(() => {
                res.redirect("/user/");
            });
    }
}
//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = userController
    
