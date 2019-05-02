let express = require('express');
let router = express.Router();

const users = require("../controllers/userAPI");
const artists = require("../controllers/artistsAPI");

// Users API
router.get("/", users.home);
router.get("/user", users.index);
router.get("/user/new", users.new);
router.post("/user", users.create);
router.get("/user/:uid", users.show);
router.get("/user/:uid/edit", users.edit);
router.put("/user/:uid", users.update);
router.delete("/user/:uid", users.delete);

// for artist API

router.get("/user/:uid/artist", artists.index);
router.get("/user/:uid/artist/new/", artists.new);
router.post("/user/:uid/artist", artists.create);
router.get("/user/:uid/artist/:aid", artists.show);
router.get("/user/:uid/artist/:aid/edit", artists.edit);
router.put("/user/:uid/artist/:aid/", artists.update);
router.delete("/user/:uid/artist/:aid", artists.delete);


module.exports = router;