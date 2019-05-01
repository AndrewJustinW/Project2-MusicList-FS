let express = require('express');
let router = express.Router();

const users = require("../controllers/userAPI");
const artists = require("../controllers/artistsAPI");

router.get("/", users.home);
router.get("/user", users.index);
router.get("/user/new", users.new);
router.post("/user", users.create);
router.get("/user/:uid", users.show);
router.get("/user/:uid/edit", users.edit);
router.put("/user/:uid", users.update);
router.delete("/user/:uid", users.delete);


module.exports = router;